import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

export default async function getDuce(
  _: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  try {
    const { data } = await axios.get(
      `https://truechangepresales-test.mendixcloud.com/odata/Catalog/v1/Products?$expand=SKU, Category, Price, Checkout, Especificacao, CommercialCondition, TradePolicy, Stock, Rank, Especificacao/CargaHoraria&$filter=contains(Department/Name, 'DUCE')&$top=20&$skip=0&$select=Name, ProductImageURL,  Price/BasePrice, Price/ListPrice, Price/CommisionedPrice, Price/isSale, Category/Name, ProductURL`
    )

    res.json(data)
  } catch (error) {
    throw new Error(error)
  }
}
