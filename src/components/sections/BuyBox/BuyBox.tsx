import './styles.scss'
import ShareProduct from '@acctglobal/shareproduct'
import IconClose from 'src/components/icons/IconClose'
import FacebookShareIcon from 'src/components/icons/FacebookShare'
import TwitterShareIcon from 'src/components/icons/TwitterShareIcon'
import PinterestShareIcon from 'src/components/icons/PinterestShareIcon'
import ShareIconPlan from 'src/components/icons/ShareIconPlan'
import ImageWithArtDirection from 'src/components/ui/Image/ImageWithArtDirection'
import type { IGatsbyImageData } from 'gatsby-plugin-image'

import Section from '../Section'

interface BuyBoxProps {
  href?: string
  nodes: Array<{
    textoBotao: string | null
    titulo: string | null
    preco: string | null
    slug: string | null
    bannerImageMobile: {
      gatsbyImageData: IGatsbyImageData
    } | null
    bannerImageDesktop: {
      gatsbyImageData: IGatsbyImageData
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
      gatsbyImageData: IGatsbyImageData
    }
    bannerImageDesktop: {
      gatsbyImageData: IGatsbyImageData
    }
    compartilhar: {
      url: string
    }
  }>
}

const BuyBox = ({ nodes, href }: BuyBoxProps) => {
  const nodesModifiedProps = nodes as unknown as BuyBoxModifiedProps
  const planLink = typeof window !== 'undefined' && href

  return (
    <Section>
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
              <ImageWithArtDirection
                imageDesktop={bannerImageDesktop?.gatsbyImageData}
                imageMobile={bannerImageMobile?.gatsbyImageData}
                alt={titulo}
                className="banner-planos__image"
              />
              <div className="buy-box__section">
                <div className="component-Buybox__content">
                  <div className="titulo-compartilhar">
                    <h2 className="titulo-planos">{titulo}</h2>
                  </div>
                  <h3 className="preco">{preco}</h3>
                  <div className="botao">
                    <button className="texto-botao">{textoBotao}</button>
                  </div>
                </div>
                <div className="share-icon-buy-box">
                  <ShareProduct
                    additionalOverlay
                    shareWebSocials="Compartilhe:"
                    productURL={href ?? ''}
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
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default BuyBox
