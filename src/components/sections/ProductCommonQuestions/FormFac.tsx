import { Label as UILabel } from '@faststore/ui'
import Button from 'src/components/ui/Button'

import Section from '../Section'

import './styles.scss'

type PropsCommonQuestions = {
  className?: string
  loadMoreBtn?: boolean
}

const FaqPdpClick = () => {
  console.info('click: FaqPdpClick')
}

export const Form = ({ className }: PropsCommonQuestions) => {
  return (
    <>
      <Section className="product-faq__form">
        <h3
          className={`product-faq__subtitle${
            className ? `--${className}` : ''
          }`}
        >
          Perguntas e respostas
        </h3>
        <div className="product-faq__form--block">
          <div className="product-faq__form--entry">
            <UILabel>Você tem alguma pergunta?</UILabel>
            <input
              placeholder="Escreva uma pergunta..."
              type="text"
              id="pdpfaq"
              name="pdpfaq"
            />
          </div>
          <div className="product-faq__form--button">
            <Button onClick={FaqPdpClick}>Perguntar</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
