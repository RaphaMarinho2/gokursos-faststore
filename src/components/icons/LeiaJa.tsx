import { Link } from '@faststore/ui'
import { StaticImage } from 'gatsby-plugin-image'
import type { FC } from 'react'

const LeiaJaLogo: FC = () => {
  return (
    <Link
      className="leiaja-logo-link"
      href="
    https://www.leiaja.com/?utm_source=gokursos"
      target="_blank"
    >
      <StaticImage
        className="leiaja-logo"
        src="../../images/leiaja.png"
        alt="LeiaJa Logo"
      />
    </Link>
  )
}

export default LeiaJaLogo
