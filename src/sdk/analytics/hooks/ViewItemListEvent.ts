import { useSession } from '@faststore/sdk'
import type { ProductData } from 'src/components/sections/ProductDetails/typings'

import { sendAnalyticsEvent } from '../sendAnalyticsEvent'
import type {
  AnalyticsItem,
  CurrencyCode,
  ViewItemListEvent as ViewItemListEventType,
} from '../types'

export const ViewItemListEvent = (products: ProductData[]) => {
  // TODO: change this to use our own hook
  const session = useSession()
  const code = session?.currency?.code

  if (products) {
    sendAnalyticsEvent<ViewItemListEventType<AnalyticsItem>>({
      name: 'view_item_list',
      params: {
        item_list_name: 'Related Products',
        item_list_id: 'related-products',
        items: products?.map((product: ProductData) => ({
          item_id: product?.ID,
          item_name: product?.Name,
          discount: product?.Price?.isSale
            ? product?.Price?.ListPrice - product?.Price?.BasePrice
            : 0,
          item_list_name: `Related products from ${product?.Category?.Name}`,
          item_list_id: 'related-products',
          item_brand: product?.Department?.Name,
          item_category: product?.Category?.Name,
          price: product?.Price?.BasePrice,
          currency: (code as CurrencyCode) ?? 'BRL',
          item_variant_name: product?.Name,
          product_reference_id: null,
        })),
      },
    })
  }
}
