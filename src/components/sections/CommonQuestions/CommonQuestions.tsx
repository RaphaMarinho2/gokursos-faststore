import { Plus, Minus } from 'phosphor-react'
import Accordion from 'src/components/common/Molecules/Accordion'

import Section from '../Section'

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

const columnDivider = (nodes: CommonQuestions['nodes']) => {
  const middleIndex = Math.ceil(nodes.length / 2)

  const firstColumn = nodes.slice(0, middleIndex)
  const secondColumn = nodes.slice(-middleIndex)

  return {
    firstColumn,
    secondColumn,
  }
}

const CommonQuestions = ({ nodes, title }: CommonQuestions) => {
  if (!nodes || nodes.length < 1) {
    return null
  }

  const { firstColumn, secondColumn } = columnDivider(nodes)

  return (
    <Section>
      <div className="common-questions">
        <div className="common-questions__content">
          <h2 className="common-questions__title">{title}</h2>
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
      </div>
    </Section>
  )
}

export default CommonQuestions
