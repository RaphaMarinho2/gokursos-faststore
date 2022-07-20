import { useEffect, useState } from 'react'
import axios from 'axios'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import ProductShelf from 'src/components/product/ProductShelf'

import './plans-shelf.scss'

function PlansShelf() {
  const [products, setProducts] = useState<any>()

  useEffect(() => {
    axios.get('/api/getDuce').then(({ data: { value } }) => setProducts(value))
  }, [])

  const { isMobile, isTablet } = useWindowDimensions()

  const shelfItemQuantity = isMobile ? 2 : isTablet ? 4 : 5

  return (
    <div className="plans-shelf">
      {products !== undefined && (
        <ProductShelf
          cardsQuantity={shelfItemQuantity}
          title="Cursos que você encontra no plano básico"
          products={products}
        />
      )}
    </div>
  )
}

export default PlansShelf
