import { ITEMS_PER_PAGE } from 'src/constants'
import type { PropsWithChildren } from 'react'

import ProductCardSkeleton from '../ProductCardSkeleton'
import '../../product/ProductGrid/product-grid.scss'

interface Props {
  loading?: boolean
}

function ProductGridSkeleton({
  children,
  loading = true,
}: PropsWithChildren<Props>) {
  return loading ? (
    <ul className="product-grid">
      {Array.from({ length: ITEMS_PER_PAGE }, (_, index) => (
        <li key={String(index)}>
          <ProductCardSkeleton bordered />
        </li>
      ))}
    </ul>
  ) : (
    <>{children}</>
  )
}

export default ProductGridSkeleton
