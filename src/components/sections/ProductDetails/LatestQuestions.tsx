import { useEffect, useState } from 'react'
import AnswerIcon from 'src/components/icons/Answer'
import InterrogationIcon from 'src/components/icons/Interrogation'
import Button from 'src/components/ui/Button'

// TODO: Refactor/Remove this when using the data retrieved from the Trustvox API
interface Question {
  id: number
  question: string
  answer: string
}

interface LatestQuestionsProps {
  productQuestions: Question[]
}

// TODO: Refactor this when using the data retrieved from the Trustvox API
export default function LatestQuestions({
  productQuestions,
}: LatestQuestionsProps) {
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([])

  useEffect(() => {
    if (!productQuestions?.length) {
      return
    }

    setCurrentQuestions([productQuestions[0]])
  }, [productQuestions])

  const loadMoreQuestions = () => {
    const othersQuestions = productQuestions.slice(1)
    const newQuestions = currentQuestions.concat(othersQuestions)

    setCurrentQuestions(newQuestions)
  }

  if (!productQuestions?.length) {
    return <></>
  }

  return (
    <div className="product-questions-component">
      <h2 className="text__title-subsection">Últimas perguntas</h2>
      <ul className="product-questions__list">
        {currentQuestions.map(
          ({ id: questionId, question, answer }: Question) => (
            <li className="product-questions__item" key={questionId}>
              <div className="product-questions__text-container">
                <div>
                  <InterrogationIcon />
                </div>
                <p className="text__question">{question}</p>
              </div>
              <div className="product-questions__text-container">
                <div>
                  <AnswerIcon />
                </div>
                <p className="text__body-answer">{answer}</p>
              </div>
            </li>
          )
        )}
      </ul>
      {currentQuestions.length !== productQuestions.length && (
        <div className="product-questions__load-more">
          <Button
            className="product-questions__button"
            variant="secondary"
            onClick={loadMoreQuestions}
          >
            Carregar mais
          </Button>
        </div>
      )}
    </div>
  )
}
