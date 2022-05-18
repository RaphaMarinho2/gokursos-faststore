import ProductShelfSkeleton from 'src/components/skeletons/ProductShelfSkeleton'
import { useProductsQuery } from 'src/sdk/product/useProductsQuery'
import type { ProductsQueryQueryVariables } from '@generated/graphql'
import Carousel from '@acctglobal/carousel-universal-test'

import ProductCard from '../../product/ProductCard'
import Section from '../Section'

interface ProductShelfProps extends Partial<ProductsQueryQueryVariables> {
  title: string | JSX.Element
  withDivisor?: boolean
}

function ClkBtn() {
  console.info('click')
}

function ProductBtnBuyInPage() {
  return <button onClick={ClkBtn}>Click me</button>
}

function ProductShelf({
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
      <div data-fs-product-shelf>
        <ProductShelfSkeleton loading={products === undefined}>
          <div data-fs-product-shelf-items className="layout__content">
            <Carousel qtyItems={5} arrow={{ isVisible: true }}>
              {products?.edges.map((product, idx) => (
                <ProductCard
                  key={idx}
                  product={product.node}
                  index={idx + 1}
                  ButtonBuy={ProductBtnBuyInPage()}
                />
              ))}
            </Carousel>
          </div>
        </ProductShelfSkeleton>
      </div>
    </Section>
  )
}

export default ProductShelf
