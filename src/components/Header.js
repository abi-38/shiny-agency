import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/colors'

const StyledLink = styled(Link)`
    padding: 10px 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    text-align: center;
    ${(props) => 
    // il faut mettre le $ car il s'agit de Link qui provient d'une bibliothéque
    // sur une simple balise a on aurait pu ne pas mettre ce $
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`
 
function Header() {
    return (
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/freelances">Freelances</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>A tester</StyledLink>
        </nav>
    )
}

export default Header