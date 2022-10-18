import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'
import type { Filters } from 'src/components/search/PLPFilters/Filters'

import { formatQueryFilters } from '../utils/formatQueryFilters'

interface SearchRequest {
  term: string | null
  sort?: string
  skip?: number
  itemsPerPage?: number
  filteredFacets?: Filters[]
}

async function getSearch(
  req: GatsbyFunctionRequest<SearchRequest>,
  res: GatsbyFunctionResponse
) {
  if (req.method !== `POST`) {
    res.status(405)
    res.json({})

    return
  }

  try {
    const {
      term,
      sort = 'Rank/Score desc',
      skip = 0,
      itemsPerPage,
      filteredFacets,
    } = req.body

    const expand =
      'SKU, Department, Category, Price, Checkout, Especificacao, TradePolicy, Stock, Rank, Especificacao/CargaHoraria'

    const select =
      'ID, Name, ProductImageURL, Price/BasePrice, Price/ListPrice, Price/CommisionedPrice, Price/isSale, Category/Name, Category/Slug, Especificacao/CargaHoraria/Text, LinkId'

    const encodedTerm = encodeURI(term ?? '')

    const defaultFilters = `IsActive eq true and IsVisible eq true and (contains(Name, '${encodedTerm}') or contains(Department/Name, '${encodedTerm}') or contains(Category/Name, '${encodedTerm}') or contains(KeyWords, '${encodedTerm}') or contains(Brand/Name, '${encodedTerm}') or contains(Description, '${encodedTerm}') or contains(DescriptionShort, '${encodedTerm}') or contains(Especificacao/Conteudo, '${encodedTerm}') or contains(Especificacao/Objetivos, '${encodedTerm}'))`

    const formatedFilters = formatQueryFilters(filteredFacets)

    const categoryFilter = formatedFilters?.categoryFetchFilters
      ? ` and (${formatedFilters?.categoryFetchFilters})`
      : ''

    const workloadFilter = formatedFilters?.cargaHorariaFetchFilters
      ? ` and (${formatedFilters?.cargaHorariaFetchFilters})`
      : ''

    const priceFilter = formatedFilters?.priceRangeFilter
      ? ` and (${formatedFilters?.priceRangeFilter})`
      : 'and Price/BasePrice gt 0'

    const allFilters = `${defaultFilters}${categoryFilter}${workloadFilter}${priceFilter}`

    const data = await axios.get(
      `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=${expand}&$filter=${allFilters}&$top=${itemsPerPage}&$skip=${skip}&$select=${select}&$orderby=${sort}&$count=true`
    )

    res.json(data.data ?? {})
  } catch (error) {
    res.status(error.response.status)
    res.json({})
  }
}

export default getSearch
