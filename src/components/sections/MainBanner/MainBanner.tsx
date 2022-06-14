import {
  Carousel,
  Banner,
  BannerImage,
  BannerContent,
  BannerLink,
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
        <Banner>
          <BannerImage>
            <img alt="" src={nodes[0].imageDesktop.url} width="100%" />
          </BannerImage>
          <BannerContent>
            <div>
              <h3>Get to know our new release</h3>
              <p>
                Your one-stop shop for making this summer season the best of
                all.
              </p>
            </div>
            <BannerLink>
              <a href="/">Shop now</a>
            </BannerLink>
          </BannerContent>
        </Banner>
      </Carousel>
    </>
  )
}

export default MainBanner
