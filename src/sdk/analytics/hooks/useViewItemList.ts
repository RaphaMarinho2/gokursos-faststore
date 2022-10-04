import type { ViewItemListEvent } from '@faststore/sdk'
import { sendAnalyticsEvent } from '@faststore/sdk'

import type { AnalyticsItem } from '../types'

const UseViewItemList = (products: any) => {
  sendAnalyticsEvent<ViewItemListEvent<AnalyticsItem>>({
    name: 'view_item_list',
    params: {
      item_list_name: 'related products',
      item_list_id: 'related-products',
      items: products.map((product: any) => ({
        item_id: product.ID,
        item_name: product.Name,
        item_variant_name: product.Name,
        product_reference_id: product.ID,
      })),
    },
  })
}

export default UseViewItemList
