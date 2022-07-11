import { useCallback } from 'react'
import { sendAnalyticsEvent, useSession } from '@faststore/sdk'
import { useLocation } from '@reach/router'
import type { CurrencyCode, SelectItemEvent } from '@faststore/sdk'

import type { AnalyticsItem, SearchSelectItemEvent } from '../analytics/types'

export type ProductLinkOptions = {
  index: number
  product?: any
  selectedOffer: number
}

export const useProductLink = ({
  index,
  product,
  selectedOffer,
}: ProductLinkOptions) => {
  const { ProductURL } = product

  const slug = ProductURL
    ? ProductURL.replace('https://www.gokursos.com/', '')
    : ''

  const { href } = useLocation()
  const {
    currency: { code },
  } = useSession()

  const onClick = useCallback(() => {
    sendAnalyticsEvent<SelectItemEvent<AnalyticsItem>>({
      name: 'select_item',
      params: {
        items: [
          {
            item_id: product.isVariantOf.productGroupID,
            item_name: product.isVariantOf.name,
            item_brand: product.brand.name,
            item_variant: product.sku,
            index,
            price: product.offers.offers[selectedOffer].price,
            discount:
              product.offers.offers[selectedOffer].listPrice -
              product.offers.offers[selectedOffer].price,
            currency: code as CurrencyCode,
            item_variant_name: product.name,
            product_reference_id: product.gtin,
          },
        ],
      },
    })

    sendAnalyticsEvent<SearchSelectItemEvent>({
      name: 'search_select_item',
      params: {
        url: href,
        items: [
          {
            item_id: product.isVariantOf.productGroupID,
            item_variant: product.sku,
            index,
          },
        ],
      },
    })
  }, [code, product, index, selectedOffer, href])

  return {
    to: `/${slug}`,
    onClick,
    'data-testid': 'product-link',
  }
}
