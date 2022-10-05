import { useCallback } from 'react'
import type { CurrencyCode, SelectItemEvent } from '@faststore/sdk'
import { sendAnalyticsEvent, useSession } from '@faststore/sdk'
import type { ProductData } from 'src/components/sections/ProductDetails/typings'

import type { AnalyticsItem } from '../types'

type Props = {
  product: ProductData
}

export const SelectItem = ({ product }: Props) => {
  const {
    currency: { code },
  } = useSession()

  const sendSelectItemEvent = useCallback(() => {
    sendAnalyticsEvent<SelectItemEvent<AnalyticsItem>>({
      name: 'select_item',
      params: {
        item_list_name: 'related products',
        item_list_id: 'related-products',
        items: [
          {
            item_id: product?.ID,
            item_name: product?.Name,
            discount: product?.Price?.isSale
              ? product?.Price?.ListPrice - product?.Price?.BasePrice
              : 0,
            item_list_name: `Related products from ${product.Category.Name}`,
            item_list_id: 'related-products',
            item_brand: product?.Department?.Name,
            item_category: product?.Category?.Name,
            price: product?.Price.BasePrice,
            currency: code as CurrencyCode,
            item_variant_name: product?.Name,
            product_reference_id: null,
          },
        ],
      },
    })
  }, [code, product])

  return { sendSelectItemEvent }
}
