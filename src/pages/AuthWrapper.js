import styled from 'styled-components'
import {useAuth0} from "@auth0/auth0-react";
import Loading from "../images/preloader.gif"
function AuthWrapper({children}) {
    const {error,isLoading} = useAuth0();
    if(isLoading){
        return (
            <Wrapper>
            <img src={Loading} alt="..loading"/>
            </Wrapper>
        )
    }
    if(error){
        return (
            <Wrapper>
                <h1>{error.message}</h1>
            </Wrapper>
        )
    }
    return <>{children}</>
}
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;
export default AuthWrapper
