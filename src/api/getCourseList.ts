import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import axios from 'axios'

import type { MyCourseData } from '../components/sections/MyCourses/typings'

interface OrderRequest {
  email: string
  token: string
}

console.warn('entrei no courselist')

export default async function getCourseList(
  req: GatsbyFunctionRequest<OrderRequest | null>,
  res: GatsbyFunctionResponse<MyCourseData[] | string>
) {
  if (req.method !== 'POST') {
    res.status(405)
    res.send('Request method must be POST')
    console.warn('entrei no req.method')

    return
  }

  if (!req?.body) {
    console.warn('!req?.body')

    res.status(400)
    res.send('Missing data')

    return
  }

  const { email, token } = req.body

  try {
    console.warn('!try ')
    const { data } = await axios.post(
      // setado via hardcode temporariamente para testes
      `https://pre-gde.godigitaledu.com/rest/clientcoremycourses/v1/product/courselist`,
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

    console.warn('data', data)
    res.json(data)
  } catch (error) {
    res.status(error.response.status)
    res.send('')
  }
}
