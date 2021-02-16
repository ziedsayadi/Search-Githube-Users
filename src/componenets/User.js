import { useContext } from "react";
import { GitContext } from "../context/context";
import styled from "styled-components"
import Card from "./Card";
import Followers from "./Followers";

function User() {
    const {gitHubUser,followers} =useContext(GitContext)

    return (
        <section className="section">
            <Wrapper className="section-center">
                <Card gitHubUser={gitHubUser}/>
                <Followers followers={followers}/>
            </Wrapper>
        </section>
    )
}
const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default User
