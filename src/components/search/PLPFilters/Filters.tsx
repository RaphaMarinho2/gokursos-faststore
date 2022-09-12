import type { Facet } from '@faststore/sdk/dist/search/useSearchState'
import { useEffect } from 'react'
import { ButtonIcon } from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import SlideOver from 'src/components/ui/SlideOver'
import useSearch from 'src/contexts/SearchContext/useSearch'
import { useModal } from 'src/sdk/ui/modal/Provider'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

import Facets from './Facets'
import fetchFilters from './fetchFilters'
import './plp-filters.scss'

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

interface FilterProps {
  slug?: string
  term?: string | null
  selectedFacets?: Facet[]
  onDismiss: () => void
  isFilterOpen: boolean
}

function Filters({
  slug,
  term,
  onDismiss,
  isFilterOpen,
  selectedFacets,
}: FilterProps) {
  const { setAllFilters, filterLoading, setFilterLoading } = useSearch()

  useEffect(() => {
    const setFilters = async () => {
      setFilterLoading(true)
      const filters = await fetchFilters({
        slug,
        term,
        selectedFacets,
      })

      if (!filters) {
        setFilterLoading(false)

        return
      }

      setAllFilters(filters)
      setFilterLoading(false)
    }

    setFilters()
  }, [selectedFacets, setAllFilters, setFilterLoading, slug, term])

  const { isTablet } = useWindowDimensions()
  const { onModalClose } = useModal()

  return (
    <div>
      {isTablet ? (
        <SlideOver
          isOpen={isFilterOpen}
          onDismiss={onDismiss}
          size="partial"
          direction="rightSide"
          className="filter-modal__content"
        >
          <ButtonIcon
            data-testid="filter-modal-button-close"
            aria-label="Close Filters"
            className="close-button"
            icon={<Icon name="X" width={25} height={25} />}
            onClick={onModalClose}
          />
          <Facets filterLoading={filterLoading} />
        </SlideOver>
      ) : (
        <Facets filterLoading={filterLoading} />
      )}
    </div>
  )
}

export default Filters
