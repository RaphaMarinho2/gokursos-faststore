import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import ProductShelfSkeleton from 'src/components/skeletons/ProductShelfSkeleton/ProductShelfSkeleton'
import Carousel from 'src/components/common/Carousel'

import ProductCard from '../ProductCard'

interface ProductShelfProps {
  title?: string | JSX.Element
  cardsQuantity: number
  withDivisor?: boolean
  pretitle?: string
  products: any
  isLoading?: boolean
}

function ProductShelf({
  cardsQuantity,
  title,
  pretitle,
  withDivisor = false,
  products,
  isLoading,
}: ProductShelfProps) {
  const { isTablet } = useWindowDimensions()

  if (products?.length === 0) {
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

  return (
    <div
      className={`product-shelf-container layout__section ${
        withDivisor ? 'section__divisor' : ''
      }`}
    >
      {pretitle && <h3 className="product-shelf-pretitle">{pretitle}</h3>}
      <h2 className="product-shelf-title">{title}</h2>
      <ProductShelfSkeleton
        cardsQuantity={cardsQuantity!}
        loading={isLoading ?? false}
      >
        <Carousel
          arrow={{
            isVisible: !isLoading,
            iconColor: '#004E98',
            style: {
              ...sizeArrowCarousel,
              background: '#FFFFFF',
              boxShadow: '2px 1px 15px rgba(0, 0, 0, 0.15)',
            },
          }}
          qtyItems={cardsQuantity}
        >
          {products?.map((product: any, idx: number) => (
            <div key={idx} className="product-shelf__content">
              <ProductCard product={product} index={idx + 1} />
            </div>
          ))}
        </Carousel>
      </ProductShelfSkeleton>
    </div>
  )
}

export default ProductShelf
