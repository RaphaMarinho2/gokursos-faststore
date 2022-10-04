import React, { memo } from 'react'
import { Helmet } from 'react-helmet-async'

import type { ImageOptions } from './useImage'
import { useImage } from './useImage'
import './image.scss'

interface Props extends ImageOptions {
  preload?: boolean
  fallbackImage?: React.ReactNode
}

function VTEXImage({ preload = false, fallbackImage, ...otherProps }: Props) {
  const imgProps = useImage(otherProps)
  const { src, sizes = '100vw', srcSet } = imgProps

  return (
    <>
      {preload && (
        <Helmet
          link={[
            {
              as: 'image',
              rel: 'preload',
              href: src,
              imagesrcset: srcSet,
              imagesizes: sizes,
            } as any,
          ]}
        />
      )}
      {!src && fallbackImage ? (
        fallbackImage
      ) : (
        <img
          data-store-image
          {...imgProps}
          src={imgProps.src}
          alt={imgProps.alt}
        />
      )}
    </>
  )
}

VTEXImage.displayName = 'Image'
export default memo(VTEXImage)
