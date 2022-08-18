import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import type { ProductsProductCard } from 'src/components/product/ProductCard/ProductCard'
import type { Filters } from 'src/components/search/PLPFilters/Filters'

type SearchProviderProps = {
  slug: string
  children: React.ReactNode
}

interface SearchContextProps {
  slug: string
  isLoading: boolean
  filteredFacets: Filters[]
  setFilteredFacets: React.Dispatch<React.SetStateAction<Filters[]>>
  products: ProductsProductCard[]
  setProducts: React.Dispatch<React.SetStateAction<ProductsProductCard[]>>
}

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
)

function SearchProvider({ children, slug }: SearchProviderProps) {
  const [filteredFacets, setFilteredFacets] = useState<Filters[]>([])
  const [products, setProducts] = useState<ProductsProductCard[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!filteredFacets || filteredFacets.length === 0) {
      return
    }

    const changeProducts = async () => {
      setIsLoading(true)
      const response = await axios
        .post(
          '/api/getDepartmentOrCategory',
          {
            slug,
            filteredFacets,
          },
          {
            proxy: {
              protocol: '',
              host: '',
              port: 8000,
            },
          }
        )
        .then(({ data }) => data)
        .catch((err) => console.error(err))

      setProducts(response.value)
      setIsLoading(false)
    }

    changeProducts()
  }, [filteredFacets, slug])

  const value = {
    isLoading,
    slug,
    filteredFacets,
    setFilteredFacets,
    products,
    setProducts,
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}

export { SearchProvider }
