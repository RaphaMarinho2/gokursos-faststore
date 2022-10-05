import type { GatsbyImageProps, IGatsbyImageData } from 'gatsby-plugin-image'
import { withArtDirection, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useMemo } from 'react'

interface Props extends Omit<GatsbyImageProps, 'image'> {
  imageDesktop: IGatsbyImageData
  imageMobile: IGatsbyImageData
  alt: string
}

function ImageWithArtDirection({
  alt,
  imageDesktop,
  imageMobile,
  ...otherProps
}: Props) {
  const gatsbyImage = useMemo(() => {
    const mobileImage = getImage(imageMobile)
    const desktopImage = getImage(imageDesktop)

    if (!mobileImage || !desktopImage) return

    return withArtDirection(desktopImage, [
      {
        media: '(max-width: 1024px)',
        image: mobileImage,
      },
    ])
  }, [imageDesktop, imageMobile])

  if (!gatsbyImage) return <></>

  return <GatsbyImage alt={alt} image={gatsbyImage} {...otherProps} />
}

export default ImageWithArtDirection
