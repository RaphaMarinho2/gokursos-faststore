import type { CurrencyCode, ViewItemEvent } from '@faststore/sdk'
import { sendAnalyticsEvent, useSession } from '@faststore/sdk'

import type { AnalyticsItem } from '../types'

const UseViewItem = (product: any) => {
  const {
    currency: { code },
  } = useSession()

  sendAnalyticsEvent<ViewItemEvent<AnalyticsItem>>({
    name: 'view_item',
    params: {
      currency: code as CurrencyCode,
      value: product.Price.BasePrice,
      items: [
        {
          item_id: product.ID,
          item_name: product.Name,
          item_brand: product.Brand.Name,
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

export default UseViewItem
