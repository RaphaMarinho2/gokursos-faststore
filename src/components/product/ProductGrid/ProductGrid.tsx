import ProductGridSkeleton from 'src/components/skeletons/ProductGridSkeleton'

import ProductCard from '../ProductCard'
import './product-grid.scss'

interface Props {
  products: any
  page: number
  pageSize: number
}

function ProductGrid({ products, page, pageSize }: Props) {
  return (
    <ProductGridSkeleton loading={products.length === 0}>
      <ul className="product-grid">
        {products.map(({ node: product }: any, idx: number) => (
          <li key={`${product.id}`}>
            <ProductCard
              product={product}
              // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
              index={pageSize * page + idx + 1}
              bordered
            />
          </li>
        ))}
      </ul>
    </ProductGridSkeleton>
  )
}

export default ProductGrid
