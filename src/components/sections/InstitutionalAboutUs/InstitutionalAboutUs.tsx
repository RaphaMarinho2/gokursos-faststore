import InstitutionalMenu from '../InstutionalMenu/InstitutionalMenu'
import './style.scss'

interface AboutUsProps {
  location: string
}

const InstitutionalAboutUs = ({ location }: AboutUsProps) => {
  return (
    <>
      <div className="title-container">
        <p className="layout__content">Quem somos</p>
      </div>

      <div className="institutional-about-us">
        <InstitutionalMenu location={location} />
        <div className="text-container">
          <h1>Somos especialistas em educação digital</h1>
          <p>
            Acreditamos que o acesso ao conhecimento é fundamental para
            transformar sonhos em oportunidades. Oferecemos centenas de cursos
            em diversas áreas de ensino e simplificamos o aprendizado através de
            capacitações online e certificações reconhecidas no mercado de
            trabalho.
          </p>
          <h1>Qual o nosso objetivo?</h1>
          <p>
            Ajudamos profissionais de todas as áreas a desenvolverem habilidades
            atualizadas ao mercado de trabalho e ampliamos o conhecimento de
            estudantes de todos os cantos do Brasil. Nosso compromisso é
            oferecer conteúdo de qualidade para ajudar nossos alunos a
            conquistarem seus objetivos pessoais e profissionais.
          </p>
          <h1>Nós somos o futuro da educação</h1>
          <p>
            O mundo está em constante evolução e a transformação digital exige
            novos formatos de ensino. Para acompanhar este ritmo, nossa missão é
            compartilhar conhecimento de forma inovadora, simplificada,
            acessível e ágil.
          </p>
          <h1>E como fazemos isso, na prática?</h1>
          <p>
            <ul>
              <li>
                • Temos professores altamente capacitados, com experiência no
                mercado de trabalho.
              </li>
              <li>
                • As aulas são 100% online, disponibilizadas em uma plataforma
                completa.
              </li>
              <li>
                • Somos experientes: fazemos parte do Grupo Ser Educacional, a
                maior organização de ensino do país.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </>
  )
}

export default InstitutionalAboutUs
