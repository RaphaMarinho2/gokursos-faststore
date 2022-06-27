import productsQuery from 'src/mocks/productsQuery.json'
import type { ProductsQueryQueryVariables } from '@generated/graphql'
import Carousel from '@acctglobal/carousel-universal'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

import ProductCard from '../ProductCard'

interface ProductShelfProps extends Partial<ProductsQueryQueryVariables> {
  title: string | JSX.Element
  cardsQuantity?: number
  withDivisor?: boolean
  pretitle?: string
}

function ClkBtn() {
  console.info('click')
}

function ProductBtnBuyInPage() {
  return <button onClick={ClkBtn}>Quero começar</button>
}

function ProductShelf({
  cardsQuantity,
  title,
  pretitle,
  withDivisor = false,
}: ProductShelfProps) {
  const { isTablet } = useWindowDimensions()
  const { products } = productsQuery.data.search

  if (products?.edges.length === 0) {
    return null
  }

  const styleArrowMobile = {
    height: 30,
    margin: 0,
    padding: 0,
    width: 28,
  }

  const styleArrowDesktop = {
    height: 34,
    margin: 0,
    padding: 0,
    width: 32,
  }

  const sizeArrowCarousel = isTablet ? styleArrowMobile : styleArrowDesktop

  console.info('Shelf')

  return (
    <div
      className={`product-shelf-container layout__section ${
        withDivisor ? 'section__divisor' : ''
      }`}
    >
      {pretitle && <h3 className="product-shelf-pretitle">{pretitle}</h3>}
      <h2 className="product-shelf-title">{title}</h2>
      <Carousel
        arrow={{
          isVisible: true,
          iconColor: '#004E98',
          style: sizeArrowCarousel,
        }}
        qtyItems={cardsQuantity}
      >
        {products?.edges.map((product, idx) => (
          <div key={idx} className="product-shelf__content">
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
