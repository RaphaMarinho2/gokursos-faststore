import './styles.scss'

type PlanosType = {
  nodes: Array<{
    textoBotao?: string | null
    titulo?: string | null
    preco?: string | null
    saibaMais?: string | null
    promocao?: boolean | null
    texto: {
      texto: string | null
    } | null
  }>
}

const CardPlanos = ({ nodes }: PlanosType) => {
  return (
    <div className="container">
      {nodes.map((node, index) => {
        const { titulo, preco, texto, textoBotao, saibaMais, promocao } = node

        return (
          <div
            key={index}
            className={`component-CardPlanos__content ${
              promocao ? 'promocao' : ''
            }`}
          >
            <div className="titulo-linha">
              <h2 className="titulo-planos">{titulo}</h2>
              <div className="border" />
            </div>
            <h3 className="preco">{preco}</h3>
            <p className="texto">{texto.texto}</p>
            <div className="botoes">
              <a href={titulo} className="saiba-mais">
                {saibaMais}
              </a>
              <button className="texto-botao">{textoBotao}</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CardPlanos
