import ProductShelf from 'src/components/product/ProductShelf'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import './pdp-product-shelf.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { slugify } from 'src/sdk/utils/slugify'

import Section from '../Section'

interface Props {
  pretitle?: string
  title: string
  productDepartment?: string
}

const PDPProductShelf = ({ title, pretitle, productDepartment }: Props) => {
  const { isMobile, isTablet } = useWindowDimensions()

  const shelfItemQuantity = isMobile ? 2 : isTablet ? 4 : 5

  const [products, setProducts] = useState<any>()

  useEffect(() => {
    const departmentName =
      productDepartment && productDepartment !== undefined
        ? slugify(productDepartment).toLowerCase()
        : null

    axios
      .get('/api/getTopSellers', {
        params: {
          departmentName,
        },
      })
      .then(({ data: { value } }) => setProducts(value))
  }, [productDepartment])

  return (
    <Section className="layout__content pdp-shelf-container">
      {products && (
        <ProductShelf
          products={products}
          cardsQuantity={shelfItemQuantity}
          title={title}
          pretitle={pretitle}
          withDivisor
        />
      )}
    </Section>
  )
}

export default PDPProductShelf
