import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

async function getSearch(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  if (req.method !== `POST`) {
    res.status(405)
  }

  try {
    const { term, sort = 'Rank/Score desc', skip = 0, itemsPerPage } = req.body

    const data = await axios.get(
      `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=SKU, Department, Category, Price, Checkout, Especificacao, CommercialCondition, TradePolicy, Stock, Rank, Especificacao/CargaHoraria&$filter=IsActive eq true and (contains(Name, '${term}') or contains(Department/Name, '${term}') or contains(Category/Name, '${term}') or contains(KeyWords, '${term}') or contains(Brand/Name, '${term}'))&$top=${itemsPerPage}&$skip=${skip}&$select=ID, Name, ProductImageURL, Price/BasePrice, Price/ListPrice, Price/CommisionedPrice, Price/isSale, Category/Name, Category/Slug, Especificacao/CargaHoraria/Text, LinkId&$orderby=${sort}&$count=true`
    )

    res.json(data.data ?? {})
  } catch (error) {
    throw new Error(error)
  }
}

export default getSearch
