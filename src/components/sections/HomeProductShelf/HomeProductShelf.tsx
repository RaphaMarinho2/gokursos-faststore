import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductShelf from 'src/components/product/ProductShelf'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

import Section from '../Section'

import './home-product-shelf.scss'

interface ShelfProps {
  title: string
  pretitle?: string
}

const HomeProductShelf = ({ title, pretitle }: ShelfProps) => {
  const [products, setProducts] = useState<any>()

  useEffect(() => {
    axios.get('/api/getDuce').then(({ data: { value } }) => setProducts(value))
  }, [])

  const { isMobile, isTablet } = useWindowDimensions()

  const shelfItemQuantity = isMobile ? 2 : isTablet ? 4 : 5

  return (
    <Section className="layout__content home-shelf-container">
      <ProductShelf
        cardsQuantity={shelfItemQuantity}
        title={title}
        pretitle={pretitle}
        withDivisor
        products={products}
      />
    </Section>
  )
}

export default HomeProductShelf
