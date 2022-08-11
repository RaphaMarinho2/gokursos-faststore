// import type { SearchSuggestionsProps } from 'src/components/search/SearchSuggestions'
import useSuggestions from 'src/sdk/search/useSuggestions'

import type { SuggestionsProps } from '../Suggestions'
import Suggestions from '../Suggestions'

export type SearchDropdownProps = Omit<SuggestionsProps, 'products'>

function SearchDropdown({
  term = '',
  style,
  ...otherProps
}: SearchDropdownProps) {
  const { products, isLoading } = useSuggestions(term)

  if (!term) {
    return <></>
  }

  if (isLoading) {
    return <p data-fs-search-input-loading-text>Loading...</p>
  }

  if (products.length === 0) {
    return <></>
  }

  return <Suggestions term={term} products={products} {...otherProps} />
}

export default SearchDropdown
