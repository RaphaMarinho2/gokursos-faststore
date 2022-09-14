import { useEffect, useState } from 'react'
import axios from 'axios'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import ProductShelf from 'src/components/product/ProductShelf'

import './plans-shelf.scss'

const plansMock = [
  {
    name: 'Plano Básico',
    value: 'basico',
  },
  {
    name: 'Plano Especial',
    value: 'especial',
  },
  {
    name: 'Plano Comunicação',
    value: 'comunicacao',
  },
  {
    name: 'Plano Tecnologia',
    value: 'tecnologia',
  },
  {
    name: 'Plano Saúde',
    value: 'saude',
  },
  {
    name: 'Plano Negócios',
    value: 'negocios',
  },
]

function PlansShelf() {
  const [products, setProducts] = useState<any>()

  useEffect(() => {
    axios.get('/api/getDuce').then(({ data: { value } }) => setProducts(value))
  }, [])

  const { isMobile, isTablet } = useWindowDimensions()

  const shelfItemQuantity = isMobile ? 2 : isTablet ? 4 : 5

  const ShelfTitle = () => {
    return (
      <h2 className="plans-shelf__title">
        Cursos que você encontra no{' '}
        <select name="plans" id="plans">
          {plansMock.map((plan) => (
            <option key={plan.value} value={plan.value}>
              {plan.name}
            </option>
          ))}
        </select>
      </h2>
    )
  }

  return (
    <div className="plans-shelf">
      {products && (
        <ProductShelf
          cardsQuantity={shelfItemQuantity}
          title={<ShelfTitle />}
          products={products}
        />
      )}
    </div>
  )
}

export default PlansShelf
