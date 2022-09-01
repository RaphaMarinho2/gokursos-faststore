import React, { memo, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { useImage } from './useImage'
import type { ImageOptions } from './useImage'
import './image.scss'

interface Props extends ImageOptions {
  preload?: boolean
  fallbackImage?: React.ReactNode
}

function Image({ preload = false, fallbackImage, ...otherProps }: Props) {
  const [imageError, setImageError] = useState<boolean>(false)
  const imgProps = useImage(otherProps)
  const { sizes = '100vw' } = imgProps

  return (
    <>
      {preload && (
        <Helmet
          link={[
            {
              as: 'image',
              rel: 'preload',
              href: '',
              imagesrcset: '',
              imagesizes: sizes,
            } as any,
          ]}
        />
      )}
      {imageError && fallbackImage ? (
        fallbackImage
      ) : (
        <img
          data-store-image
          {...imgProps}
          alt={imgProps.alt}
          onError={() => setImageError(true)}
        />
      )}
    </>
  )
}

Image.displayName = 'Image'
export default memo(Image)
