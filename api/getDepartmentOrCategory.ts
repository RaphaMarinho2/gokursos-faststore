import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

export default async function getDepartmentOrCategory(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const { departmentName, categoryName } = req.query

  try {
    const filterParam =
      categoryName === 'false'
        ? `Department/Slug eq '${departmentName}'`
        : `Category/Slug eq '${categoryName}'`

    const { data } = await axios.get(
      `https://truechangepresales-test.mendixcloud.com/odata/Catalog/v1/Products?$expand=SKU, Department, Category, Price, Checkout, Especificacao, CommercialCondition, TradePolicy, Stock, Rank, Brand, Especificacao/CargaHoraria&$orderby=Rank/Score desc&$skip=0&$filter=${filterParam}&$top=20&$select=Name, ProductImageURL, Price/BasePrice, Price/ListPrice, Price/CommisionedPrice, Price/isSale, Department/Name, Category/Name, Especificacao/CargaHoraria/Text, ProductURL`
    )

    res.json(data)
  } catch (error) {
    throw new Error(error)
  }
}
