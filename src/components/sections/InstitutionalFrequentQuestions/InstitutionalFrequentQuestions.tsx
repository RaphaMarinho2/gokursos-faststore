import InstitucionalBanner from 'src/pages/institucional/components'

import CommonQuestions from '../CommonQuestions'
import InstitutionalMenu from '../InstutionalMenu/InstitutionalMenu'
import './style.scss'

interface InstitutionalFrequentQuestionsProps {
  location: string
}

const InstitutionalFrequentQuestions = ({
  location,
}: InstitutionalFrequentQuestionsProps) => {
  return (
    <>
      <InstitucionalBanner text="Perguntas Frequentes" />

      <div className="institutional-frequent-questions">
        <InstitutionalMenu location={location} />
        <CommonQuestions
          title="Principais Perguntas"
          nodes={[
            {
              answer: {
                answer:
                  'O período de disponibilidade dos nossos cursos depende da carga horária de cada um deles, mas variam de quinze a cento e oitenta dias.',
              },
              question: 'O curso fica disponível por quanto tempo? ',
            },
            {
              answer: {
                answer:
                  'Todos os cursos comprados individualmente oferecem certificado.\nPara obter o certificado é necessário concluir o curso e conquistar média igual ou superior a sete.\n\nO certificado ficará disponível pela área do aluno ou através do e-mail contato@gokursos.com.',
              },
              question: 'Os cursos ofertados possuem certificados?',
            },
            {
              answer: {
                answer:
                  'Sim. Além da compra de cursos de forma separada, é possível fazer assinatura de pacotes de cursos. É importante observar os cursos que estão inclusos em cada pacote pois nem todos os cursos fazem parte dos planos de assinatura.',
              },
              question: 'É possível comprar pacotes de cursos? ',
            },
            {
              answer: {
                answer:
                  'A maior parte dos cursos são gravados e funcionam no modelo self-learning, porém, as opções ao vivo são síncronas (ou seja, possuem interação em tempo real com o professor). Confira mais detalhes na descrição do curso desejado.',
              },
              question: 'As aulas são ao vivo ou pré-gravadas? ',
            },
            {
              answer: {
                answer:
                  'Depois de finalizar o curso e ser aprovado, basta acessar o item “Certificados” na aba “Meus Cursos”. Caso ocorra algum problema no processo, envie um e-mail para contato@gokursos.com e solicite suporte.',
              },
              question: 'Como acessar meu certificado de conclusão do curso? ',
            },
            {
              answer: {
                answer:
                  'Sim, todos os cursos servem como horas de atividades complementares. Quanto aos créditos, apenas as disciplinas UNINASSAU atendem ao requisito básico para aproveitamento acadêmico (são ofertadas por uma instituição reconhecida pelo MEC). Para ter certeza, consulte também o regulamento da sua instituição de ensino.',
              },
              question:
                'Os cursos podem ser utilizados como horas complementares acadêmicas? ',
            },
          ]}
        />
      </div>
    </>
  )
}

export default InstitutionalFrequentQuestions
