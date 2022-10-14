import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

import VTEXImage from '../Image/VTEXImage'

interface Props {
  imageUrl: string
  alt: string
}

function ProductImage({ imageUrl, alt }: Props) {
  const { isMobile } = useWindowDimensions()

  const sizes = {
    width: isMobile ? 360 : 780,
    height: isMobile ? 183 : 368,
  }

  return (
    <>
      {imageUrl && (
        <VTEXImage
          src={imageUrl}
          width={sizes.width}
          height={sizes.height}
          alt={alt}
        />
      )}
    </>
  )
}

export default ProductImage
