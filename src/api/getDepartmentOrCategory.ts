import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'
import type { Filters } from 'src/components/search/PLPFilters/Filters'

import { formatQueryFilters } from '../utils/formatQueryFilters'

interface RequestType {
  slug: string
  filteredFacets?: Filters[]
  skip?: number
  itemsPerPage?: number
}

export default async function getDepartmentOrCategory(
  req: GatsbyFunctionRequest<RequestType>,
  res: GatsbyFunctionResponse
) {
  if (req.method !== 'POST') {
    res.status(405)
    res.send('Request method must be POST')

    return
  }

  const { slug, filteredFacets, skip = 0, itemsPerPage = 12 } = req.body

  const categorySlug = slug.includes('/') && slug.split('/')[1]
  const departmentSlug = !slug.includes('/') && slug

  const filterParam = !categorySlug
    ? `Department/Slug eq '${departmentSlug}'`
    : `Category/Slug eq '${categorySlug}'`

  const filters = formatQueryFilters(filteredFacets)

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

  const URL = `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=SKU, Department, Category, Price, Checkout, Especificacao, CommercialCondition, TradePolicy, Stock, Rank, Brand, Especificacao/CargaHoraria&$orderby=Rank/Score desc&$skip=${skip}&$filter=${allFilters} &$top=${itemsPerPage}&$count=true&$select=ID, Name, ProductImageURL, Price/BasePrice, Price/ListPrice, Price/CommisionedPrice, Price/isSale, Category/Name, Category/Slug, Especificacao/CargaHoraria/Text, LinkId`

  try {
    const { data } = await axios.get(URL)

    res.json(data)
  } catch (error) {
    throw new Error(error)
  }
}
