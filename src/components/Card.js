import PropTypes from 'prop-types'
import DefaultPicture from '../assets/profile.png'
import styled from 'styled-components'
import colors from '../utils/style/colors'

const CardLabel = styled.span`
    color: white;
    font-size: 20px;
`

const CardImage = styled.img`
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin-top: 2vw;
    margin-bottom: 2vw;
`

const CardWrapper = styled.div`
    display: flex;
    text-align: left;
    flex-direction: column;
    background-color: ${colors.backgroundSemiDark};
    color: white;
    border-radius: 30px;
    width: 20vw;
    height: 40vh;
    justify-content: center;
    align-items: center;
    transition: 200ms;
    margin: 5vw;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

const CardSpan = styled.span`
    width: 18vw;
`

function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <CardSpan>{title}</CardSpan>
            <CardImage src={picture} alt="freelance" height={80} width={80} />
            <CardLabel>{label}</CardLabel>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

Card.defaultProps = {
    title: '',
    name: '',
    picture: DefaultPicture,
}

 
export default Card