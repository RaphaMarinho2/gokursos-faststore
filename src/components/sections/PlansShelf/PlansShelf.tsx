import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductShelf from 'src/components/product/ProductShelf'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import MenuItem from '@mui/material/MenuItem'
import type { SelectChangeEvent } from '@mui/material/Select'
import Select from '@mui/material/Select'
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
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    axios
      .get('/api/getDuce')
      .then(({ data: { value } }) => setProducts(value))
      .finally(() => setIsLoading(false))
  }, [])

  const { isMobile, isTablet } = useWindowDimensions()

  const shelfItemQuantity = isMobile ? 2 : isTablet ? 4 : 5

  const [plans, setPlans] = useState(plansMock[0].name)

  const handleChange = (event: SelectChangeEvent) => {
    setPlans(event.target.value as string)
  }

  const ShelfTitle = () => {
    return (
      <h2 className="plans-shelf__title">
        Cursos que você encontra no{' '}
        <Select
          labelId="select-label"
          id="simple-select"
          onChange={handleChange}
          value={plans}
        >
          {plansMock.map((plan, index) => (
            <MenuItem key={index} value={plan.name}>
              {plan.name}
            </MenuItem>
          ))}
        </Select>
      </h2>
    )
  }

  return (
    <div className="plans-shelf">
      <ProductShelf
        cardsQuantity={shelfItemQuantity}
        title={<ShelfTitle />}
        products={products}
        isLoading={isLoading}
      />
    </div>
  )
}

export default PlansShelf
