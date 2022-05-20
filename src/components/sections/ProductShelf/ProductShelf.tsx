import { useProductsQuery } from 'src/sdk/product/useProductsQuery'
import type { ProductsQueryQueryVariables } from '@generated/graphql'
import Carousel from '@acctglobal/carousel-universal-test'

import ProductCard from '../../product/ProductCard'
import Section from '../Section'

interface ProductShelfProps extends Partial<ProductsQueryQueryVariables> {
  title: string | JSX.Element
  cardsQuantity: number
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
  console.info('ProductShelf')

  const products = useProductsQuery(variables)

  if (products?.edges.length === 0) {
    return null
  }

  return (
    <Section
      className={`layout__section ${withDivisor ? 'section__divisor' : ''}`}
    >
      <h2 className="text__title-section layout__content">{title}</h2>
      <div data-fs-product-shelf-items>
        <Carousel
          qtyItems={cardsQuantity}
          arrow={{
            isVisible: true,
            iconColor: '#004E98',
          }}
        >
          {products?.edges.map((product, idx) => (
            <div key={idx} style={{ width: '100%' }}>
              <ProductCard
                product={product.node}
                index={idx + 1}
                ButtonBuy={ProductBtnBuyInPage()}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </Section>
  )
}

export default ProductShelf
