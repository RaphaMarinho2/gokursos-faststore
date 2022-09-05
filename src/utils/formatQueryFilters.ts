import type { Filters } from 'src/components/search/PLPFilters/Filters'

export const formatQueryFilters = (filteredFacets?: Filters[]) => {
  if (!filteredFacets) return

  const [categoryFacets] = filteredFacets?.filter((facet) => {
    return facet.filterlabel === 'Categorias'
  })

  const [cargaHorariaFacets] = filteredFacets?.filter((facet) => {
    return facet.filterlabel === 'Carga horária'
  })

  const [priceRangeFacet] = filteredFacets?.filter((facet) => {
    return facet.filterlabel === 'Faixa de preço'
  })

  const categoryFetchFilters = categoryFacets.facets
    .map(
      (category, idx, arr) =>
        `Category/Slug eq '${category.value}'${
          idx + 1 !== arr.length ? ' or ' : ''
        }`
    )
    .join('')

  const cargaHorariaFetchFilters = cargaHorariaFacets.facets
    .map(
      (cargaHoraria, idx, arr) =>
        `Especificacao/CargaHoraria/Text eq '${cargaHoraria.value}'${
          idx + 1 !== arr.length ? ' or ' : ''
        }`
    )
    .join('')

  const priceRangeFilter = `Price/BasePrice gt ${priceRangeFacet.facets[0].others?.actualMin} and Price/BasePrice lt ${priceRangeFacet.facets[0].others?.actualMax}`

  return {
    categoryFetchFilters,
    cargaHorariaFetchFilters,
    priceRangeFilter,
  }
}
