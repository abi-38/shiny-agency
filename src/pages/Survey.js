import { useParams, Link } from 'react-router-dom'

function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const nextQuestion = questionNumberInt +1
    const previousQuestion = questionNumberInt === 1 ? 1 : questionNumberInt -1

    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Questionnaire {questionNumberInt} </h2>
            <Link to={`/survey/${previousQuestion}`}>Précedent</Link>
            {questionNumberInt !== 10 ? (
                <Link to={`/survey/${nextQuestion}`}>Suivant</Link>
            ) : null}
        </div>
    )
}

export default Survey