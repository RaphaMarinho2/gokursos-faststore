import CommonQuestions from '../CommonQuestions'
import InstitutionalMenu from '../InstutionalMenu/InstitutionalMenu'
import './style.scss'

interface InstitutionalCommonQuestionProps {
  location: string
}

const InstitutionalCommonQuestion = ({
  location,
}: InstitutionalCommonQuestionProps) => {
  return (
    <>
      <div className="title-container">
        <p>Perguntas Frequentes</p>
      </div>

      <div className="institucional-common-questions">
        <InstitutionalMenu location={location} />
        <CommonQuestions
          nodes={[
            {
              answer: {
                answer:
                  'O período de disponibidade dos nossos cursos depende da carga horária de cada um deles, mas variam de quinze a cento e oitenta dias.',
              },
              question: 'O curso fica disponível por quanto tempo? ',
            },
            {
              answer: { answer: 'teste' },
              question: 'Os cursos ofertados possuem certificados? ',
            },
            {
              answer: { answer: 'teste' },
              question: 'É possível comprar pacotes de cursos? ',
            },
            {
              answer: { answer: 'teste' },
              question: 'As aulas são ao vivo ou pré-gravadas? ',
            },
            {
              answer: { answer: 'teste' },
              question: 'Como acessar meu certificado de conclusão do curso? ',
            },
            {
              answer: { answer: 'teste' },
              question:
                'Os cursos podem ser utilizados como horas complementares acadêmicas? ',
            },
          ]}
        />
      </div>
    </>
  )
}

export default InstitutionalCommonQuestion
