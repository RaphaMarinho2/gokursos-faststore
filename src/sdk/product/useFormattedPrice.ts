import { useMemo } from 'react'

import { locale } from '../../../store.config'

export const useFormattedPrice = (price: number) => {
  return useMemo(
    () =>
      Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'BRL',
      }).format(price),
    [price]
  )
}
