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
}

const columnDivider = (nodes: CommonQuestions['nodes']) => {
  const middleIndex = Math.ceil(nodes.length / 2)

  const firstColumn = nodes.splice(0, middleIndex)
  const secondColumn = nodes.splice(-middleIndex)

  return {
    firstColumn,
    secondColumn,
  }
}

const CommonQuestions = ({ nodes }: CommonQuestions) => {
  const { firstColumn, secondColumn } = columnDivider(nodes)

  return (
    <div className="common-questions">
      <h2 className="common-questions__title">Perguntas Frequentes</h2>
      <div className="common-questions__container">
        <div className="common-questions__row">
          {firstColumn.map((content, idx) => (
            <Accordion
              key={idx}
              title={content.question ?? ''}
              content={content.answer?.answer ?? ''}
              iconDefault={<Plus size={20} color="#004E98" />}
              iconClicked={<Minus size={20} color="#004E98" />}
            />
          ))}
        </div>
        <div className="common-questions__row">
          {secondColumn.map((content, idx) => (
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
