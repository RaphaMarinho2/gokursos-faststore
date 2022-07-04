import './styles.scss'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import { graphql, StaticQuery } from 'gatsby'

type NewletterType = {
  data: {
    allContentfulNewsletter: {
      nodes: Array<{
        titulo: string | null
        politica: string | null
        subtitulo: string | null
      }>
    }
  }
}

const Newsletter = ({ data: { allContentfulNewsletter } }: NewletterType) => {
  const { titulo, politica, subtitulo } =
    allContentfulNewsletter.nodes[allContentfulNewsletter.nodes.length - 1]

  const buttonNewletter = <button>Cadastrar</button>
  const { isMobile } = useWindowDimensions()

  return (
    <div className="layout__content">
      {subtitulo && titulo && (
        <div className="Container-newletter">
          <div className="Content1">
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
          </div>
          <div className="Content2">
            <div className="formulario">
              <div className="formulario-itens">
                <label htmlFor="name">Nome</label>
                <input type="text" placeholder="Digite seu nome" />
              </div>
              <div className="formulario-itens">
                <label htmlFor="email">E-mail</label>
                <input type="text" placeholder="Digite seu e-mail" />
              </div>
              {!isMobile && buttonNewletter}
            </div>
            <p>{politica}</p>
            {isMobile && buttonNewletter}
          </div>
        </div>
      )}
    </div>
  )
}

const Newletter = () => {
  return (
    <StaticQuery
      query={graphql`
        query allContentfulNewsletter {
          allContentfulNewsletter {
            nodes {
              subtitulo
              titulo
              politica
            }
          }
        }
      `}
      render={(allContentfulNewsletter) => (
        <Newsletter data={allContentfulNewsletter} />
      )}
    />
  )
}

export default Newletter
