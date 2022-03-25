import Card from '../components/Card'
import DefaultPicture from '../assets/profile.jpg'
import styled from 'styled-components'
import DivPage from '../utils/style/DivPage'
import { useState, useEffect } from 'react'
import { Loader } from '../utils/style/Atoms'

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
    const [freelancersList, setFreelancesList] = useState([])
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchFreelances() {
          setDataLoading(true)
          try {
            const response = await fetch(`http://localhost:8000/freelances`)
            const { freelancersList } = await response.json()
            // bien mettre ici l'objet du back !
            setFreelancesList(freelancersList)
            console.log(freelancersList)

          } catch (err) {
            console.log('===== error =====', err)
            setError(true)
          } finally {
            setDataLoading(false)
          }
        }
        fetchFreelances()
    }, [])

    // useEffect(() => {
    //     setDataLoading(true)
    //     fetch(`http://localhost:8000/freelances`)
    //         .then((response) => response.json()
    //         .then(({ freelanceData }) => console.log(freelanceData))
    //         .catch((error) => console.log(error))
    //     )
    // }, [])

      
    return (
        <DivPage>
            {error ? (<p>Une erreur est survenue !</p>) : null}
            <h2>Chez Shiny nous réunissons les meilleurs profils pour vous.</h2>
            <h3>Trouvez votre prestataire</h3>
            <CardsContainer>
                {isDataLoading ? (<><p>Les résultats sont en cours de chargement</p> <Loader/></>) : null}
                {freelancersList.map((freelance, index) => 
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