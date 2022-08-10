// import type { SearchSuggestionsProps } from 'src/components/search/SearchSuggestions'
// import useSuggestions from 'src/sdk/search/useSuggestions'

import type { SuggestionsProps } from '../Suggestions'
import Suggestions from '../Suggestions'

export type SearchDropdownProps = SuggestionsProps

function SearchDropdown({
  term = '',
  // history,
  style,
  ...otherProps
}: SearchDropdownProps) {
  // const { terms, products, isLoading } = useSuggestions(term)

  // if (isLoading) {
  //   return <p data-fs-search-input-loading-text>Loading...</p>
  // }

  // if (terms.length === 0 && products.length === 0) {
  //   return null
  // }

  return <Suggestions term={term} {...otherProps} />
}

export default SearchDropdown
