import ProductShelf from 'src/components/product/ProductShelf'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import { ITEMS_PER_SECTION } from 'src/constants'

import Section from '../Section'

import './home-product-shelf.scss'

interface ShelfProps {
  title: string
  pretitle: string | null
}

const HomeProductShelf = ({ title, pretitle }: ShelfProps) => {
  const { isMobile, isTablet } = useWindowDimensions()

  const shelfItemQuantity = isMobile ? 2 : isTablet ? 4 : 5

  return (
    <Section className="layout__content home-shelf-container">
      <ProductShelf
        cardsQuantity={shelfItemQuantity}
        first={ITEMS_PER_SECTION}
        title={title}
        pretitle={pretitle}
        withDivisor
      />
    </Section>
  )
}

export default HomeProductShelf
