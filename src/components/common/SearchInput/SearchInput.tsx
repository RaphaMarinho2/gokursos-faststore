import { sendAnalyticsEvent } from '@faststore/sdk'
import { SearchInput as UISearchInput } from '@faststore/ui'
import { navigate } from 'gatsby'
import type { ChangeEvent } from 'react'
import { forwardRef, Suspense, useState, useRef } from 'react'
import debounce from 'lodash.debounce'
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
import { formatSearchState } from 'src/sdk/search/formatSearchState'
import { initSearchState } from 'src/sdk/search/initSearchState'

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
    const { addToSearchHistory } = useSearchHistory()
    const handleSearch = (term: string) => {
      addToSearchHistory(term)
      doSearch(term)
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
