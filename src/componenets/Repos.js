import {Doughnut2D,Pie3D,Column3D,Bar3D} from "./charts/index"
import styled from 'styled-components'
import { useContext } from "react";
import { GitContext } from "../context/context";
function Repos() {
    const {repos} = useContext(GitContext)

    // set the logic of langues and stars per languages from repos object
    const language = repos.reduce((acc,value)=>{
        const {language,stargazers_count}=value
        if(!language) return acc
        if(!acc[language]){
            acc[language] ={label:language,value:1,stars:stargazers_count}
        }else{
            acc[language]={...acc[language],value:acc[language].value+1,stars:acc[language].stars+stargazers_count}
        }
        return acc
    },{})

    // get the languages and stars per ropos 
    const languages=Object.values(language).sort((a,b)=> b.value-a.value).slice(0,5)
    const starsDonut=Object.values(language).sort((a,b)=> b.stars-a.stars).map(item=>{return {...item,value:item.stars}}).slice(0,5)

    // set the logic of most popular repos and folks based on stars and folks

    let {stars,forks} = repos.reduce((acc,value)=>{
      const {stargazers_count,name,forks} = value
      acc.stars[stargazers_count]={label:name,value:stargazers_count}
      acc.forks[forks]={label:name,value:forks}
      return acc
    },{
      stars:{},
      forks:{}
    })
    stars=Object.values(stars).slice(-5).reverse()
    forks=Object.values(forks).slice(-5).reverse()
   
    return (
        <section className="section">
        <Wrapper className="section-center">
        <Pie3D data={languages}/>
        <Column3D data={stars}/>
        <Doughnut2D data={starsDonut} />
        <Bar3D data={forks} />
        </Wrapper>   
        </section>
    )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;
export default Repos
