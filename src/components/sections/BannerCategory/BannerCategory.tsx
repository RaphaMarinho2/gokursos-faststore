import './style.scss'
import ArtDirectedPageBanner from '../../common/ArtDirectedPageBanner'

interface BannerCategoryProps {
  title: string
  subtitle: string
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

const BannerCategory = ({
  title,
  subtitle,
  imageBannerDesktop,
  imageBannerMobile,
}: BannerCategoryProps) => {
  return (
    <section className="banner-category">
      <div className="banner-category__content">
        <ArtDirectedPageBanner
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
