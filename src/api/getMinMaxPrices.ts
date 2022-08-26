import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

export default async function getMinMaxPrices(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const { departmentSlug, categorySlug, term } = req.body

  const encodedTerm = encodeURI(term ?? '')

  try {
    const filterParam = departmentSlug
      ? ` and Department/Slug eq '${departmentSlug}'`
      : categorySlug
      ? ` and Category/Slug eq '${categorySlug}'`
      : ` and IsActive eq true and (contains(Name, '${encodedTerm}') or contains(Department/Name, '${encodedTerm}') or contains(Category/Name, '${encodedTerm}') or contains(KeyWords, '${encodedTerm}') or contains(Brand/Name, '${encodedTerm}') or contains(Description, '${encodedTerm}') or contains(DescriptionShort, '${encodedTerm}') or contains(Especificacao/Conteudo, '${encodedTerm}') or contains(Especificacao/Objetivos, '${encodedTerm}'))`

    const [maxPriceData, minPriceData] = await Promise.all([
      axios.get(
        `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=Price&$orderby=Price/BasePrice desc&$select=Price/BasePrice&$top=1&$filter=Price/BasePrice ne ''${filterParam}`
      ),
      axios.get(
        `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=Price&$orderby=Price/BasePrice asc&$select=Price/BasePrice&$top=1&$filter=Price/BasePrice ne ''${filterParam}`
      ),
    ])

    const maxPrice = maxPriceData.data.value[0]?.Price?.BasePrice
    const minPrice = minPriceData.data.value[0]?.Price?.BasePrice

    const data =
      maxPrice && (minPrice || minPrice === 0)
        ? {
            minPrice,
            maxPrice,
          }
        : {}

    res.json(data)
  } catch (error) {
    throw new Error(error)
  }
}
