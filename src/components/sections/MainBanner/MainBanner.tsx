import { Banner, BannerImage, BannerContent, Button, Link } from '@faststore/ui'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import Carousel from 'src/components/common/Carousel'
import './main-banner.scss'
import { Image } from 'src/components/ui/Image'
import type { IGatsbyImageData } from 'gatsby-plugin-image'

type MainBannerProps = {
  nodes: Array<{
    title: string | null
    subtitle: string | null
    imageDesktop: {
      gatsbyImageData: IGatsbyImageData
    } | null
    imageMobile: {
      gatsbyImageData: IGatsbyImageData
    } | null
    slug: string | null
    buttonLabel: string | null
    buttonColor: string | null
    buttonTextColor: string | null
  }>
}

/**
 *
 * @description Main Banner component with carousel.
 * @version 1.0.0
 * @since 0.2.0
 */
const MainBanner = ({ nodes }: MainBannerProps) => {
  const { isTablet, isMobile } = useWindowDimensions()

  return (
    <div className="main-banner layout__content">
      <Carousel
        fullWidth
        hasAutomaticNavigation
        timeoutNavigationAutomatic={5000}
        automaticHideArrows
        bullet={{
          isVisible: true,
          bulletEnableColor: '#004e98',
          bulletDisableColor: '#ddd',
          style: {
            height: '7px',
            width: '7px',
            margin: '0 2.5px',
            borderRadius: '4px',
            padding: 0,
          },
        }}
        arrow={{
          isVisible: true,
          iconColor: '#004E98',
          style: {
            width: isTablet ? 28 : 32,
            height: isTablet ? 30 : 34,
            margin: 0,
            borderRadius: 100,
            padding: 0,
            backgroundColor: '#fff',
            boxShadow: '2px 1px 15px rgba(0, 0, 0, 0.15)',
          },
        }}
        qtyItems={1}
        gapItems={0}
      >
        {nodes.map((banner, idx) => {
          const image = isMobile
            ? banner?.imageMobile?.gatsbyImageData
            : banner?.imageDesktop?.gatsbyImageData

          if (!image) return <></>

          return (
            <div key={idx} className="main-banner__content">
              <Banner>
                <Link href={banner.slug ?? ''}>
                  <BannerImage>
                    <Image image={image} alt="Imagem do Banner" />
                  </BannerImage>
                </Link>
                <BannerContent>
                  <div>
                    <h2 className="main-banner__title">{banner.title}</h2>
                    <p className="main-banner__subtitle">{banner.subtitle}</p>
                  </div>
                  {banner.slug && banner.buttonColor && banner.buttonTextColor && (
                    <Link href={banner.slug}>
                      <Button
                        style={{
                          backgroundColor: banner.buttonColor,
                        }}
                      >
                        <p
                          className="main-banner__button-label"
                          style={{ color: banner.buttonTextColor }}
                        >
                          {banner.buttonLabel}
                        </p>
                      </Button>
                    </Link>
                  )}
                </BannerContent>
              </Banner>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default MainBanner
