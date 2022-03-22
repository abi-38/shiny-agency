import styled from 'styled-components'
import colors from '../../utils/style/colors'

const HomeDiv = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  margin-top: 5vw;
  padding-bottom: 14.1vw;
  margin-left:9vw;
  margin-right:9vw;
  background-color: ${colors.backgroundSemiDark};
  ${(props) => 
    // il faut mettre le $ car il s'agit de Link qui provient d'une bibliothéque
    // sur une simple balise a on aurait pu ne pas mettre ce $
    props.$isColumn &&
    `flex-direction: column;
    `}
`

export default HomeDiv