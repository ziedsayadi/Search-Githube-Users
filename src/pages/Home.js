import React from 'react'
import {Info,Repos,User,Nav,Search} from "../componenets/index"
import { GitContext } from '../context/context'
import Loading from "../images/preloader.gif"
 function Home() {
    const {loading} = React.useContext(GitContext)

    if(loading){
        return (
            <main>
             <Nav/>
             <Search/> 
             <img src={Loading} alt ="...loading" className="loading-img"/> 
            </main>
        )
    }
    return (
        <main>
        <Nav/>
        <Search/>
        <Info/>
        <User/>
        <Repos/>
        </main>
    )
}


export default Home
