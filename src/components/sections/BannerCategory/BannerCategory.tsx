import './style.scss'
import PageBanner from '../../common/PageBanner'

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
  return (
    <section className="banner-category">
      <div className="banner-category__content">
        <PageBanner
          title={title}
          subtitle={subtitle}
          imageBannerDesktop={imageBannerDesktop}
          imageBannerMobile={imageBannerMobile}
        />
      </div>
    </section>
  )
}

export default BannerCategory
