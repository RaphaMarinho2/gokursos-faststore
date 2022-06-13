import productsQuery from 'src/mocks/productsQuery.json'
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
  return <button onClick={ClkBtn}>Quero começar</button>
}

function ProductShelf({
  cardsQuantity = 5,
  title,
  withDivisor = false,
}: ProductShelfProps) {
  const { products } = productsQuery.data.search

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
