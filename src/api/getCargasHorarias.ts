import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

export default async function getCargasHorarias(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  if (req.method !== 'POST') {
    res.status(405)
    res.send('Request method must be POST')

    return
  }

  try {
    const { data } = await axios.get(
      `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/CargaHorarias?$select=Text&$orderby=Text asc`
    )

    res.json(data.value)
  } catch (error) {
    throw new Error(error)
  }
}
