import { Banner, BannerImage, BannerContent, Button, Link } from '@faststore/ui'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import Carousel from 'src/components/common/Carousel'

import './main-banner.scss'

type MainBannerProps = {
  nodes: Array<{
    title: string
    subtitle: string | undefined
    imageDesktop: {
      url: string | undefined
    }
    imageMobile: {
      url: string | undefined
    }
    slug: string | undefined
    buttonLabel: string | undefined
    buttonColor: string | undefined
    buttonTextColor: string | undefined
  }>
}

const MainBanner = ({ nodes }: MainBannerProps) => {
  const { isTablet } = useWindowDimensions()

  return (
    <div className="main-banner">
      <Carousel
        navigationAutomatic
        timeoutNavigationAutomatic={5000}
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
        {nodes.map((banner, idx) => (
          <div key={idx} className="main-banner__content">
            <Banner>
              <Link href={banner.slug}>
                <BannerImage>
                  <img
                    className="main-banner__image"
                    alt="Imagem do Banner"
                    src={
                      isTablet
                        ? banner.imageMobile.url
                        : banner.imageDesktop.url
                    }
                    width="100%"
                  />
                </BannerImage>
              </Link>
              <BannerContent>
                <div>
                  <h2 className="main-banner__title">{banner.title}</h2>
                  <p className="main-banner__subtitle">{banner.subtitle}</p>
                </div>

                <Link href={banner.slug}>
                  <Button
                    style={{
                      background: banner.buttonColor,
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
              </BannerContent>
            </Banner>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default MainBanner
