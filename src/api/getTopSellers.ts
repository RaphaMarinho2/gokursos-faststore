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

    const expand = `SKU, Department, Category, Price, Checkout, Especificacao, CommercialCondition, TradePolicy, Stock, Rank, Brand, Especificacao/CargaHoraria`

    const orderBy = `Rank/Score desc`

    const allFilters = `${filterParam} IsActive eq true and IsVisible eq true and Rank ne null`

    const top = `20`

    const select = `ID,Name, ProductImageURL, Price/BasePrice, Price/ListPrice, Price/CommisionedPrice, Price/isSale, Department/Name, Category/Name, Especificacao/CargaHoraria/Text, LinkId`

    const { data } = await axios.get(
      `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=${expand}&$orderby=${orderBy}&$filter=${allFilters}&$top=${top}&$select=${select}`
    )

    res.json(data)
  } catch (error) {
    throw new Error(error)
  }
}
