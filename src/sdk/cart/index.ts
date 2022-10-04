import { gql } from '@vtex/graphql-utils'

export const ValidateCartMutation = gql`
  fragment CartItem on StoreOffer {
    seller {
      identifier
    }
    quantity
    price
    listPrice
    itemOffered {
      ...CartProductItem
    }
  }

  fragment CartProductItem on StoreProduct {
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

  fragment CartMessage on StoreCartMessage {
    text
    status
  }
`
