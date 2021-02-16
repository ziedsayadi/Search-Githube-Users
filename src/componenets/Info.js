import { useContext ,useState} from "react"
import { GitContext } from "../context/context"
import {GoRepo,GoGist} from "react-icons/go"
import { FiUsers,FiUserPlus } from "react-icons/fi";
import './info.css'


function Info() {
   const {gitHubUser} = useContext(GitContext)
   const {followers,following,public_gists,public_repos} = gitHubUser
  
   const items = [
       {
           id:1,
           icon:<GoRepo className="info_icon"/>,
           label:'Repos',
           value:public_repos,
           color:'pink'
       },
       {
        id:2,
        icon:<FiUsers className="info_icon"/>,
        label:'Followers',
        value:followers,
        color:'green'
    },
    {
        id:3,
        icon:<FiUserPlus className="info_icon"/>,
        label:'Following',
        value:following,
        color:'purple'
    },
    {
        id:4,
        icon:<GoGist className="info_icon"/>,
        label:'Gists',
        value:public_gists,
        color:'yellow'
    }

   ]
    return (
        <section className="section">
            <div className="section_wrapper">
            {
                items.map(item=>{
                    return <Item key={item.id} {...item}></Item>
                })
            }
            </div>
        </section>
    )
}

const Item =({icon,label,value,color})=>{
   return  <article className="wrapper_item">
        <span className={color}>{icon}</span>
        <div>
        <h3> {value} </h3>
        <p> {label} </p>
        </div>
         </article>
}
export default Info
