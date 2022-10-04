import type { CurrencyCode, SelectPromotionEvent } from '@faststore/sdk'
import { sendAnalyticsEvent, useSession } from '@faststore/sdk'

import type { AnalyticsItem } from '../types'

const UseSelectPromotion = (product: any) => {
  const {
    currency: { code },
  } = useSession()

  sendAnalyticsEvent<SelectPromotionEvent<AnalyticsItem>>({
    name: 'select_promotion',
    params: {
      items: [
        {
          item_id: product.ID,
          item_name: product.Name,
          item_brand: product.Brand.Name,
          discount: product.Price.ListPrice - product.Price.BasePrice,
          item_category: product.Department.Name,
          currency: code as CurrencyCode,
          price: product.Price.BasePrice,
          item_variant_name: product.Name,
          product_reference_id: product.ID,
        },
      ],
    },
  })
}

export default UseSelectPromotion
