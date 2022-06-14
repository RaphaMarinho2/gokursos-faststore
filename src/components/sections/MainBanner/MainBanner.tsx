import {
  Carousel,
  Banner,
  BannerImage,
  BannerContent,
  Button,
} from '@faststore/ui'

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
  return (
    <>
      <Carousel
        controls="complete"
        transition={{
          duration: 400,
          property: 'transform',
        }}
      >
        {nodes.map((banner, idx) => (
          <div key={idx}>
            <Banner variant="horizontal">
              <BannerImage>
                <img alt="" src={banner.imageMobile.url} width="100%" />
              </BannerImage>
              <BannerContent>
                <div>
                  <h3>{banner.title}</h3>
                  <p>{banner.subtitle}</p>
                </div>

                <Button
                  style={{
                    background: banner.buttonColor,
                  }}
                >
                  <a
                    href={banner.slug}
                    style={{ color: banner.buttonTextColor }}
                  >
                    {banner.buttonLabel}
                  </a>
                </Button>
              </BannerContent>
            </Banner>
          </div>
        ))}
      </Carousel>
    </>
  )
}

export default MainBanner
