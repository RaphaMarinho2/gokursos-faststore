import CommonQuestions from '../CommonQuestions'
import InstitutionalMenu from '../InstutionalMenu/InstitutionalMenu'
import './style.scss'

interface InstitutionalFrequentQuestionsProps {
  location: string
  asnwersAndQuestions: Array<{
    question: string | null
    answer: {
      answer: string | null
    } | null
  }>
}

const InstitutionalFrequentQuestions = ({
  location,
  asnwersAndQuestions,
}: InstitutionalFrequentQuestionsProps) => {
  return (
    <>
      <div className="title-container">
        <p>Perguntas Frequentes</p>
      </div>

      <div className="institutional-frequent-questions">
        <InstitutionalMenu location={location} />
        <CommonQuestions nodes={asnwersAndQuestions} />
      </div>
    </>
  )
}

export default InstitutionalFrequentQuestions
