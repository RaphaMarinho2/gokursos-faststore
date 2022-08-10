import CommonQuestions from '../CommonQuestions'
import InstitutionalMenu from '../InstutionalMenu/InstitutionalMenu'
import './style.scss'

interface InstitutionalCommonQuestionProps {
  location: string
  asnwersAndQuestions: Array<{
    question: string | null
    answer: {
      answer: string | null
    } | null
  }>
}

const InstitutionalCommonQuestion = ({
  location,
  asnwersAndQuestions,
}: InstitutionalCommonQuestionProps) => {
  return (
    <>
      <div className="title-container">
        <p>Perguntas Frequentes</p>
      </div>

      <div className="institucional-common-questions">
        <InstitutionalMenu location={location} />
        <CommonQuestions nodes={asnwersAndQuestions} />
      </div>
    </>
  )
}

export default InstitutionalCommonQuestion
