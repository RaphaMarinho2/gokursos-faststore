import { gql } from '@vtex/graphql-utils'
import type { CartItem as SDKCartItem, Cart as SDKCart } from '@faststore/sdk'
import type { CartItemFragment, CartMessageFragment } from '@generated/graphql'

export interface CartItem extends SDKCartItem, CartItemFragment {}

export interface Cart extends SDKCart<CartItem> {
  messages?: CartMessageFragment[]
}

export const ValidateCartMutation = gql`
  mutation ValidateCartMutation($cart: IStoreCart!) {
    validateCart(cart: $cart) {
      order {
        orderNumber
        acceptedOffer {
          ...CartItem
        }
      }
      messages {
        ...CartMessage
      }
    }
  }

  fragment CartMessage on StoreCartMessage {
    text
    status
  }

  fragment CartItem on StoreOffer {
    seller {
      identifier
    }
    quantity
    price
    listPrice
    itemOffered {
      sku
      name
      image {
        url
        alternateName
      }
      brand {
        name
      }
      isVariantOf {
        productGroupID
        name
      }
      gtin
    }
  }
`

export const isGift = (item: CartItem) => item.price === 0

export const getItemId = (
  item: Pick<CartItem, 'itemOffered' | 'seller' | 'price'>
) => `${item.itemOffered.sku}:${item.seller.identifier}:${item.price}`
