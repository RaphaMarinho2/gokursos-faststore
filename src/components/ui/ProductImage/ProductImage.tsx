import ImageGallery from '@acctglobal/image-gallery'
import type { Size } from '@acctglobal/image-gallery/dist/ImageGallery'

interface Props {
  imageUrl: string
  alt: string
}

function ProductImage({ imageUrl, alt }: Props) {
  const sizes: Size = {
    width: [360, 780],
    height: [183, 368],
  }

  const image = {
    url: imageUrl,
    alternateName: alt,
  }

  return (
    <>
      {imageUrl ? (
        <ImageGallery
          images={[image]}
          defaultMainImageSize={sizes}
          imageSelectorSizes={sizes}
        />
      ) : (
        <div style={{ width: 360, height: 183 }} />
      )}
    </>
  )
}

export default ProductImage
