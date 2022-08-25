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
  }

  try {
    const {
      term,
      sort = 'Rank/Score desc',
      skip = 0,
      itemsPerPage,
      filteredFacets,
    } = req.body

    const defaultFilters = `IsActive eq true and (contains(Name, '${term}') or contains(Department/Name, '${term}') or contains(Category/Name, '${term}') or contains(KeyWords, '${term}') or contains(Brand/Name, '${term}'))`

    const formatedFilters = formatQueryFilters(filteredFacets)

    const allFilters = `${defaultFilters} ${
      formatedFilters?.categoryFetchFilters
        ? `and (${formatedFilters?.categoryFetchFilters})`
        : ''
    } ${
      formatedFilters?.cargaHorariaFetchFilters
        ? `and (${formatedFilters?.cargaHorariaFetchFilters})`
        : ''
    } ${
      formatedFilters?.priceRangeFilter
        ? `and (${formatedFilters?.priceRangeFilter})`
        : 'and Price/BasePrice gt 0'
    }
    `

    const data = await axios.get(
      `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=SKU, Department, Category, Price, Checkout, Especificacao, CommercialCondition, TradePolicy, Stock, Rank, Especificacao/CargaHoraria&$filter=${allFilters}&$top=${itemsPerPage}&$skip=${skip}&$select=ID, Name, ProductImageURL, Price/BasePrice, Price/ListPrice, Price/CommisionedPrice, Price/isSale, Category/Name, Category/Slug, Especificacao/CargaHoraria/Text, LinkId&$orderby=${sort}&$count=true`
    )

    res.json(data.data ?? {})
  } catch (error) {
    throw new Error(error)
  }
}

export default getSearch
