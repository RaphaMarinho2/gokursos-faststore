import loadable from '@loadable/component'

import type { ProductsProductCard } from '../ProductCard/ProductCard'
import './product-grid.scss'

interface Props {
  products: ProductsProductCard[]
  page: number
  pageSize: number
}

const ProductCard = loadable(() => import('../ProductCard'))

function ProductGrid({ products, page, pageSize }: Props) {
  return (
    <ul className="product-grid">
      {products.map((product, idx: number) => (
        <li key={product.ID}>
          <ProductCard
            product={product}
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            index={pageSize * page + idx + 1}
            bordered
            fallback={<></>}
          />
        </li>
      ))}
    </ul>
  )
}

export default ProductGrid
