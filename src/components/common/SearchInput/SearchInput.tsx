import {
  formatSearchState,
  initSearchState,
  sendAnalyticsEvent,
} from '@faststore/sdk'
import { SearchInput as UISearchInput } from '@faststore/ui'
import { navigate } from 'gatsby'
import { forwardRef, Suspense, useState, useRef } from 'react'
import useSearchHistory from 'src/sdk/search/useSearchHistory'
import type { SearchEvent } from '@faststore/sdk'
import type {
  SearchInputProps as UISearchInputProps,
  SearchInputRef,
} from '@faststore/ui'
import SearchIcon from 'src/components/icons/SearchIcon'
import Icon from 'src/components/ui/Icon'
import SearchDropdown from 'src/components/search/SearchDropdown'
import useOnClickOutside from 'src/hooks/useOnClickOutside'

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
    const searchRef = useRef<HTMLDivElement>(null)
    const { addToSearchHistory } = useSearchHistory()
    const handleSearch = (term: string) => {
      addToSearchHistory(term)
      doSearch(term)
    }

    useOnClickOutside(searchRef, () => setSearchDropdownOpen(false))

    return (
      <div className="search-input-container" ref={searchRef}>
        <UISearchInput
          ref={ref}
          icon={
            <>
              <SearchIcon
                className="search-icon-desktop"
                name="searchIcon"
                onClick={onSearchClick}
                data-testid={buttonTestId}
              />
              <div className="search-icon-mobile">
                <Icon
                  name="MagnifyingGlass"
                  onClick={onSearchClick}
                  data-testid={buttonTestId}
                />
              </div>
            </>
          }
          placeholder="O que você quer aprender?"
          onSubmit={handleSearch}
          onFocus={() => setSearchDropdownOpen(true)}
          {...props}
        />
        {searchDropdownOpen && (
          <Suspense fallback={null}>
            <div data-store-search-input-dropdown-wrapper>
              <SearchDropdown term="teste" />
            </div>
          </Suspense>
        )}
      </div>
    )
  }
)

export default SearchInput
