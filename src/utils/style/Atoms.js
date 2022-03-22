import colors from './colors.js'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
    padding: 10px 15px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    text-align: center;
    margin-top: 5vw;
    margin-bottom: 5vw;
    ${(props) => 
    // il faut mettre le $ car il s'agit de Link qui provient d'une bibliothéque
    // sur une simple balise a on aurait pu ne pas mettre ce $
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`

export default StyledLink

