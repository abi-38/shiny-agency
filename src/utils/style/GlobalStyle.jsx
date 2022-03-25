import { createGlobalStyle } from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../context/index'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
      background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
      color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
      padding: 15px;
      margin: 0;
    }
`
function GlobalStyle() {
  const { theme } = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle