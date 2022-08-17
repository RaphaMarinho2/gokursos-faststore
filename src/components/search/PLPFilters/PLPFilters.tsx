import { useEffect, useState } from 'react'
import { Checkbox, Label } from '@faststore/ui'
import './plp-filters.scss'
import useSearch from 'src/contexts/SearchContext/useSearch'
import FilterSkeleton from 'src/components/skeletons/FilterSkeleton'
import MultiRangeSlider from 'src/components/sections/MulRangeSlider'
import Accordion, { AccordionItem } from 'src/components/ui/Accordion'
import AccordionUp from 'src/components/icons/AccordionUp'
import AccordionDown from 'src/components/icons/AccordionDown'

import fetchFilters from './fetchFilters'

interface PLPFiltersProps {
  slug: string
}

export interface Filters {
  filterlabel: 'Categorias' | 'Carga horária' | 'Marcas' | 'Faixa de preço'
  type: 'CHECKBOX' | 'RANGE'
  facets: Array<{
    selected?: boolean
    value: string
    label: string
    others?: {
      actualMin: number
      actualMax: number
      min: number
      max: number
    }
  }>
}

function PLPFilters({ slug }: PLPFiltersProps) {
  const [allFilters, setAllFilters] = useState<Filters[]>([])
  const { setFilteredFacets } = useSearch()

  // const [indices, setIndices] = useState([0])
  const [indicesExpanded, setIndicesExpanded] = useState<Set<number>>(
    new Set([])
  )

  const onAccordionChange = (index: number) => {
    if (indicesExpanded.has(index)) {
      indicesExpanded.delete(index)
      setIndicesExpanded(new Set(indicesExpanded))
    } else {
      setIndicesExpanded(new Set(indicesExpanded.add(index)))
    }
  }

  const selectedFilters = allFilters.map((filter) => {
    return {
      filterlabel: filter.filterlabel,
      facets:
        filter.type === 'CHECKBOX'
          ? filter.facets.filter((facet) => facet.selected === true)
          : [
              {
                value: filter?.facets[0]?.value,
                label: filter?.facets[0]?.label,
                others: {
                  min: filter?.facets[0].others?.min,
                  max: filter?.facets[0].others?.max,
                  actualMin: filter?.facets[0].others?.actualMin,
                  actualMax: filter?.facets[0].others?.actualMax,
                },
              },
            ],
    }
  })

  function handleChangeFacet({
    filterLabel,
    facetValue,
    min,
    max,
    actualMin,
    actualMax,
  }: {
    filterLabel: string
    facetValue: string
    min?: number
    max?: number
    actualMin?: number
    actualMax?: number
  }) {
    const filterFind = allFilters.find(
      (filter) => filter.filterlabel === filterLabel
    )

    if (!filterFind) return

    const newFacet = filterFind.facets.map((facet) => {
      if (facet.value === 'priceRange') {
        return {
          ...facet,
          others: {
            min: min ?? 0,
            max: max ?? 0,
            actualMin: actualMin ?? 0,
            actualMax: actualMax ?? 0,
          },
        }
      }

      return facet.value === facetValue
        ? { ...facet, selected: !facet.selected }
        : facet
    })

    const newFilter = allFilters.map((filter) =>
      filter.filterlabel === filterLabel
        ? { ...filter, facets: newFacet }
        : filter
    )

    setAllFilters(newFilter)
  }

  useEffect(() => {
    setFilteredFacets(selectedFilters as Filters[])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allFilters])

  useEffect(() => {
    fetchFilters({ setAllFilters, slug })
  }, [slug])

  return (
    <div className="filter">
      <FilterSkeleton loading={allFilters?.length === 0}>
        <span className="filter__title">Filtros</span>
        <Accordion
          expandedIndices={indicesExpanded}
          onChange={onAccordionChange}
        >
          {allFilters.map((filter, indexFilter) => (
            <AccordionItem
              key={`${filter.filterlabel}-${indexFilter}`}
              className="facet"
              buttonLabel={filter.filterlabel}
              isExpanded={indicesExpanded.has(indexFilter)}
              forceSvg={{
                svg1: <AccordionUp />,
                svg2: <AccordionDown />,
              }}
            >
              {filter.type === 'CHECKBOX' ? (
                <>
                  {filter.facets.map((facet, indexFacet) => (
                    <div key={indexFacet} className="filter__item">
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
                      <Label
                        htmlFor={facet.value}
                        className="text__title-mini-alt"
                      >
                        {facet.label}{' '}
                        {filter.filterlabel === 'Carga horária' &&
                          `hora${parseInt(facet.label, 10) > 1 ? 's' : ''}`}
                      </Label>
                    </div>
                  ))}
                </>
              ) : (
                <div className="facet__facet">
                  <MultiRangeSlider
                    min={filter.facets[0].others?.min ?? 0}
                    max={filter.facets[0].others?.max ?? 0}
                    onChange={({ min, max }) => {
                      handleChangeFacet({
                        filterLabel: 'Faixa de preço',
                        facetValue: filter.facets[0].value ?? '',
                        min: filter.facets[0].others?.min,
                        max: filter.facets[0].others?.max,
                        actualMin: min,
                        actualMax: max,
                      })
                    }}
                  />
                </div>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </FilterSkeleton>
    </div>
  )
}

export default PLPFilters
