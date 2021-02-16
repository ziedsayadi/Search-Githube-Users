import React, { useEffect, useState } from 'react'
import MockUser from "./mockData/MockUser";
import MockFollowers from "./mockData/MockFollowers"
import MockRepos from "./mockData/MockRepos";
import axios from 'axios'

const rootUrl = "https://api.github.com/"


const GitContext = React.createContext();
const ContextProvider =({children})=>{
    // getting all data from mockData 
    const [gitHubUser, setgitHubUser] = useState(MockUser)
    const [followers, setFollowers] = useState(MockFollowers)
    const [repos, setRepos] = useState(MockRepos)

    // setting requests state
    const [requests, setRequests] = useState(0);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({show:false,msg:""})

    // getting requests from rootApi
    const toggleError = (show=false,msg="")=>{
        setError({show,msg})
    }

    const searchUserData = async(user)=>{
        toggleError();
        setLoading(true)
        const respense = await axios.get(`${rootUrl}users/${user}`)
        .catch(err=>console.log(err))
        if(respense){
            setgitHubUser(respense.data)
            const {followers_url,repos_url} = respense.data
            await Promise.allSettled([
                axios.get(`${repos_url}?per_page=100`),
                axios.get(`${followers_url}?per_page=100`)
            ]).then(result=>{
                console.log(result)
                const [repos,followers] = result
                const status ="fulfilled"
                if(repos.status === status){
                    setRepos(repos.value.data)
                }
                if(followers.status === status){
                    setFollowers(followers.value.data)
                }
            }).catch(err=>console.log(err))
        }else {
            
            toggleError(true,"sorry, there is no sush user")
        }
        checkRequest()
        setLoading(false)
    }

    const checkRequest =()=> 
    {axios.get(`${rootUrl}rate_limit`)
    .then(({data})=>{
        let {rate:{remaining}} = data
        setRequests(remaining)
            if(remaining===0){
                //throw error
            toggleError(true,"you exceeded the 1hour limit request")
            }
    })
    .catch(error=>console.log(error))}
    useEffect(checkRequest, []);
    useEffect(setRequests, [])
    return (
        <GitContext.Provider value={{gitHubUser,followers,repos,requests,error,searchUserData,loading}}>
            {children}
        </GitContext.Provider>
    )
}

export {GitContext,ContextProvider}
