import axios from 'axios'
import type { Dispatch } from 'react'
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
  productsCount: ProductsCount
  setProductsCount: Dispatch<React.SetStateAction<ProductsCount>>
  products: ProductsProductCard[]
  setProducts: React.Dispatch<React.SetStateAction<ProductsProductCard[]>>
}

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
)

type ProductsCount = {
  total: number
  actualCount: number
}

function SearchProvider({ children, slug }: SearchProviderProps) {
  const [filteredFacets, setFilteredFacets] = useState<Filters[]>([])
  const [productsCount, setProductsCount] = useState<ProductsCount>(
    {} as ProductsCount
  )

  const [products, setProducts] = useState<ProductsProductCard[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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

      setProductsCount((prev) => ({ ...prev, actualCount: count }))
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
    setProductsCount,
    products,
    setProducts,
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}

export { SearchProvider }
