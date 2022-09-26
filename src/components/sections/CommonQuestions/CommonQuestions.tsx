import { Plus, Minus } from 'phosphor-react'
import Accordion from 'src/components/common/Molecules/Accordion'

import './styles.scss'

type CommonQuestions = {
  nodes: Array<{
    question: string | null
    answer: {
      answer: string | null
    } | null
  }>
  title?: string
}

const CommonQuestions = ({ nodes, title }: CommonQuestions) => {
  if (!nodes || nodes.length < 1) {
    return null
  }

  return (
    <div className="common-questions">
      <h2 className="common-questions__title">{title}</h2>
      <div className="common-questions__container">
        <div className="common-questions__row">
          {nodes.map((content, idx) => (
            <Accordion
              key={idx}
              title={content.question ?? ''}
              content={content.answer?.answer ?? ''}
              iconDefault={<Plus size={20} color="#004E98" />}
              iconClicked={<Minus size={20} color="#004E98" />}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CommonQuestions
