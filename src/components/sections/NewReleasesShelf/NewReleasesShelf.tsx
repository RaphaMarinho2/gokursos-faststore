import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductShelf from 'src/components/product/ProductShelf'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

import Section from '../Section'

import './new-releases-shelf.scss'

interface ShelfProps {
  title: string
  pretitle?: string
}

const NewReleasesShelf = ({ title, pretitle }: ShelfProps) => {
  const [products, setProducts] = useState<any>()

  useEffect(() => {
    axios
      .get('/api/getNewReleases')
      .then(({ data: { value } }) => setProducts(value))
  }, [])

  const { isMobile, isTablet } = useWindowDimensions()

  const shelfItemQuantity = isMobile ? 2 : isTablet ? 4 : 5

  return (
    <Section className="layout__content new-releases-shelf">
      {products !== undefined && (
        <ProductShelf
          cardsQuantity={shelfItemQuantity}
          title={title}
          pretitle={pretitle}
          withDivisor
          products={products}
        />
      )}
    </Section>
  )
}

export default NewReleasesShelf
