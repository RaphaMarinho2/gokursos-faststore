interface SearchState {
  base: string
  term: string | null
  page: number
  sort: string
}

export function formatSearchState(searchParams: SearchState) {
  const { base, term, sort, page } = searchParams

  return {
    pathname: base,
    search: `?q=${term}&sort=${sort}&page=${page}`,
  }
}
