import type { DetailedHTMLProps, HTMLAttributes } from 'react'

import './section.scss'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

function Section({ className = '', ...otherProps }: Props) {
  return <section className={`section ${className}`} {...otherProps} />
}

export default Section
