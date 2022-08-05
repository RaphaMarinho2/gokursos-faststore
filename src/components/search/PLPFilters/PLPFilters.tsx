import { useEffect, useState } from 'react'
import { Checkbox, Label } from '@faststore/ui'

import './plp-filters.scss'
import fetchFilters from './fetchFilters'

interface PLPFiltersProps {
  slug: string
}

export interface Filters {
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

function PLPFilters({ slug }: PLPFiltersProps) {
  const [allFilters, setAllFilters] = useState<Filters[]>([])

  // const selectedFilters = allFilters.map((filter) =>
  //   filter.facets.filter((facet) => facet.selected === true)
  // )

  function handleChangeFacet({
    filterLabel,
    facetValue,
  }: {
    filterLabel: string
    facetValue: string
  }) {
    const [filterFind] = allFilters.filter(
      (filter) => filter.filterlabel === filterLabel
    )

    const newFacet = filterFind.facets.map((facet) =>
      facet.value === facetValue ? { ...facet, selected: true } : facet
    )

    const newFilter = allFilters.map((filter) =>
      filter.filterlabel === filterLabel
        ? { ...filter, facets: newFacet }
        : filter
    )

    setAllFilters(newFilter)
  }

  useEffect(() => {
    fetchFilters({ setAllFilters, slug })
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
                    checked={facet.selected}
                    onChange={() =>
                      handleChangeFacet({
                        filterLabel: filter.filterlabel,
                        facetValue: facet.value ?? '',
                      })
                    }
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
