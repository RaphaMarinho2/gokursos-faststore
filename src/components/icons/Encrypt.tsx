import { StaticImage } from 'gatsby-plugin-image'
import type { FC } from 'react'

const EncryptIcon: FC = () => {
  return (
    <StaticImage
      src="../../images/lets-encrypt-logo.png"
      alt="Let's Encrypt Logo"
      placeholder="tracedSVG"
    />
  )
}

export default EncryptIcon
