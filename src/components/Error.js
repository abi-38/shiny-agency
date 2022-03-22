import errorImg from '../assets/404.svg'
import HomeDiv from '../utils/style/HomeDiv'
import Titre from '../utils/style/Titre'
import styled from 'styled-components'

const ErrorIllustration = styled.img `
    width: 35vw;
    margin-bottom: 5vh;
`

function Error() {
    return (
        <HomeDiv $isColumn>
            <Titre>Oups... 🙈</Titre>
            <ErrorIllustration src={errorImg} alt='404-illustration' />
            <p>Il semblerait que la page que vous cherchez n'existe pas</p>
        </HomeDiv>
    )
}
 
export default Error