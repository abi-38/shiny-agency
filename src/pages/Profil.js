import DefaultPicture from '../assets/profile.png'
import HomeDiv from '../utils/style/HomeDiv'
import styled from 'styled-components'

const Profile = [
    {
        name: 'Jane Doe',
        jobTitle: 'Developpeur Frontend',
        picture: DefaultPicture,
        ttj: 550,
        localisation: 'Paris, France',
        disponibilite: 'Disponible maintenant',
        competences : ['React', 'Vue', 'php']
    },
]
const DivStyled = styled.div`
    background-color: green;
    display: flex;
    justify-content: left;
    margin-left: 3vw;
    width: 40vw;
    align-items: center;
    ${(props) => 
        // il faut mettre le $ car il s'agit de Link qui provient d'une bibliothéque
        // sur une simple balise a on aurait pu ne pas mettre ce $
        props.$isLarge &&
        `width: 70vw;
    `}
`
const DivSecond = styled.div`
    background-color: red;
`

function Profil() {

    return (
        <HomeDiv>
            {Profile.map((freelance, index) => 
                <DivStyled $isLarge key={index}>
                    <img src={freelance.picture} alt='-profil' />
                    <DivSecond>
                        <DivStyled>
                            <p>{freelance.name}</p>
                            <p>{freelance.localisation}</p>
                        </DivStyled>
                        <p>{freelance.jobTitle}</p>
                        <DivStyled>
                            {freelance.competences.map((competence, index) => 
                                <p key={index}>{competence}</p>
                            )}
                        </DivStyled>
                        
                        <p>{freelance.ttj} € / jour</p>
                    </DivSecond>
                </DivStyled>

            )}
                
            
            
        </HomeDiv>
          
    )
}
  
export default Profil

/*
<div>
                <div>
                    {freelanceProfile.name}
                    {freelanceProfile.localisation}
                </div>
                {freelanceProfile.jobTitle}
                {freelanceProfile.competences}
                {freelanceProfile.disponibilite}
                {freelanceProfile.ttj} € / jour
            </div>
*/