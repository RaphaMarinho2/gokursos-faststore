import type { Filter_FacetsFragment } from '@generated/graphql'
import { useMemo, useRef } from 'react'

export const useDelayedFacets = (data?: any) => {
  const facets = useRef<Filter_FacetsFragment[]>([])

  return useMemo(() => {
    if (data) {
      facets.current = data.search.facets
    }

    return facets.current
  }, [data, facets])
}
