import type { GatsbyImageProps, IGatsbyImageData } from 'gatsby-plugin-image'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

interface Props extends GatsbyImageProps {
  image: IGatsbyImageData
  alt: string
}

function Image({ alt, image, ...otherProps }: Props) {
  const gatsbyImage = getImage(image)

  if (!gatsbyImage) return <></>

  return <GatsbyImage alt={alt} image={gatsbyImage} {...otherProps} />
}

export default Image
