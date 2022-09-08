import type { PropsWithChildren } from 'react'

import ProductCardSkeleton from '../ProductCardSkeleton'

interface Props {
  loading?: boolean
  cardsQuantity: number
}

function ProductShelfSkeleton({
  children,
  loading = true,
  cardsQuantity,
}: PropsWithChildren<Props>) {
  return loading ? (
    <ul data-fs-product-shelf-items className="layout__content">
      {Array.from({ length: cardsQuantity }, (_, index) => (
        <li key={String(index)}>
          <ProductCardSkeleton bordered />
        </li>
      ))}
    </ul>
  ) : (
    <>{children}</>
  )
}

export default ProductShelfSkeleton
