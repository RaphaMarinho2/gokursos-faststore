import type { SearchState } from '@faststore/sdk'
import { parseSearchState } from '@faststore/sdk'
import { useEffect, useState } from 'react'

const useSearchParams = ({ href }: Location) => {
  const [params, setParams] = useState<SearchState | null>(null)

  useEffect(() => {
    const url = new URL(href)

    setParams(parseSearchState(url))
  }, [href])

  return params
}

export default useSearchParams
