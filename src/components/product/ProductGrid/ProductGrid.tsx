import ProductGridSkeleton from 'src/components/skeletons/ProductGridSkeleton'

import ProductCard from '../ProductCard'
import './product-grid.scss'

interface Props {
  products?: any
  page: number
  pageSize: number
}

function ProductGrid({ products, page, pageSize }: Props) {
  return (
    <ProductGridSkeleton loading={products.length === 0}>
      <ul className="product-grid">
        {products.map((product: any, idx: number) => (
          <li key={idx}>
            <ProductCard
              product={product}
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
