import React, { memo } from 'react'
import { Helmet } from 'react-helmet-async'

import type { ImageOptions } from './useImage'
import './image.scss'

interface Props extends ImageOptions {
  preload?: boolean
  fallbackImage?: React.ReactNode
}

function VTEXImage({ preload = false, fallbackImage, ...otherProps }: Props) {
  const { src, width, height } = otherProps

  return (
    <>
      {preload && (
        <Helmet
          link={[
            {
              as: 'image',
              rel: 'preload',
              href: src,
              imagesrcset: src,
              imagesizes: width && height ? `${width}x${height}` : '',
            } as any,
          ]}
        />
      )}
      {!src && fallbackImage ? (
        fallbackImage
      ) : (
        <img data-store-image {...otherProps} alt={otherProps.alt} />
      )}
    </>
  )
}

VTEXImage.displayName = 'Image'
export default memo(VTEXImage)
