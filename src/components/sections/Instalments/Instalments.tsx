import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'

import './instalments.scss'

interface Instalment {
  Parcela: number
  Valor: number
  Text?: string
}
interface InstalmentsProps {
  instalment: Instalment | any
}

export default function Instalments({ instalment }: InstalmentsProps) {
  const maxInstalment = instalment.reduce((prev: any, current: any) => {
    return prev.Valor < current.Valor ? prev : current
  })

  const { Parcela, Valor } = maxInstalment

  const formattedValue = useFormattedPrice(Valor)

  return (
    <span className="instalments">{`em até ${Parcela}x de ${formattedValue}`}</span>
  )
}
