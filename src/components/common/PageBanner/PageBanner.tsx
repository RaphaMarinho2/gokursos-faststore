import './style.scss'
import { Banner, BannerImage, BannerContent } from '@faststore/ui'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

interface PageBannerProps {
  title: string
  subtitle?: string
  imageBannerDesktop: string
  imageBannerMobile: string
}

const PageBanner = ({
  title,
  subtitle,
  imageBannerDesktop,
  imageBannerMobile,
}: PageBannerProps) => {
  const { isTablet } = useWindowDimensions()

  return (
    <Banner>
      <BannerImage>
        <img
          className="page-banner__image"
          alt=""
          src={isTablet ? imageBannerMobile : imageBannerDesktop}
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

export default PageBanner
