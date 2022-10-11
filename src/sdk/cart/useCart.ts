import { useCart as useSDKCart } from '@faststore/sdk'
import { useCallback, useMemo } from 'react'

import { getItemId, isGift } from './validate'
import type { Cart, CartItem } from './validate'

export const useCart = () => {
  const { addItem: addItemToCart, ...cart } = useSDKCart<CartItem>()

  const addItem = useCallback(
    (item: CartItem) => {
      const cartItem = {
        ...item,
        id: getItemId(item),
      }

      addItemToCart(cartItem)
    },

    [addItemToCart]
  )

  return useMemo(
    () => ({
      ...cart,
      addItem,
      messages: (cart as Cart).messages,
      gifts: cart.items.filter((item: CartItem) => isGift(item)),
      items: cart.items.filter((item: CartItem) => !isGift(item)),
      totalUniqueItems: cart.items.length,
      totalItems: cart.items.reduce(
        (acc: number, curr: CartItem) =>
          acc + (isGift(curr) ? 0 : curr.quantity),
        0
      ),
      total: cart.items.reduce(
        (acc: number, curr: { price: number; quantity: number }) =>
          acc + curr.price * curr.quantity,
        0
      ),
      subTotal: cart.items.reduce(
        (acc: number, curr: { listPrice: number; quantity: number }) =>
          acc + curr.listPrice * curr.quantity,
        0
      ),
    }),
    [addItem, cart]
  )
}
