import axios from 'axios'

import type { Filters } from './Filters'

type CategoryFilterType = Array<{ Name: string; Slug: string }>
type CargasHorariasFilterType = Array<{ Text: string }>
type PricesFilterType = { minPrice: number; maxPrice: number }

interface Props {
  setAllFilters: React.Dispatch<React.SetStateAction<Filters[]>>
  setFilterLoading: (filterLoading: boolean) => void
  slug?: string
  term?: string | null
}

async function fetchFilters({
  setAllFilters,
  setFilterLoading,
  slug,
  term,
}: Props) {
  const allFilters = []

  setFilterLoading(true)

  const minMaxPriceFetch = await axios
    .post<PricesFilterType>('/api/getMinMaxPrices', {
      departmentSlug: slug,
      term,
    })
    .then(({ data }) => {
      return data
    })

  if (!minMaxPriceFetch || !Object.keys(minMaxPriceFetch).length) {
    setAllFilters([])
    setFilterLoading(false)

    return
  }

  const categoriesFetch = await axios
    .post<CategoryFilterType>('/api/getCategories', {
      departmentSlug: slug,
    })
    .then(({ data }) => {
      return data
    })

  if (categoriesFetch?.length) {
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

    allFilters.push(categoryFilter)
  }

  const cargasHorariasFetch = await axios
    .post<CargasHorariasFilterType>('/api/getCargasHorarias')
    .then(({ data }) => {
      return data
    })

  if (cargasHorariasFetch?.length) {
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

    allFilters.push(cargaHorariaFilter)
  }

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

  allFilters.push(priceFilter)

  setAllFilters(allFilters)
  setFilterLoading(false)
}

export default fetchFilters
