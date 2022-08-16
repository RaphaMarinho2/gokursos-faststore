interface SearchParams {
  term: string | null
  base: string
}

export function initSearchState(searchParams: SearchParams) {
  const { base, term } = searchParams

  return {
    base,
    term,
    page: 0,
    sort: 'asc',
  }
}
