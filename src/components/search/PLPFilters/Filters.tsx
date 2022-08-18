import { useEffect, useState } from 'react'
import SlideOver from 'src/components/ui/SlideOver'
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
  slug: string
  onDismiss: () => void
  isFilterOpen: boolean
}

function Filters({ slug, onDismiss, isFilterOpen }: FilterProps) {
  const [allFilters, setAllFilters] = useState<Filters[]>([])

  useEffect(() => {
    fetchFilters({ setAllFilters, slug })
  }, [slug])

  const { isTablet } = useWindowDimensions()

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
          <Facets allFilters={allFilters} setAllFilters={setAllFilters} />
        </SlideOver>
      ) : (
        <Facets allFilters={allFilters} setAllFilters={setAllFilters} />
      )}
    </div>
  )
}

export default Filters
