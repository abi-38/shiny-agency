import styled from 'styled-components'
import colors from '../utils/style/colors'

const BoutonLink = styled.button `
    color: white;
    background-color: ${colors.backgroundSemiDark};
    width: 15vw;
    border: none;
    height: 50px;
    border-radius: 20px;
    font-size: 1rem;
    margin-bottom: 50px;
    margin-top: 20px;   
`

const Button = (props) => {
    return (
      <BoutonLink
          type={props.type || 'button'}
          className={`Bouton-link ${props.className ? props.className : ''}`}
          onClick={props.onClick}
          disabled={props.disabled}
        >
          {props.text}
      </BoutonLink>
    )
}

export default Button