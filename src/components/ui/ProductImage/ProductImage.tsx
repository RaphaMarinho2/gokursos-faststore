import VTEXImage from '../Image/VTEXImage'

interface Props {
  imageUrl: string
  alt: string
}

function ProductImage({ imageUrl, alt }: Props) {
  return (
    <>
      {imageUrl && (
        <VTEXImage src={imageUrl} width={780} height={368} alt={alt} />
      )}
    </>
  )
}

export default ProductImage
