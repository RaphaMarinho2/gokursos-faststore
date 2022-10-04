import type { ViewPromotionEvent } from '@faststore/sdk'
import { sendAnalyticsEvent } from '@faststore/sdk'

import type { AnalyticsItem } from '../types'

const UseViewPromotion = (product: any) => {
  sendAnalyticsEvent<ViewPromotionEvent<AnalyticsItem>>({
    name: 'view_promotion',
    params: {
      items: [
        {
          item_id: product.ID,
          item_name: product.Name,
          item_variant_name: product.Name,
          product_reference_id: product.ID,
        },
      ],
    },
  })
}

export default UseViewPromotion
