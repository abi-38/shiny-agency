import sorryImg from '../assets/sorry.jpg'
import HomeDiv from '../utils/style/HomeDiv'
import Titre from '../utils/style/Titre'
import styled from 'styled-components'

const ErrorIllustration = styled.img `
    width: 35vw;
    margin-bottom: 5vh;
`

const PSorry = styled.p `
    font-size: 25px;
`

function Sorry() {
    return (
        <HomeDiv $isColumn>
            <Titre>Dommage... 🙈</Titre>
            <ErrorIllustration src={sorryImg} alt='sorry-illustration' />
            <PSorry>Il semblerait que vous n'ayez besoin d'aucune compétence</PSorry>
        </HomeDiv>
    )
}
 
export default Sorry