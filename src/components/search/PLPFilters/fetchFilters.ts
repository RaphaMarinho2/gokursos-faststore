import axios from 'axios'

import type { Filters } from './Filters'

type CategoryFilterType = Array<{ Name: string; Slug: string }>
type CargasHorariasFilterType = Array<{ Text: string }>
type PricesFilterType = { minPrice: number; maxPrice: number }

interface Props {
  setAllFilters: React.Dispatch<React.SetStateAction<Filters[]>>
  slug: string
}

async function fetchFilters({ setAllFilters, slug }: Props) {
  const categoriesFetch = await axios
    .post<CategoryFilterType>('/api/getCategories', {
      departmentSlug: slug,
    })
    .then(({ data }) => {
      return data
    })

  const categoryFilter: Filters = {
    filterlabel: 'Categorias',
    type: 'CHECKBOX',
    facets: categoriesFetch.map((category) => {
      return {
        selected: false,
        value: category.Slug,
        label: category.Name,
      }
    }),
  }

  const cargasHorariasFetch = await axios
    .post<CargasHorariasFilterType>('/api/getCargasHorarias')
    .then(({ data }) => {
      return data
    })

  const cargaHorariaFilter: Filters = {
    filterlabel: 'Carga horária',
    type: 'CHECKBOX',
    facets: cargasHorariasFetch.map((cargaHoraria) => {
      return {
        selected: false,
        value: cargaHoraria.Text,
        label: cargaHoraria.Text,
      }
    }),
  }

  const minMaxPriceFetch = await axios
    .post<PricesFilterType>('/api/getMinMaxPrices', {
      departmentSlug: slug,
    })
    .then(({ data }) => {
      return data
    })

  const priceFilter: Filters = {
    filterlabel: 'Faixa de preço',
    type: 'RANGE',
    facets: [
      {
        label: 'Faixa de preço',
        value: 'priceRange',
        others: {
          actualMin: minMaxPriceFetch.minPrice,
          actualMax: minMaxPriceFetch.maxPrice,
          min: minMaxPriceFetch.minPrice,
          max: minMaxPriceFetch.maxPrice,
        },
      },
    ],
  }

  setAllFilters([categoryFilter, cargaHorariaFilter, priceFilter])
}

export default fetchFilters
