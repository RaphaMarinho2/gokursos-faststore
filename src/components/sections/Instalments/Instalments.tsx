import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'

import './instalments.scss'

interface Instalment {
  instalments: number
  value: number
  interestRate?: number | null
}

interface InstalmentsProps {
  instalment: Instalment
}

export default function Instalments({ instalment }: InstalmentsProps) {
  const { instalments, value, interestRate } = instalment
  const formattedValue = useFormattedPrice(value)
  const rate = interestRate ? '' : 'sem juros'

  return (
    <span className="instalments">{`em até ${instalments}x de ${formattedValue} ${rate}`}</span>
  )
}
