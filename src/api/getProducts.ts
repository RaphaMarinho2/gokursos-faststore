import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'
import type { Filters } from 'src/components/search/PLPFilters/Filters'

import { formatQueryFilters } from '../utils/formatQueryFilters'

interface ProductsRequest {
  sort?: string
  skip?: number
  itemsPerPage?: number
  defaultFilters?: string
  filteredFacets?: Filters[]
}

async function getProducts(
  req: GatsbyFunctionRequest<ProductsRequest>,
  res: GatsbyFunctionResponse
) {
  if (req.method !== `POST`) {
    res.status(405)
    res.json({})

    return
  }

  try {
    const {
      sort = 'Rank/Score desc',
      skip = 0,
      itemsPerPage,
      filteredFacets,
      defaultFilters,
    } = req.body

    const expand =
      'SKU, Department, Category, Price, Checkout, Especificacao, CommercialCondition, TradePolicy, Stock, Rank, Especificacao/CargaHoraria'

    const select =
      'ID, Name, ProductImageURL, Price/BasePrice, Price/ListPrice, Price/CommisionedPrice, Price/isSale, Category/Name, Category/Slug, Especificacao/CargaHoraria/Text, LinkId'

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

    const URL = `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=${expand}&$filter=IsActive eq true and IsVisible eq true and ${allFilters}&$top=${itemsPerPage}&$skip=${skip}&$select=${select}&$orderby=${sort}&$count=true`

    const data = await axios.get(URL)

    res.json(data.data ?? {})
  } catch (error) {
    res.status(error.response.status)
    res.json({})
  }
}

export default getProducts
