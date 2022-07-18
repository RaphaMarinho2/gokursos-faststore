import './styles.scss'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

interface BuyBoxProps {
  nodes: Array<{
    textoBotao: string | null
    titulo: string | null
    preco: string | null
    slug: string | null
    bannerImageMobile: {
      url: string | null
    } | null
    bannerImageDesktop: {
      url: string | null
    } | null
    compartilhar: {
      url: string | null
    } | null
  }>
}

interface BuyBoxModifiedProps {
  map(
    arg0: (node: any, index: number) => JSX.Element
  ): import('react').ReactNode
  nodes: Array<{
    textoBotao: string | null
    titulo: string
    preco: string | null
    slug: string | null
    bannerImageMobile: {
      url: string
    }
    bannerImageDesktop: {
      url: string
    }
    compartilhar: {
      url: string
    }
  }>
}

const BuyBox = ({ nodes }: BuyBoxProps) => {
  const { isTablet } = useWindowDimensions()
  const nodesModifiedProps = nodes as unknown as BuyBoxModifiedProps

  return (
    <div className="buy-box__container layout__content">
      {nodesModifiedProps.map((node, index) => {
        const {
          titulo,
          preco,
          textoBotao,
          bannerImageDesktop,
          bannerImageMobile,
          compartilhar,
        } = node

        return (
          <div key={index} className="buy-box__content">
            <img
              className="banner-planos__image"
              alt={titulo}
              src={isTablet ? bannerImageMobile?.url : bannerImageDesktop?.url}
            />
            <div key={index} className="component-Buybox__content">
              <div className="titulo-compartilhar">
                <h2 className="titulo-planos">{titulo}</h2>
                <img alt={titulo} src={compartilhar?.url} />
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
