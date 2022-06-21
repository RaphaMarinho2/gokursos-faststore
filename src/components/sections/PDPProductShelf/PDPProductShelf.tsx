import type { ProductDetailsFragment_ProductFragment } from '@generated/graphql'
import ProductShelf from 'src/components/product/ProductShelf'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import { ITEMS_PER_SECTION } from 'src/constants'

import Section from '../Section'

import './pdp-product-shelf.scss'

interface Props {
  product: ProductDetailsFragment_ProductFragment
  pretitle: string | null
  title: string
}

const PDPProductShelf = ({ product, title, pretitle }: Props) => {
  const { isMobile, isTablet } = useWindowDimensions()

  const shelfItemQuantity = isMobile ? 2 : isTablet ? 4 : 5

  return (
    <Section className="layout__content pdp-shelf-container">
      <ProductShelf
        cardsQuantity={shelfItemQuantity}
        first={ITEMS_PER_SECTION}
        term={product.brand.name}
        title={title}
        pretitle={pretitle}
        withDivisor
      />
    </Section>
  )
}

export default PDPProductShelf
