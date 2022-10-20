import { useSession } from '@faststore/sdk'
import { useCallback } from 'react'
import type { AnalyticsItem } from 'src/sdk/analytics/types'

import { useCart } from './useCart'
import type { CartItem } from './validate'
import { sendAnalyticsEvent } from '../analytics/sendAnalyticsEvent'
import type { RemoveFromCartEvent } from '../analytics/events/remove_from_cart'
import type { CurrencyCode } from '../analytics/events/common'

export const useRemoveButton = (item: CartItem | null) => {
  const { removeItem } = useCart()

  // TODO: change this to use our own hook
  const session = useSession()
  const code = session?.currency?.code

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()

      if (!item) {
        return
      }

      sendAnalyticsEvent<RemoveFromCartEvent<AnalyticsItem>>({
        name: 'remove_from_cart',
        params: {
          currency: (code as CurrencyCode) ?? 'BRL',
          value: item.price * item.quantity, // TODO: In the future, we can explore more robust ways of calculating the value (gift items, discounts, etc.).
          items: [
            {
              item_id: item?.id,
              item_name: item?.itemOffered?.isVariantOf?.name,
              item_brand: item?.itemOffered?.brand?.name,
              item_variant: item?.itemOffered?.sku,
              quantity: item?.quantity,
              price: item?.price,
              discount: item?.listPrice - item?.price,
              currency: (code as CurrencyCode) ?? 'BRL',
              item_variant_name: item?.itemOffered?.name,
              product_reference_id: item?.itemOffered?.gtin,
            },
          ],
        },
      })

      removeItem(item.id)
    },
    [code, item, removeItem]
  )

  return {
    onClick,
    'data-testid': 'remove-from-cart-button',
    'data-sku': item?.itemOffered.sku,
  }
}
