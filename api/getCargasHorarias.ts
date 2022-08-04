import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

export default async function getCargasHorarias(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  if (req.method === `POST`) {
    try {
      const { data } = await axios.get(
        `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/CargaHorarias?$select=Text&$orderby=Text asc`
      )

      res.json(data.value)
    } catch (error) {
      throw new Error(error)
    }
  } else {
    throw new Error('Request method should be POST')
  }
}
