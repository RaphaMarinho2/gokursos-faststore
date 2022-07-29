import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

export default async function getTopSellers(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const { departmentName } = req.query

  try {
    const filterParam =
      departmentName !== undefined
        ? `Department/Slug eq '${departmentName}' and `
        : ''

    const { data } = await axios.get(
      `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=SKU, Department, Category, Price, Checkout, Especificacao, CommercialCondition, TradePolicy, Stock, Rank, Brand, Especificacao/CargaHoraria&$orderby=Rank/Score desc&$skip=0&$filter=${filterParam}Rank ne null&$top=20&$select=Name, ProductImageURL, Price/BasePrice, Price/ListPrice, Price/CommisionedPrice, Price/isSale, Department/Name, Category/Name, Especificacao/CargaHoraria/Text, ProductURL`
    )

    res.json(data)
  } catch (error) {
    throw new Error(error)
  }
}
