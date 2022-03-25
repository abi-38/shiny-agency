import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import styled from 'styled-components'
import Titre from '../utils/style/Titre'
import DivPage from '../utils/style/DivPage'
import SimpleLink from '../utils/style/SimpleLink'
import { useEffect, useState } from 'react'
import { Loader } from '../utils/style/Atoms'

const SurveyButton = styled.div`
  margin-top: 2vw;
  width: 35vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const SurveyDivLink = styled.div`
  width: 15vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const nextQuestion = questionNumberInt +1
    const previousQuestion = questionNumberInt === 1 ? 1 : questionNumberInt -1
    const [questions, setQuestions] = useState({})
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)

    // useEffect(() => {
    //     setDataLoading(true)
    //     fetch('http://localhost:8000/survey')
    //         .then((response) => response.json()
    //         .then(({ surveyData }) => {
    //             setQuestions(surveyData)
    //             
    //         })
    //         .catch((error) => console.log(error))
    //         )
    // }, []
    // )

    useEffect(() => {
        async function fetchSurvey() {
            setDataLoading(true)
            try {
                const response = await fetch('http://localhost:8000/survey')
                const { surveyData } = await response.json()
                setQuestions(surveyData)
            }
            catch(err) {
                console.log(err)
                setError(true)
            }
            finally {
                setDataLoading(false)
            }
        }
        fetchSurvey()
    }, [])

    return (
        <DivPage>
            <Titre>Questionnaire {questionNumberInt} </Titre>
            {isDataLoading ? (<Loader/>) : (<p>{questions[questionNumber]}</p>)}
            <SurveyButton>
                <Button text='Oui' />
                <Button text='Non' />
            </SurveyButton>
            <SurveyDivLink>
                {questionNumberInt !== 1 ? (
                    <SimpleLink to={`/survey/${previousQuestion}`}>Précedent</SimpleLink>
                ) : null}
                {questionNumberInt !== 10 ? (
                    <SimpleLink to={`/survey/${nextQuestion}`}>Suivant</SimpleLink>
                ) : null}
            </SurveyDivLink>
        </DivPage>
    )
}

export default Survey