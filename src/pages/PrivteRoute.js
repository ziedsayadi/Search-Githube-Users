import {Route,Redirect} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

function PrivteRoute({children,...rest}) {
    const {isAuthenticated,user} = useAuth0()
    const isAuth = isAuthenticated && user
    return (
        <Route {...rest} render={
            ()=>{
                return isAuth ? children : <Redirect to="/login"></Redirect>
            }
        }>
        </Route>
    )
}

export default PrivteRoute
