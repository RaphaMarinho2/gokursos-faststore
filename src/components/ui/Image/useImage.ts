import { useMemo } from 'react'
import type { ImgHTMLAttributes } from 'react'

// import { urlBuilder } from './thumborUrlBuilder'
import type { ThumborOptions } from './thumborUrlBuilder'

export interface ImageOptions extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  width: number
  height: number
  options?: ThumborOptions
}

const FACTORS = [1, 2, 3]
// const LARGE_FACTOR = FACTORS[FACTORS.length - 1]

export const useImage = ({
  src,
  width,
  height,
  options = {},
  ...rest
}: ImageOptions): ImgHTMLAttributes<HTMLImageElement> => {
  const { srcSet } = useMemo(() => {
    const srcs = FACTORS.map((factor) => {
      const rescaledWidth = width * factor
      return `${src} ${rescaledWidth}w`
    })

    return {
      srcSet: srcs.join(', '),
    }
  }, [height, options, src, width])

  return {
    src,
    srcSet,
    width: `${width}px`,
    height: `${height}px`,
    ...rest,
  }
}
