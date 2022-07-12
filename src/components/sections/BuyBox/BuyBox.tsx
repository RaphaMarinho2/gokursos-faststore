import './styles.scss'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

type BuyBoxType = {
  nodes: Array<{
    textoBotao?: string | null
    titulo?: string | null
    preco?: string | null
    bannerImageDesktop: {
      url: string | null
    } | null
    bannerImageMobile: {
      url: string | null
    } | null
  }>
}

const BuyBox = ({ nodes }: BuyBoxType) => {
  const { isTablet } = useWindowDimensions()

  return (
    <div className="container-BuyBox">
      {nodes.map((node, index) => {
        const {
          titulo,
          preco,
          textoBotao,
          bannerImageDesktop,
          bannerImageMobile,
        } = node

        return (
          <div key={index} className="imagem-buy-box">
            <img
              className="banner-planos__image"
              alt={titulo}
              src={isTablet ? bannerImageMobile?.url : bannerImageDesktop?.url}
            />
            <div key={index} className="component-Buybox__content">
              <div className="titulo-compartilhar">
                <h2 className="titulo-planos">{titulo}</h2>
                <p>t</p>
              </div>
              <h3 className="preco">{preco}</h3>
              <div className="botao">
                <button className="texto-botao">{textoBotao}</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BuyBox
