import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'
import type { Filters } from 'src/components/search/PLPFilters/Filters'

interface RequestType {
  slug: string
  filteredFacets?: Filters[]
}

export default async function getProductDetails(
  req: GatsbyFunctionRequest<RequestType>,
  res: GatsbyFunctionResponse
) {
  if (req.method !== 'POST') {
    res.status(405)
    res.send('Request method must be POST')

    return
  }

  const { slug, filteredFacets } = req.body

  const categorySlug = slug.includes('/') && slug.split('/')[1]
  const departmentSlug = !slug.includes('/') && slug

  const filterParam = !categorySlug
    ? `Department/Slug eq '${departmentSlug}'`
    : `Category/Slug eq '${categorySlug}'`

  const getQueryFilters = () => {
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

  const filters = getQueryFilters()

  const allFilters = `${filterParam} ${
    filters?.categoryFetchFilters
      ? `and (${filters?.categoryFetchFilters})`
      : ''
  } ${
    filters?.cargaHorariaFetchFilters
      ? `and (${filters?.cargaHorariaFetchFilters})`
      : ''
  } ${
    filters?.priceRangeFilter
      ? `and (${filters?.priceRangeFilter})`
      : 'and Price/BasePrice gt 0'
  }
  `

  const URL = `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=SKU, Department, Category, Price, Checkout, Especificacao, CommercialCondition, TradePolicy, Stock, Rank, Brand, Especificacao/CargaHoraria&$orderby=Rank/Score desc&$skip=0&$filter=${allFilters} &$top=20&$count=true&$select=ID, Name, ProductImageURL, Price/BasePrice, Price/ListPrice, Price/CommisionedPrice, Price/isSale, Category/Name, Category/Slug, Especificacao/CargaHoraria/Text, LinkId`

  try {
    const { data } = await axios.get(URL)

    res.json(data)
  } catch (error) {
    throw new Error(error)
  }
}
