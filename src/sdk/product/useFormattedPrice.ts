import { useMemo } from 'react'
import { useSession } from '@faststore/sdk'

export const useFormattedPrice = (price: number) => {
  const { locale } = useSession()

  return useMemo(
    () =>
      Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'BRL',
      }).format(price),
    [locale, price]
  )
}
