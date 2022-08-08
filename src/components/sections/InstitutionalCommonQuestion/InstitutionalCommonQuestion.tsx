import CommonQuestions from '../CommonQuestions'
import InstitutionalMenu from '../InstutionalMenu/InstitutionalMenu'
import './style.scss'

const InstitutionalCommonQuestion = () => {
  return (
    <>
      <div className="title-container">
        <p>Perguntas Frequentes</p>
      </div>
      <div className="institucional-common-questions">
        <InstitutionalMenu />
        <CommonQuestions
          nodes={[
            {
              answer: { answer: 'teste' },
              question: 'O curso fica disponível por quanto tempo?',
            },
            {
              answer: { answer: 'teste' },
              question: 'Os cursos ofertados possuem certificados?',
            },
            {
              answer: { answer: 'teste' },
              question: 'É possível comprar pacotes de cursos?',
            },
            {
              answer: { answer: 'teste' },
              question: 'As aulas são ao vivo ou pré-gravadas?',
            },
            {
              answer: { answer: 'teste' },
              question: 'Como acessar meu certificado de conclusão do curso?',
            },
            {
              answer: { answer: 'teste' },
              question:
                'Os cursos podem ser utilizados como horas complementares acadêmicas?',
            },
          ]}
        />
      </div>
    </>
  )
}

export default InstitutionalCommonQuestion
