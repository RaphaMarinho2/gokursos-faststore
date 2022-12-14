import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

import { LMS_FILTERS } from '../constants'

export default async function getDuce(
  _: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const expand = `SKU, Category, Price, Checkout, Especificacao, Brand, TradePolicy, Stock, Rank, Especificacao/CargaHoraria`

  const filter = `IsActive eq true and IsVisible eq true and contains(Department/Name, 'DUCE') and (Stock/HasUnlimitedQuantity or Stock/TotalQuantity ge 1 or ShowWithoutStock)${LMS_FILTERS}`

  const select = `ID, _Id, Name, ProductImageURL,  Price/BasePrice, Price/ListPrice, Price/CommisionedPrice, Price/isSale, Category/Name,Brand/Name, LinkId`

  const top = `20`

  try {
    const { data } = await axios.get(
      `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=${expand}&$filter=${filter}&$top=${top}&$select=${select}`
    )

    res.json(data)
  } catch (error) {
    throw new Error(error)
  }
}
