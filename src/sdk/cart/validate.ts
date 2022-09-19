import type { CartItem as SDKCartItem, Cart as SDKCart } from '@faststore/sdk'
import type { CartItemFragment, CartMessageFragment } from '@generated/graphql'

export interface CartItem extends SDKCartItem, CartItemFragment {}

export interface Cart extends SDKCart<CartItem> {
  messages?: CartMessageFragment[]
}

export const isGift = (item: CartItem) => item.price === 0

export const getItemId = (
  item: Pick<CartItem, 'itemOffered' | 'seller' | 'price'>
) => `${item.itemOffered.sku}:${item.seller.identifier}:${item.price}`
