import { useProductsQuery } from 'src/sdk/product/useProductsQuery'
import type { ProductsQueryQueryVariables } from '@generated/graphql'
import Carousel from '@acctglobal/carousel-universal'

import ProductCard from '../ProductCard'

interface ProductShelfProps extends Partial<ProductsQueryQueryVariables> {
  title: string | JSX.Element
  cardsQuantity?: number
  withDivisor?: boolean
}

function ClkBtn() {
  console.info('click')
}

function ProductBtnBuyInPage() {
  return <button onClick={ClkBtn}>Click me</button>
}

function ProductShelf({
  cardsQuantity,
  title,
  withDivisor = false,
  ...variables
}: ProductShelfProps) {
  const products = useProductsQuery(variables)

  if (products?.edges.length === 0) {
    return null
  }

  return (
    <div
      className={`product-shelf-container layout__section ${
        withDivisor ? 'section__divisor' : ''
      }`}
    >
      <h2 className="product-shelf-title">{title}</h2>
      <Carousel
        arrow={{
          isVisible: true,
          iconColor: '#004E98',
        }}
        qtyItems={cardsQuantity}
      >
        {products?.edges.map((product, idx) => (
          <div key={idx}>
            <ProductCard
              product={product.node}
              index={idx + 1}
              ButtonBuy={ProductBtnBuyInPage()}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ProductShelf
