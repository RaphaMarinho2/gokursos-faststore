import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

export default async function getNewReleases(
  _: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  try {
    const { data } = await axios.get(
      `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=SKU, Category, Price, Checkout, Especificacao, CommercialCondition, TradePolicy, Stock, Rank, Especificacao/CargaHoraria&$orderby=ReleaseDate desc&$top=20&$skip=0&$select=Name, ProductImageURL,  Price/BasePrice, Price/ListPrice, Price/CommisionedPrice, Price/isSale, Category/Name`
    )

    res.json(data)
  } catch (error) {
    throw new Error(error)
  }
}
