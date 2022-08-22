import type { SearchState } from '@faststore/sdk'
import axios from 'axios'
import type { Dispatch, SetStateAction } from 'react'
import { createContext, useEffect, useState } from 'react'
import type { ProductsProductCard } from 'src/components/product/ProductCard/ProductCard'
import type { Filters } from 'src/components/search/PLPFilters/Filters'
import { ITEMS_PER_PAGE } from 'src/constants'

type SearchProviderProps = {
  slug?: string
  children: React.ReactNode
  searchParams?: SearchState
}

interface SearchContextProps {
  slug?: string
  isLoading: boolean
  filteredFacets: Filters[]
  setFilteredFacets: Dispatch<SetStateAction<Filters[]>>
  productsCount: number
  products: ProductsProductCard[]
  setProducts: React.Dispatch<React.SetStateAction<ProductsProductCard[]>>
  currentPage: number
  lastPage: number
  sort: string
  setSort: Dispatch<SetStateAction<string>>
}

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
)

function SearchProvider({ children, slug, searchParams }: SearchProviderProps) {
  const [filteredFacets, setFilteredFacets] = useState<Filters[]>([])
  const [sort, setSort] = useState<string>('')
  const [productsCount, setProductsCount] = useState<number>(0)

  const [lastPage, setLastPage] = useState<number>(0)

  const [products, setProducts] = useState<ProductsProductCard[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (slug) {
      const body = {
        slug,
        sort,
      }

      setIsLoading(true)
      const changeProducts = async () => {
        const { value, '@odata.count': count } = await axios
          .post(
            '/api/getDepartmentOrCategory',
            filteredFacets.length ? { ...body, filteredFacets } : body
          )
          .then(({ data }) => data)
          .catch((err) => console.error(err))
          .finally(() => setIsLoading(false))

        setProductsCount(count)
        setProducts(value)
      }

      changeProducts()

      return
    }

    if (!searchParams) {
      return
    }

    setIsLoading(true)
    const searchProducts = async () => {
      const { term, page } = searchParams
      const { value, '@odata.count': count } = await axios
        .post('/api/getSearch', {
          term,
          sort,
          skip: page * ITEMS_PER_PAGE,
          itemsPerPage: ITEMS_PER_PAGE,
        })
        .then(({ data }) => data)
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false))

      setProductsCount(count)
      setLastPage(Math.ceil(count / ITEMS_PER_PAGE))
      setProducts(value)
    }

    searchProducts()
  }, [filteredFacets, searchParams, slug, sort])

  const value = {
    isLoading,
    slug,
    filteredFacets,
    setFilteredFacets,
    productsCount,
    products,
    setProducts,
    lastPage,
    currentPage: (searchParams?.page ?? 0) + 1,
    sort,
    setSort,
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}

export { SearchProvider }
