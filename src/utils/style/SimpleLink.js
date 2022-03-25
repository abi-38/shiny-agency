import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SimpleLink = styled(Link)`
  text-decoration: underline;
  margin-top: 2vw;
`

export default SimpleLink

// color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'dark')};