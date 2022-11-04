/* eslint-disable jsx-a11y/media-has-caption */
import VTEXImage from 'src/components/ui/Image/VTEXImage'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

import type { ProductQueryDetails } from './TypeProductDetails'

type VideoAndTextProps = {
  className?: string
  ProductQueryDetails: ProductQueryDetails
}

type ProductInfo = {
  text: string
}

export const VideoAndText = ({
  className,
  ProductQueryDetails,
}: VideoAndTextProps) => {
  const { product } = ProductQueryDetails
  const { node } = product
  const { image, video, productInfos } = node
  const { isMobile } = useWindowDimensions()

  const urlImage = image[image.length - 1]?.url
  const nameImg = image[image.length - 1]?.alternateName

  const nameVideo = video[image.length - 1]?.alternateName
  const urlVideo = video[video.length - 1]?.url

  const InfoElement = productInfos.map(
    (textInfo: ProductInfo, index: number) => {
      return (
        <p
          key={index}
          className={`product-details__infos--text ${
            className ? `${className}` : ''
          }`}
        >
          {textInfo?.text}
        </p>
      )
    }
  )

  return (
    <>
      <section
        className={`product-details__product ${
          className ? `${className}` : ''
        }`}
      >
        <div>
          <h3
            className={`product-details__title-content ${
              className ? `${className}` : ''
            }`}
          >
            Como ensinamos?
          </h3>

          <div
            className={`product-details__movie ${
              className ? `${className}` : ''
            }`}
          >
            {urlVideo && (
              <iframe
                src={urlVideo}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={nameVideo}
              />
            )}
          </div>
        </div>

        <div
          className={`product-details__infos ${
            className ? `${className}` : ''
          }`}
        >
          <div
            className={`product-details__infos-image ${
              className ? `${className}` : ''
            }`}
          >
            <VTEXImage
              src={urlImage}
              width={isMobile ? 99 : 150}
              height={isMobile ? 99 : 150}
              alt={nameImg}
              loading="lazy"
            />
          </div>
          <div>
            <h3>Tecnologia</h3>
            <p>Linguagens de Programação</p>
            <a href="/category-name">Ver outros cursos dessa categoria</a>
          </div>
        </div>
        <div>{InfoElement}</div>
      </section>
    </>
  )
}
