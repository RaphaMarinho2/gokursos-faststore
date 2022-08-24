import axios from 'axios'
import type { Dispatch, SetStateAction } from 'react'
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
  setFilteredFacets: Dispatch<SetStateAction<Filters[]>>
  productsCount: number
  products: ProductsProductCard[]
  setProducts: Dispatch<SetStateAction<ProductsProductCard[]>>
}

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
)

function SearchProvider({ children, slug }: SearchProviderProps) {
  const [filteredFacets, setFilteredFacets] = useState<Filters[]>([])
  const [productsCount, setProductsCount] = useState<number>(0)

  const [products, setProducts] = useState<ProductsProductCard[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    const body = {
      slug,
    }

    const changeProducts = async () => {
      const { value, '@odata.count': count } = await axios
        .post(
          '/api/getDepartmentOrCategory',
          filteredFacets.length ? { ...body, filteredFacets } : body
        )
        .then(({ data }) => data)
        .catch((err) => console.error(err))

      setProductsCount(count)
      setProducts(value)
      setIsLoading(false)
    }

    changeProducts()
  }, [filteredFacets, slug])

  const value = {
    isLoading,
    slug,
    filteredFacets,
    setFilteredFacets,
    productsCount,
    products,
    setProducts,
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}

export { SearchProvider }
