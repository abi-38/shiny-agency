import errorImg from '../assets/404.svg'
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

function Error() {
    return (
        <HomeDiv $isColumn>
            <Titre>Oups... 🙈</Titre>
            <ErrorIllustration src={errorImg} alt='404-illustration' />
            <PSorry>Il semblerait que la page que vous cherchez n'existe pas</PSorry>
        </HomeDiv>
    )
}
 
export default Error