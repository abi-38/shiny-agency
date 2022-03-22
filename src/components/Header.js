import logo from '../assets/light-logo.png'
import StyledLink from '../utils/style/Atoms.js'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left:10vw;
    margin-right: 10vw;
`
const StyledLogo = styled.img`
    width: 8vw;
`
 
function Header() {
    return (
        <StyledDiv>
            <StyledLogo src={logo} alt='logo-shiny' />
        
            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Freelances</StyledLink>
                <StyledLink to="/survey/1" $isFullLink >A tester</StyledLink>
            </nav>
        </StyledDiv>
    )
}

export default Header