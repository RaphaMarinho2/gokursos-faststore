import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'

import './instalments.scss'

interface Instalment {
  installment: number
  priceValue: number
  text?: string
}
interface InstalmentsProps {
  instalment: Instalment[]
}

export default function Instalments({ instalment }: InstalmentsProps) {
  const maxInstalment = instalment.reduce((prev: any, current: any) => {
    return prev.priceValue < current.priceValue ? prev : current
  })

  const { installment, priceValue } = maxInstalment

  const formattedValue = useFormattedPrice(priceValue)

  return (
    <span className="instalments">{`em até ${installment}x de ${formattedValue}`}</span>
  )
}
