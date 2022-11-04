import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

import { LMS_FILTERS } from '../constants'

export default async function getNewReleases(
  _: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const expand = `SKU, Category, Brand, Price, Checkout, Especificacao, TradePolicy, Stock, Rank, Especificacao/CargaHoraria`

  const orderBy = `ReleaseDate desc`

  const filter = `IsActive eq true and IsVisible eq true and (Stock/HasUnlimitedQuantity or Stock/TotalQuantity ge 1 or ShowWithoutStock)${LMS_FILTERS}`

  const select = `ID, _Id, Brand/Name, Name, ProductImageURL,  Price/BasePrice, Price/ListPrice, Price/CommisionedPrice, Price/isSale, Category/Name, LinkId`

  const top = `20`

  try {
    const { data } = await axios.get(
      `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=${expand}&$orderby=${orderBy}&$filter=${filter}&$top=${top}&$select=${select}`
    )

    res.json(data)
  } catch (error) {
    throw new Error(error)
  }
}
