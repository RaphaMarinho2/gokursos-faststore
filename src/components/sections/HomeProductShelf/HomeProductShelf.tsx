import ProductShelf from 'src/components/product/ProductShelf'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import { ITEMS_PER_SECTION } from 'src/constants'

import Section from '../Section'

import './home-product-shelf.scss'

const HomeProductShelf = () => {
  const { isMobile } = useWindowDimensions()

  const shelfItemQuantity = isMobile ? 2 : 5

  return (
    <Section className="layout__content home-shelf-container">
      <ProductShelf
        cardsQuantity={shelfItemQuantity}
        first={ITEMS_PER_SECTION}
        title="Cursos relacionados"
        withDivisor
      />
    </Section>
  )
}

export default HomeProductShelf
