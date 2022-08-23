import './style.scss'
import { Banner, BannerImage, BannerContent } from '@faststore/ui'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

interface BannerCategoryProps {
  title: string
  subtitle: string
  imageBannerDesktop: string
  imageBannerMobile: string
}

const BannerCategory = ({
  title,
  subtitle,
  imageBannerDesktop,
  imageBannerMobile,
}: BannerCategoryProps) => {
  const { isTablet } = useWindowDimensions()

  return (
    <section className="banner-category">
      <div className="banner-category__content">
        <Banner>
          <BannerImage>
            <img
              className="banner-category__image"
              alt=""
              src={isTablet ? imageBannerMobile : imageBannerDesktop}
            />
          </BannerImage>
          <BannerContent>
            <h2 className="banner-category__title">{title}</h2>
            <h3 className="banner-category__subtitle">{subtitle}</h3>
          </BannerContent>
        </Banner>
      </div>
    </section>
  )
}

export default BannerCategory
