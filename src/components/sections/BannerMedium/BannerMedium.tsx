import './styles.scss'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import { Image } from 'src/components/ui/Image'

import Section from '../Section'

type BannerMediumType = {
  nodes: Array<{
    link: string | null
    imageDesktop: {
      gatsbyImageData: IGatsbyImageData
    } | null
    imageMobile: {
      gatsbyImageData: IGatsbyImageData
    } | null
  }>
}

// TODO: refactor this component and the "BannerMedium" content model at Contentful
const BannerMedium = ({ nodes }: BannerMediumType) => {
  const { isMobile } = useWindowDimensions()
  const imageMobile = nodes[0].imageMobile?.gatsbyImageData
  const imageDesktop = nodes[0].imageDesktop?.gatsbyImageData
  const { link } = nodes[0]

  return (
    <Section>
      {link && imageDesktop && imageMobile && (
        <div className="container-imagem-banner-medium layout__content">
          <a href={link}>
            <Image
              className="imagem-banner-medium"
              image={isMobile ? imageMobile : imageDesktop}
              alt=""
              loading="lazy"
            />
          </a>
        </div>
      )}
    </Section>
  )
}

export default BannerMedium
