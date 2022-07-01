import './styles.scss'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

type NewletterType = {
  nodes: Array<{
    titulo: string | null
    politica: string | null
    subtitulo: string | null
  }>
}

const Newletter = ({ nodes }: NewletterType) => {
  const { titulo } = nodes[nodes.length - 1]
  // eslint-disable-next-line prefer-destructuring
  const subtitulo = nodes[nodes.length - 1].subtitulo
  const { politica } = nodes[nodes.length - 1]
  const buttonNewletter = <button>Cadrastrar</button>
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

export default Newletter
