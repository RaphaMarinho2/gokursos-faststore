import { useContext } from 'react'

import { SearchContext } from './SearchContext'

function useSearch() {
  const context = useContext(SearchContext)

  if (context === undefined) {
    throw new Error('useSearch must be used within the SearchProvider')
  }

  return context
}

export default useSearch
