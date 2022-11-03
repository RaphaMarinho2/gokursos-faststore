import type { ProductData } from 'src/components/sections/ProductDetails/typings'

import { sendAnalyticsEvent } from '../sendAnalyticsEvent'
import type {
  AnalyticsItem,
  ViewPromotionEvent as ViewPromotionEventType,
} from '../types'

export const ViewPromotionEvent = (product: ProductData) => {
  sendAnalyticsEvent<ViewPromotionEventType<AnalyticsItem>>({
    name: 'view_promotion',
    params: {
      items: [
        {
          item_id: product?.ID,
          item_name: product?.Name,
          discount: product?.Price?.isSale
            ? product?.Price?.ListPrice - product?.Price?.BasePrice
            : 0,
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
