import axios from 'axios'
import { useEffect, useState } from 'react'

interface SuggestedProducts {
  Name: string
  ProductImageURL: string
}

export default function useSuggestions(term: string) {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<any>([])

  useEffect(() => {
    if (term.length < 3) {
      return
    }

    const getSuggestions = async () => {
      try {
        setLoading(true)
        const resp = await axios.get<SuggestedProducts[] | []>(
          '/api/getSuggestions',
          {
            params: {
              term,
            },
          }
        )

        setData(resp.data)
      } catch (error) {
        console.error(error)
        setData([])
      } finally {
        setLoading(false)
      }
    }

    getSuggestions()
  }, [term])

  return { products: data ?? [], isLoading }
}
