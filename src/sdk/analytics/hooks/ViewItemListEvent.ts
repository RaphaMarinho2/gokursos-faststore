import { useCallback } from 'react'
import type { CurrencyCode, ViewItemListEvent } from '@faststore/sdk'
import { sendAnalyticsEvent, useSession } from '@faststore/sdk'
import type { ProductData } from 'src/components/sections/ProductDetails/typings'

import type { AnalyticsItem } from '../types'

type Props = {
  products: ProductData[]
}

export const ViewItemList = ({ products }: Props) => {
  const {
    currency: { code },
  } = useSession()

  const sendViewItemListEvent = useCallback(() => {
    sendAnalyticsEvent<ViewItemListEvent<AnalyticsItem>>({
      name: 'view_item_list',
      params: {
        item_list_name: 'Related Products',
        item_list_id: 'related-products',
        items: products.map((product: any) => ({
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
        })),
      },
    })
  }, [code, products])

  return { sendViewItemListEvent }
}
