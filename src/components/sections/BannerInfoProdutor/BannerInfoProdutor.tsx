import { Banner, BannerImage, BannerContent } from '@faststore/ui'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
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
  const { isTablet } = useWindowDimensions()

  return (
    <section className="banner-info-produtor">
      <div className="banner-info-produtor__content">
        <Banner>
          <BannerImage>
            <img
              className="banner-info-produtor__image"
              alt=""
              src={isTablet ? imageBannerMobile : imageBannerDesktop}
            />
          </BannerImage>
          <BannerContent>
            <h2 className="banner-info-produtor__title">{title}</h2>
          </BannerContent>
        </Banner>
      </div>
    </section>
  )
}

export default BannerInfoProdutor
