import Card from '../components/Card'
import DefaultPicture from '../assets/profile.jpg'
import styled from 'styled-components'
import DivPage from '../utils/style/DivPage'

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

function Profils() {

    return (
        <DivPage>
            <h2>Chez Shiny nous réunissons les meilleurs profils pour vous.</h2>
            <h3>Trouvez votre prestataire</h3>
            <CardsContainer>
                {freelanceProfiles.map((freelance, index) => 
                    <Card 
                        label={freelance.name}
                        title={freelance.jobTitle}
                        picture={freelance.picture}
                        key={index}
                    />
                )}
            </CardsContainer>  
        </DivPage>
          
    )
}
  
export default Profils