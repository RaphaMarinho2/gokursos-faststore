import type { Facet } from '@faststore/sdk/dist/search/useSearchState'
import axios from 'axios'

import type { Filters } from './Filters'

type CategoryFilterType = Array<{ Name: string; Slug: string }>
type CargasHorariasFilterType = Array<{ Text: string }>
type PricesFilterType = { minPrice: number; maxPrice: number }

interface Props {
  slug?: string
  term?: string | null
  selectedFacets?: Facet[]
}

async function fetchFilters({ slug, term, selectedFacets }: Props) {
  const allFilters = []

  const minMaxPriceFetch = await axios
    .post<PricesFilterType>('/api/getMinMaxPrices', {
      departmentSlug: slug,
      term,
    })
    .then(({ data }) => {
      return data
    })

  if (!minMaxPriceFetch || !Object.keys(minMaxPriceFetch).length) {
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
    const paramCategoryFilter = selectedFacets
      ?.filter((facet) => facet.key === 'category')
      .map((facet) => facet.value)

    const categoryFilter: Filters = {
      filterlabel: 'Categorias',
      type: 'CHECKBOX',
      facets: categoriesFetch.map((category) => {
        return {
          selected: paramCategoryFilter?.includes(category.Slug),
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

  return allFilters
}

export default fetchFilters
