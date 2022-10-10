import type { SelectItemEvent as SelectItemEventType } from '@faststore/sdk'
import { sendAnalyticsEvent } from '@faststore/sdk'
import type { ProductData } from 'src/components/sections/ProductDetails/typings'

import type { AnalyticsItem } from '../types'

export const SelectItemEvent = (product: ProductData) => {
  sendAnalyticsEvent<SelectItemEventType<AnalyticsItem>>({
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
          item_list_name: `Related products from ${product?.Category?.Name}`,
          item_list_id: 'related-products',
          item_brand: product?.Department?.Name,
          item_category: product?.Category?.Name,
          price: product?.Price.BasePrice,
          item_variant_name: product?.Name,
          product_reference_id: null,
        },
      ],
    },
  })
}
