import './style.scss'
import PageBanner from '../../common/PageBanner'

interface BannerParaEmpresasProps {
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

interface BannerParaEmpresasMinifiedProps {
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

const BannerParaEmpresas = ({ nodes }: BannerParaEmpresasProps) => {
  const nodesModified = nodes as unknown as BannerParaEmpresasMinifiedProps

  return (
    <section className="banner-para-empresas ">
      {nodesModified.map((banner, index) => (
        <div key={index} className="banner-para-empresas__content">
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

export default BannerParaEmpresas
