import { Plus, Minus } from 'phosphor-react'
import Accordion from 'src/components/common/Molecules/Accordion'

import { questions_1, questions_2 } from './data.json'
import './styles.scss'

const CommonQuestions = () => {
  return (
    <div className="common-questions">
      <h2 className="common-questions__title">Perguntas Frequentes</h2>
      <div className="common-questions__container">
        <div className="common-questions__row">
          {questions_1.map((question, idx) => (
            <Accordion
              key={idx}
              title={question.text}
              content={question.answer}
              iconDefault={<Plus size={20} color="#004E98" />}
              iconClicked={<Minus size={20} color="#004E98" />}
            />
          ))}
        </div>
        <div className="common-questions__row">
          {questions_2.map((question, idx) => (
            <Accordion
              key={idx}
              title={question.text}
              content={question.answer}
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
