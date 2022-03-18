import DefaultPicture from '../assets/profile.jpg'
import Card from '../components/Card'
import styled from 'styled-components'

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
]

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`

function Freelances() {
    return (
        <div>
            <h1>Page des freelances</h1>
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
            
        </div>
    )
  }
  
  export default Freelances