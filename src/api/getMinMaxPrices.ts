import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

export default async function getMinMaxPrices(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const { departmentSlug, categorySlug } = req.body

  try {
    const filterParam = departmentSlug
      ? ` and Department/Slug eq '${departmentSlug}'`
      : categorySlug
      ? ` and Category/Slug eq '${categorySlug}'`
      : ''

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
