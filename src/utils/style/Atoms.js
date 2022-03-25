import colors from './colors.js'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../context/index'

const StyledLink = styled(Link)`
    padding: 10px 15px;
    
    text-decoration: none;
    font-size: 18px;
    text-align: center;
    margin-top: 5vw;
    margin-bottom: 5vw;
    ${(props) => 
    // il faut mettre le $ car il s'agit de Link qui provient d'une bibliothéque
    // sur une simple balise a on aurait pu ne pas mettre ce $
    props.$isFullLink &&
    `border-radius: 30px; 
    background-color: ${colors.primary};`}
`

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`
 
export const Loader = styled.div`
    padding: 10px;
    border: 6px solid ${colors.primary};
    border-bottom-color: transparent;
    border-radius: 22px;
    animation: ${rotate} 1s infinite linear;
    height: 0;
    width: 0;
    color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
`

export default StyledLink
// color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};
