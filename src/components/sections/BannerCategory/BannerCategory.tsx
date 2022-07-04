import './style.scss'
import { Banner, BannerImage, BannerContent } from '@faststore/ui'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

interface BannerCategoryProps {
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

interface BannerCategoryModifiedProps {
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

const BannerCategory = ({ nodes }: BannerCategoryProps) => {
  const { isTablet } = useWindowDimensions()
  const nodesModified = nodes as unknown as BannerCategoryModifiedProps

  return (
    <section className="banner-category layout__content">
      {nodesModified.map((banner, index) => (
        <div key={index} className="banner-category__content">
          <Banner>
            <BannerImage>
              <img
                className="banner-category__image"
                alt=""
                src={
                  isTablet ? banner.imageMobile?.url : banner.imageDesktop?.url
                }
              />
            </BannerImage>
            <BannerContent>
              <h2 className="banner-category__title">{banner.title}</h2>
              <h3 className="banner-category__subtitle">{banner.subtitle}</h3>
            </BannerContent>
          </Banner>
        </div>
      ))}
    </section>
  )
}

export default BannerCategory
