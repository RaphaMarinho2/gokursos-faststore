import type { SVGProps } from 'react'

type IconWeight = 'thin' | 'light' | 'regular' | 'bold'

const mapWeightToValue: Record<IconWeight, number> = {
  bold: 24,
  regular: 16,
  light: 12,
  thin: 8,
}

interface Props extends SVGProps<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon name="Bell" />
   */
  name: string
  /**
   * SVG weight.
   *
   * @default 'regular'
   */
  weight?: IconWeight
}

function SearchIcon({ name, weight = 'regular', ...otherProps }: Props) {
  return (
    <svg
      {...otherProps}
      strokeWidth={mapWeightToValue[weight]}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13.75" cy="13.75" r="8.75" stroke="#004E98" strokeWidth="2" />
      <path
        d="M13.75 10C13.2575 10 12.7699 10.097 12.3149 10.2855C11.86 10.4739 11.4466 10.7501 11.0983 11.0983C10.7501 11.4466 10.4739 11.86 10.2855 12.3149C10.097 12.7699 10 13.2575 10 13.75"
        stroke="#004E98"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M25 25L21.25 21.25"
        stroke="#004E98"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default SearchIcon
