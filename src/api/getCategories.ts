import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

interface RequestType {
  departmentSlug?: string
}

export default async function getCategories(
  req: GatsbyFunctionRequest<RequestType>,
  res: GatsbyFunctionResponse
) {
  if (req.method !== 'POST') {
    res.status(405)
    res.send('Request method must be POST')

    return
  }

  const { departmentSlug = '' } = req.body
  const filterParam = departmentSlug
    ? `&$filter=Department/Slug eq '${departmentSlug}'`
    : ''

  try {
    const { data } = await axios.get(
      `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Categories?$expand=Department,Product&$select=Name, Slug${filterParam}`
    )

    res.json(data.value)
  } catch (error) {
    throw new Error(error)
  }
}
