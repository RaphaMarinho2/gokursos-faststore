import './style.scss'
import { Banner, BannerImage, BannerContent } from '@faststore/ui'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

interface BannerPlanosDeAssinaturaProps {
  nodes: Array<{
    title: string | null
    subtitle: string | null
    imageDesktop: {
      url: string | null
    } | null
    imageMobile: {
      url: string | null
    } | null
  }>
}

interface BannerPlanosDeAssinaturaModifiedProps {
  map(
    arg0: (banner: any, index: number) => JSX.Element
  ): import('react').ReactNode
  nodes: Array<{
    title: string
    subtitle: string
    imageDesktop: {
      url: string
    }
    imageMobile: {
      url: string
    }
  }>
}

const BannerPlanos = ({ nodes }: BannerPlanosDeAssinaturaProps) => {
  const { isTablet } = useWindowDimensions()
  const nodesModified =
    nodes as unknown as BannerPlanosDeAssinaturaModifiedProps

  return (
    <section className="banner-planos ">
      {nodesModified.map((banner, index) => (
        <div key={index} className="banner-planos__content">
          <Banner>
            <BannerImage>
              <img
                className="banner-planos__image"
                alt=""
                src={
                  isTablet ? banner.imageMobile?.url : banner.imageDesktop?.url
                }
              />
            </BannerImage>
            <BannerContent>
              <h2 className="banner-planos__title">{banner.title}</h2>
              <h3 className="banner-planos__subtitle">{banner.subtitle}</h3>
            </BannerContent>
          </Banner>
        </div>
      ))}
    </section>
  )
}

export default BannerPlanos
