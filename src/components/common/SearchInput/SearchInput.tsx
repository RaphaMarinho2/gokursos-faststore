import { SearchInput as UISearchInput } from '@faststore/ui'
import { navigate } from 'gatsby'
import type { ChangeEvent } from 'react'
import { forwardRef, Suspense, useState, useRef } from 'react'
import debounce from 'lodash.debounce'
import type {
  SearchInputProps as UISearchInputProps,
  SearchInputRef,
} from '@faststore/ui'
import SearchIcon from 'src/components/icons/SearchIcon'
import SearchDropdown from 'src/components/search/SearchDropdown'
import useOnClickOutside from 'src/hooks/useOnClickOutside'
import { formatSearchState } from 'src/sdk/search/formatSearchState'
import { initSearchState } from 'src/sdk/search/initSearchState'
import { sendAnalyticsEvent } from 'src/sdk/analytics/sendAnalyticsEvent'
import type { SearchEvent } from 'src/sdk/analytics/types'

declare type SearchInputProps = {
  onSearchClick?: () => void
  buttonTestId?: string
} & Omit<UISearchInputProps, 'onSubmit'>

const doSearch = async (term: string) => {
  const { pathname, search } = formatSearchState(
    initSearchState({
      term,
      base: '/s',
    })
  )

  sendAnalyticsEvent<SearchEvent>({
    name: 'search',
    params: { search_term: term },
  })

  navigate(`${pathname}${search}`)
}

const SearchInput = forwardRef<SearchInputRef, SearchInputProps>(
  function SearchInput(
    { onSearchClick, buttonTestId = 'store-search-button', ...props },
    ref
  ) {
    const [searchDropdownOpen, setSearchDropdownOpen] = useState<boolean>(false)
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [deferredTerm, setDeferredTerm] = useState<string>('')
    const searchRef = useRef<HTMLDivElement>(null)
    const handleSearch = (term: string) => {
      doSearch(term)
      setSearchDropdownOpen(false)
    }

    useOnClickOutside(searchRef, () => setSearchDropdownOpen(false))

    const handleChangeDeferredTerm = useRef(
      debounce((value: string) => setDeferredTerm(value), 500)
    )

    const handleChangeTerm = (event: ChangeEvent<{ value: string }>) => {
      setSearchQuery(event.target.value)
      handleChangeDeferredTerm.current(event.target.value)
    }

    return (
      <div className="search-input-container" ref={searchRef}>
        <UISearchInput
          ref={ref}
          icon={
            <SearchIcon
              className="search-icon-desktop"
              name="searchIcon"
              onClick={onSearchClick}
              data-testid={buttonTestId}
            />
          }
          placeholder="O que voc?? quer aprender?"
          onSubmit={handleSearch}
          onFocus={() => setSearchDropdownOpen(true)}
          onChange={handleChangeTerm}
          value={searchQuery}
          {...props}
        />
        {searchDropdownOpen && (
          <Suspense fallback={null}>
            <div data-store-search-input-dropdown-wrapper>
              <SearchDropdown term={deferredTerm} />
            </div>
          </Suspense>
        )}
      </div>
    )
  }
)

export default SearchInput
