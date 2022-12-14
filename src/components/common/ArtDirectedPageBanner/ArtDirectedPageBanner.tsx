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

// In the future, all page banners will use this component
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
      quality: 100,
    },
  })

  const mobileImage = useContentfulImage({
    image: {
      url: imageBannerMobile.url.replace(/^https?:/, ''),
      width: imageBannerMobile.width,
      height: imageBannerMobile.height,
      toFormat: 'webp',
      quality: 100,
    },
  })

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
        <div
          style={!subtitle ? { top: '40%' } : {}}
          className="page-banner__description"
        >
          <h2 className="page-banner__title">{title}</h2>
          {subtitle ? (
            <h3 className="page-banner__subtitle">{subtitle}</h3>
          ) : (
            <></>
          )}
        </div>
      </BannerContent>
    </Banner>
  )
}

export default ArtDirectedPageBanner
