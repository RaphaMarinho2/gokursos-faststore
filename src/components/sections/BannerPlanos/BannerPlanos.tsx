import './style.scss'
import PageBanner from '../../common/PageBanner'

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
  const nodesModified =
    nodes as unknown as BannerPlanosDeAssinaturaModifiedProps

  return (
    <section className="banner-planos ">
      {nodesModified.map((banner, index) => (
        <div key={index} className="banner-planos__content">
          <PageBanner
            title={banner.title}
            subtitle={banner.subtitle}
            imageBannerDesktop={banner.imageDesktop.url}
            imageBannerMobile={banner.imageMobile.url}
          />
        </div>
      ))}
    </section>
  )
}

export default BannerPlanos
