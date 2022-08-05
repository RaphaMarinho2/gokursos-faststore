import axios from 'axios'
import { useEffect, useState } from 'react'
import { Checkbox, Label } from '@faststore/ui'

import './plp-filters.scss'

interface PLPFiltersProps {
  slug: string
}

// interface Filter {
//   type: 'category' | 'price' | 'brand' | 'cargaHoraria'
//   selected: boolean
//   label: string
//   value: string
// }

interface Filters {
  filterlabel: 'Categorias' | 'Carga horária' | 'Marcas' | 'Faixa de preço'
  type: 'CHECKBOX' | 'RANGE'
  facets: Array<{
    selected: boolean
    value?: string
    label?: string
    others?: {
      [x: string]: string | number
    }
  }>
}

type CategoryFilterType = Array<{ Name: string; Slug: string }>
type CargasHorariasFilterType = Array<{ Text: string }>
type PricesFilterType = { minPrice: number; maxPrice: number }

function PLPFilters({ slug }: PLPFiltersProps) {
  const [allFilters, setAllFilters] = useState<Filters[]>([])

  // const selectedFilters = allFilters.filter(
  //   (filter) => filter.selected === true
  // )

  // const [categories] = [
  //   ...allFilters.filter((filter) => filter.filterlabel === 'Categorias'),
  // ]

  // const [cargasHorarias] = [
  //   ...allFilters.filter((filter) => filter.filterlabel === 'Carga horária'),
  // ]

  // const [minMaxPrice] = [
  //   ...allFilters.filter((filter) => filter.filterlabel === 'Faixa de preço'),
  // ]

  useEffect(() => {
    const handleFilterAttributes = async () => {
      setAllFilters([])

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
            selected: false,
            others: {
              minPrice: minMaxPriceFetch.minPrice,
              maxPrice: minMaxPriceFetch.maxPrice,
            },
          },
        ],
      }

      setAllFilters([categoryFilter, cargaHorariaFilter, priceFilter])
    }

    handleFilterAttributes()
  }, [slug])

  return (
    <div className="filter">
      <span className="filter__title">Filtros</span>
      {allFilters.map((filter, indexfilter) => (
        <div key={indexfilter} className="facet">
          <span className="facet__title">{filter.filterlabel}</span>

          {filter.type === 'CHECKBOX' ? (
            <div className="facet__facet">
              {filter.facets.map((facet, indexFacet) => (
                <div key={indexFacet}>
                  <Checkbox
                    id={facet.value}
                    // checked={item.selected}
                    // onChange={() =>
                    //   onFacetChange({ key, value: item.value })
                    // }
                    data-value={facet.value}
                  />
                  <Label htmlFor={facet.value} className="text__title-mini-alt">
                    {facet.label}
                  </Label>
                </div>
              ))}
            </div>
          ) : (
            <div className="facet__facet">
              {filter.facets.map((facet, indexFacet) => (
                <div key={indexFacet}>
                  <span>{facet?.others?.minPrice}</span>
                  <span>{facet?.others?.maxPrice}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default PLPFilters
