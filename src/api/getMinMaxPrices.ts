import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

export default async function getMinMaxPrices(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const { departmentSlug, categorySlug } = req.body

  try {
    const filterParam =
      categorySlug === undefined
        ? `Department/Slug eq '${departmentSlug}'`
        : `Category/Slug eq '${categorySlug}'`

    const { data: maxPrice } = await axios.get(
      `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=Price&$orderby=Price/BasePrice desc&$select=Price/BasePrice&$top=1&$filter=Price/BasePrice ne '' and ${filterParam}`
    )

    const { data: minPrice } = await axios.get(
      `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=Price&$orderby=Price/BasePrice asc&$select=Price/BasePrice&$top=1&$filter=Price/BasePrice ne '' and ${filterParam}`
    )

    const data = {
      minPrice: minPrice.value[0].Price.BasePrice,
      maxPrice: maxPrice.value[0].Price.BasePrice,
    }

    res.json(data)
  } catch (error) {
    throw new Error(error)
  }
}
