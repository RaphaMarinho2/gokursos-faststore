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

  const { Parcela, Valor, Text } = maxInstalment

  const formattedValue = useFormattedPrice(Valor)
  const rate = Text.includes('sem juros') ? 'sem juros' : ''

  return (
    <span className="instalments">{`em até ${Parcela}x de ${formattedValue} ${rate}`}</span>
  )
}
