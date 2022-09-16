import { StaticImage } from 'gatsby-plugin-image'
import type { FC } from 'react'

const EshopIcon: FC = () => {
  return (
    <StaticImage
      src="../../images/eshop-logo.png"
      alt="Eshop Logo"
      placeholder="tracedSVG"
    />
  )
}

export default EshopIcon
