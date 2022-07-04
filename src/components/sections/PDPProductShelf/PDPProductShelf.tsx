import ProductShelf from 'src/components/product/ProductShelf'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import { ITEMS_PER_SECTION } from 'src/constants'
import './pdp-product-shelf.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import departments from 'src/mocks/departments.json'

import Section from '../Section'

interface Props {
  pretitle?: string
  title: string
  departmentName?: string
}

const PDPProductShelf = ({ title, pretitle, departmentName }: Props) => {
  const { isMobile, isTablet } = useWindowDimensions()

  const shelfItemQuantity = isMobile ? 2 : isTablet ? 4 : 5

  const [products, setProducts] = useState<any>()

  useEffect(() => {
    const productDepartment = departments.value.filter(
      (department) => department.Name === departmentName
    )

    const departmentId =
      productDepartment !== []
        ? JSON.stringify(productDepartment[0]?._id)
        : null

    axios
      .get('/api/getTopSellers', {
        params: {
          departmentId,
        },
      })
      .then(({ data: { value } }) => setProducts(value))
  }, [departmentName])

  return (
    <Section className="layout__content pdp-shelf-container">
      <ProductShelf
        products={products}
        cardsQuantity={shelfItemQuantity}
        first={ITEMS_PER_SECTION}
        title={title}
        pretitle={pretitle}
        withDivisor
      />
    </Section>
  )
}

export default PDPProductShelf
