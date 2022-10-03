import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

async function getSuggestions(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  try {
    const { term } = req.query

    const encodedTerm = encodeURI(term)
    const expand =
      'SKU, Department, Category, Price, Checkout, Especificacao, CommercialCondition, TradePolicy, Stock, Rank, Especificacao/CargaHoraria'

    const filter = `IsActive eq true and IsVisible eq true and (contains(Name, '${encodedTerm}') or contains(Department/Name, '${encodedTerm}') or contains(Category/Name, '${encodedTerm}') or contains(KeyWords, '${encodedTerm}') or contains(Brand/Name, '${encodedTerm}'))`

    const data = await axios.get(
      `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=${expand}&$filter=${filter}&$top=8&$skip=0&$select=Name, ProductImageURL, LinkId`
    )

    res.json(data.data?.value ?? [])
  } catch (error) {
    res.status(error.response.status)
    res.json([])
  }
}

export default getSuggestions
