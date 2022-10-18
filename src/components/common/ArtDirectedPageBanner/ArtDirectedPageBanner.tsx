/* eslint-disable no-console */
import './style.scss'
import { Banner, BannerImage, BannerContent } from '@faststore/ui'
import { useContentfulImage } from 'gatsby-source-contentful/hooks'
import ImageWithArtDirection from 'src/components/ui/Image/ImageWithArtDirection'

interface PageBannerProps {
  title: string
  subtitle?: string
  imageBannerDesktop: {
    url: string
    width: number
    height: number
  }
  imageBannerMobile: {
    url: string
    width: number
    height: number
  }
}

const ArtDirectedPageBanner = ({
  title,
  subtitle,
  imageBannerDesktop,
  imageBannerMobile,
}: PageBannerProps) => {
  const desktopImage = useContentfulImage({
    image: {
      url: imageBannerDesktop.url.replace(/^https?:/, ''),
      width: imageBannerDesktop.width,
      height: imageBannerDesktop.height,
      toFormat: 'webp',
    },
  })

  const mobileImage = useContentfulImage({
    image: {
      url: imageBannerMobile.url.replace(/^https?:/, ''),
      width: imageBannerMobile.width,
      height: imageBannerMobile.height,
      // toFormat: 'webp',
    },
  })

  console.log(imageBannerMobile)
  console.log(mobileImage)

  return (
    <Banner>
      <BannerImage>
        <ImageWithArtDirection
          className="page-banner__image"
          imageDesktop={desktopImage}
          imageMobile={mobileImage}
          alt={`Banner da categoria de ${title}`}
        />
      </BannerImage>
      <BannerContent>
        {subtitle ? (
          <div className="page-banner__description">
            <h2 className="page-banner__title">{title}</h2>
            <h3 className="page-banner__subtitle">{subtitle}</h3>
          </div>
        ) : (
          <div style={{ top: '40%' }} className="page-banner__description">
            <h2 className="page-banner__title">{title}</h2>
          </div>
        )}
      </BannerContent>
    </Banner>
  )
}

export default ArtDirectedPageBanner
