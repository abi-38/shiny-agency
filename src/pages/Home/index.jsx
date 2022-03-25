import styled from 'styled-components'
import maquette from '../../assets/image.JPG'
import StyledLink from '../../utils/style/Atoms.js'
import HomeDiv from '../../utils/style/HomeDiv'
import Profil from '../Profil'
import Sorry from '../../components/Sorry'

// const Baloon = styled.div`
//   height: 150px;
//   width: 150px;
//   border-radius: 150px;
//   background-color: red;
//   transform: scale(${({size}) => size})
// `
// <Baloon size={size} />


const HomeDivDiv = styled.div`
  width: 25vw;
  margin-right 15vw;
  background-color: transparent;
`

function Home() {

  return (
    <>
      <HomeDiv>
        <HomeDivDiv>
          <h1>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</h1>
          <StyledLink to="/survey/1" $isFullLink >Faire un test</StyledLink>
        </HomeDivDiv>
        <img src={maquette} alt="maquette-d'illustration" />
      </HomeDiv>
      <Sorry />
      <Profil />
    </>
    

  )
}
  
  export default Home