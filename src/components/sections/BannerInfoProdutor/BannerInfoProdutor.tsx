import PageBanner from '../../common/PageBanner'
import './style.scss'

interface BannerInfoProdutorProps {
  title: string
  imageBannerDesktop: string
  imageBannerMobile: string
}

const BannerInfoProdutor = ({
  title,
  imageBannerDesktop,
  imageBannerMobile,
}: BannerInfoProdutorProps) => {
  return (
    <section className="banner-info-produtor">
      <div className="banner-info-produtor__content">
        <PageBanner
          title={title}
          imageBannerDesktop={imageBannerDesktop}
          imageBannerMobile={imageBannerMobile}
        />
      </div>
    </section>
  )
}

export default BannerInfoProdutor
