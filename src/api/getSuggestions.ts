import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

async function getSuggestions(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  try {
    const { term } = req.query

    const data = await axios.get(
      `https://truechangepresales-test.mendixcloud.com/odata/Catalog/v1/Products?$expand=SKU, Department, Category, Price, Checkout, Especificacao, CommercialCondition, TradePolicy, Stock, Rank, Especificacao/CargaHoraria&$filter=IsActive eq true and (contains(Name, '${term}') or contains(Department/Name, '${term}') or contains(Category/Name, '${term}') or contains(KeyWords, '${term}') or contains(Description, '${term}') or contains(DescriptionShort, '${term}') or contains(Especificacao/Conteudo, '${term}') or contains(Especificacao/Objetivos, '${term}') or contains(Brand/Name, '${term}'))&$top=8&$skip=0&$select=Name, ProductImageURL, LinkId`
    )

    res.json(data.data?.value ?? [])
  } catch (error) {
    throw new Error(error)
  }
}

export default getSuggestions
