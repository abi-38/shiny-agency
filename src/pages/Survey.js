import { useParams, Link } from 'react-router-dom'
import Button from '../components/Button'
import styled from 'styled-components'
import Titre from '../utils/style/Titre'
import DivPage from '../utils/style/DivPage'
import SimpleLink from '../utils/style/SimpleLink'

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

    return (
        <DivPage>
            <Titre>Questionnaire {questionNumberInt} </Titre>
            <p>Votre application doit-elle impérativement apparaître en premer dans les résultats de recherche ?</p>
            <SurveyButton>
                <Button text='Oui' />
                <Button text='Non' />
            </SurveyButton>
            <SurveyDivLink>
                <SimpleLink to={`/survey/${previousQuestion}`}>Précedent</SimpleLink>
                {questionNumberInt !== 10 ? (
                    <SimpleLink to={`/survey/${nextQuestion}`}>Suivant</SimpleLink>
                ) : null}
            </SurveyDivLink>
        </DivPage>
    )
}

export default Survey