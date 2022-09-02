import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

export default async function createUser(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const { method } = req

  if (method !== 'POST') {
    throw new Error('Method not allowed')
  }

  const data = JSON.stringify(req.body)

  const config = {
    method: 'post',
    url: `${process.env.GATSBY_CATALOG_BASE_URL}/rest/clientcore/v1/login/create`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-API-Client-Token': process.env.GATSBY_REST_API_TOKEN ?? '',
      ClientAuthorization: process.env.GATSBY_REST_CLIENT_AUTH ?? '',
    },
    data,
  }

  const response = await axios(config)

  res.json(response.data)
}
