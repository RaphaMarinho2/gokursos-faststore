import { useCallback } from 'react'
import { useLocation } from '@reach/router'
import type { ProductsProductCard } from 'src/components/product/ProductCard/ProductCard'

import type {
  AnalyticsItem,
  CurrencyCode,
  SearchSelectItemEvent,
  SelectItemEvent,
} from '../analytics/types'
import { currency } from '../../../store.config'
import { sendAnalyticsEvent } from '../analytics/sendAnalyticsEvent'

export type ProductLinkOptions = {
  index: number
  product: ProductsProductCard
}

export const useProductLink = ({ index, product }: ProductLinkOptions) => {
  const { LinkId: slug } = product

  const { href } = useLocation()

  const { code } = currency

  const onClick = useCallback(() => {
    sendAnalyticsEvent<SelectItemEvent<AnalyticsItem>>({
      name: 'select_item',
      params: {
        items: [
          {
            item_id: product?.ID,
            item_name: product?.Name,
            item_brand: product?.Category?.Name,
            index,
            price: product?.Price?.BasePrice,
            discount: product?.Price?.isSale
              ? product?.Price?.ListPrice - product?.Price?.BasePrice
              : 0,
            currency: (code as CurrencyCode) ?? 'BRL',
            item_variant_name: product.Name,
            product_reference_id: null,
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
            item_id: product.ID,
            index,
          },
        ],
      },
    })
  }, [code, product, index, href])

  return {
    to: `/${slug}/p`,
    onClick,
    'data-testid': 'product-link',
  }
}
