import './styles.scss'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import { Image } from 'src/components/ui/Image'

import Section from '../Section'

type BannerMediumType = {
  nodes: Array<{
    link: string | null
    imagemBannerMedium: {
      gatsbyImageData: IGatsbyImageData
    } | null
  }>
}

// TODO: refactor this component and the "BannerMedium" content model at Contentful
const BannerMedium = ({ nodes }: BannerMediumType) => {
  const { isMobile } = useWindowDimensions()

  if (isMobile === true) {
    const imageMobile =
      nodes[nodes.length - 1].imagemBannerMedium?.gatsbyImageData

    // eslint-disable-next-line prefer-destructuring
    const link1 = nodes[nodes.length - 1].link

    return (
      <div className="container-imagem-banner-medium layout__content">
        {link1 && imageMobile && (
          <a href={link1}>
            <Image
              className="imagem-banner-medium"
              image={imageMobile}
              alt=""
              loading="lazy"
            />
          </a>
        )}
      </div>
    )
  }

  const imageDesktop = nodes[0].imagemBannerMedium?.gatsbyImageData
  const [{ link }] = nodes

  return (
    <Section>
      <div className="container-imagem-banner-medium layout__content">
        {link && imageDesktop && (
          <a href={link}>
            <Image
              className="imagem-banner-medium"
              image={imageDesktop}
              alt=""
              loading="lazy"
            />
          </a>
        )}
      </div>
    </Section>
  )
}

export default BannerMedium
