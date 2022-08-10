import InstitutionalMenu from '../InstutionalMenu/InstitutionalMenu'
import './style.scss'

interface AboutUsProps {
  location: string
  text?: string | null
}

const AboutUs = ({ location }: AboutUsProps) => {
  return (
    <>
      <div className="title-container">
        <p>Políticas de Cancelamento</p>
      </div>

      <div className="institucional-cancel-policy">
        <InstitutionalMenu location={location} />
        <div className="text-container">
          <span>Somos especialistas em educação digital</span>
          <p>
            Acreditamos que o acesso ao conhecimento é fundamental para
            transformar sonhos em oportunidades. Oferecemos centenas de cursos
            em diversas áreas de ensino e simplificamos o aprendizado através de
            capacitações online e certificações reconhecidas no mercado de
            trabalho.
          </p>
          <span>Qual o nosso objetivo?</span>
          <p>
            Ajudamos profissionais de todas as áreas a desenvolverem habilidades
            atualizadas ao mercado de trabalho e ampliamos o conhecimento de
            estudantes de todos os cantos do Brasil. Nosso compromisso é
            oferecer conteúdo de qualidade para ajudar nossos alunos a
            conquistarem seus objetivos pessoais e profissionais.
          </p>
          <span>Nós somos o futuro da educação</span>
          <p>
            O mundo está em constante evolução e a transformação digital exige
            novos formatos de ensino. Para acompanhar este ritmo, nossa missão é
            compartilhar conhecimento de forma inovadora, simplificada,
            acessível e ágil.
          </p>
          <span>E como fazemos isso, na prática?</span>
          <p>
            Temos professores altamente capacitados, com experiência no mercado
            de trabalho. As aulas são 100% online, disponibilizadas em uma
            plataforma completa. Somos experientes: fazemos parte do Grupo Ser
            Educacional, a maior organização de ensino do país.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutUs
