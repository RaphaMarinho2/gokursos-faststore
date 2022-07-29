import ProductGridSkeleton from 'src/components/skeletons/ProductGridSkeleton'

import ProductCard from '../ProductCard'
import type { ProductsProductCard } from '../ProductCard/ProductCard'
import './product-grid.scss'

interface Props {
  products: ProductsProductCard[]
  page: number
  pageSize: number
}

function ProductGrid({ products, page, pageSize }: Props) {
  return (
    <ProductGridSkeleton loading={products.length === 0}>
      <ul className="product-grid">
        {products.map((product, idx: number) => (
          <li key={idx}>
            <ProductCard
              product={product}
              // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
              index={pageSize * page + idx + 1}
              ButtonBuy={<button>Quero começar</button>}
              bordered
            />
          </li>
        ))}
      </ul>
    </ProductGridSkeleton>
  )
}

export default ProductGrid
