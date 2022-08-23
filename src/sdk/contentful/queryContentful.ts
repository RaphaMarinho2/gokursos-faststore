import axios from 'axios'

interface QueryContentfulProps {
  body: {
    query: string
    variables?: any
  }
}

async function queryContentful<R>({ body }: QueryContentfulProps): Promise<R> {
  const spaceId = process.env.GATSBY_CONTENTFUL_SPACE_ID
  const accessKey = process.env.GATSBY_CONTENTFUL_CDAPI_TOKEN

  try {
    const CMSData = await axios
      .post(
        `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
        JSON.stringify(body),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessKey}`,
          },
        }
      )
      .then((response) => {
        return response.data
      })

    return CMSData
  } catch (error) {
    throw new Error(error)
  }
}

export default queryContentful
