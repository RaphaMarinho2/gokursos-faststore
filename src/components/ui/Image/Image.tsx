import React, { memo, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import type { ImageOptions } from './useImage'
import './image.scss'

interface Props extends ImageOptions {
  preload?: boolean
  fallbackImage?: React.ReactNode
}

function Image({ preload = false, fallbackImage, ...otherProps }: Props) {
  const [imageError, setImageError] = useState<boolean>(false)
  const sizes = '100vw'

  return (
    <>
      {preload && (
        <Helmet
          link={[
            {
              as: 'image',
              rel: 'preload',
              href: otherProps.src,
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
          {...otherProps}
          alt={otherProps.alt}
          onError={() => setImageError(true)}
        />
      )}
    </>
  )
}

Image.displayName = 'Image'
export default memo(Image)
