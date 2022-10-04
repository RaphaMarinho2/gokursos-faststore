import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

import type { OrderData } from '../components/sections/MyOrders/typings'

interface OrderRequest {
  email: string
  token: string
}

export default async function getOrders(
  req: GatsbyFunctionRequest<OrderRequest | null>,
  res: GatsbyFunctionResponse<OrderData[] | string>
) {
  if (req.method !== 'POST') {
    res.status(405)
    res.send('Request method must be POST')

    return
  }

  if (!req?.body) {
    res.status(400)
    res.send('Missing data')

    return
  }

  const { email, token } = req.body

  try {
    const { data } = await axios.post(
      `${process.env.GATSBY_CATALOG_BASE_URL}/rest/pedido/v1/pedido/listapedidos`,
      { email, token },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-API-Client-Token': process.env.GATSBY_REST_API_TOKEN ?? '',
          ClientAuthorization: process.env.GATSBY_REST_CLIENT_AUTH ?? '',
        },
      }
    )

    res.json(data)
  } catch (error) {
    res.status(error?.response?.status ?? 500)
    res.json([])
  }
}
