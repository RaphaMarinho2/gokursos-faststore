export interface SearchParams {
  search_term: string
}

export interface SearchEvent {
  name: 'search'
  params: SearchParams
}
