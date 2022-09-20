import './styles.scss'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import ShareProduct from '@acctglobal/shareproduct'
import IconClose from 'src/components/icons/IconClose'
import FacebookShareIcon from 'src/components/icons/FacebookShare'
import TwitterShareIcon from 'src/components/icons/TwitterShareIcon'
import PinterestShareIcon from 'src/components/icons/PinterestShareIcon'
import ShareIconPlan from 'src/components/icons/ShareIconPlan'

interface BuyBoxProps {
  location?: string
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

const BuyBox = ({ nodes, location }: BuyBoxProps) => {
  const { isTablet } = useWindowDimensions()
  const nodesModifiedProps = nodes as unknown as BuyBoxModifiedProps
  const planLink = typeof window !== 'undefined' && location

  return (
    <div className="buy-box__container layout__content">
      {nodesModifiedProps.map((node, index) => {
        const {
          titulo,
          preco,
          textoBotao,
          bannerImageDesktop,
          bannerImageMobile,
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
                <div className="share-icon">
                  <ShareProduct
                    additionalOverlay
                    shareWebSocials="Compartilhe:"
                    productURL="/"
                    CloseIcon={() => <IconClose />}
                    shareLinks={[
                      {
                        name: 'Facebook',
                        url: `https://www.facebook.com/sharer/sharer.php?u=${planLink}`,
                        SocialIcon: () => <FacebookShareIcon />,
                      },
                      {
                        name: 'Twitter',
                        url: `https://twitter.com/intent/tweet?url=${planLink}`,
                        SocialIcon: () => <TwitterShareIcon />,
                      },
                      {
                        name: 'Pinterest',
                        url: `https://www.pinterest.com/pin/create/button/?url=${planLink}`,
                        SocialIcon: () => <PinterestShareIcon />,
                      },
                    ]}
                    ShareIcon={ShareIconPlan}
                  />
                </div>
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
