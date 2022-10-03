import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

export default async function getNewReleases(
  _: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const expand = `SKU, Category, Price, Checkout, Especificacao, CommercialCondition, TradePolicy, Stock, Rank, Especificacao/CargaHoraria`

  const filter = `IsActive eq true and IsVisible eq true`

  const select = `Name, ProductImageURL,  Price/BasePrice, Price/ListPrice, Price/CommisionedPrice, Price/isSale, Category/Name, LinkId`

  try {
    const { data } = await axios.get(
      `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=${expand}&$orderby=ReleaseDate desc&$filter=${filter}&$top=20&$skip=0&$select=${select}`
    )

    res.json(data)
  } catch (error) {
    throw new Error(error)
  }
}
