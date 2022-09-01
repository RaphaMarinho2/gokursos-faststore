import type { SearchState } from '@faststore/sdk'
import axios from 'axios'
import type { Dispatch, SetStateAction } from 'react'
import { useMemo, createContext, useEffect, useState } from 'react'
import type { ProductsProductCard } from 'src/components/product/ProductCard/ProductCard'
import type { Filters } from 'src/components/search/PLPFilters/Filters'
import { ITEMS_PER_PAGE } from 'src/constants'

type SearchProviderProps = {
  slug?: string
  children: React.ReactNode
  searchParams: SearchState
  defaultFilters?: string
}

interface SearchContextProps {
  slug?: string
  isLoading: boolean
  filteredFacets: any
  setAllFilters: Dispatch<SetStateAction<Filters[]>>
  allFilters: Filters[]
  productsCount: number
  products: ProductsProductCard[]
  setProducts: React.Dispatch<React.SetStateAction<ProductsProductCard[]>>
  searchParams: SearchState
  lastPage: number
}

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
)

function SearchProvider({
  children,
  slug,
  searchParams,
  defaultFilters,
}: SearchProviderProps) {
  const [allFilters, setAllFilters] = useState<Filters[]>([])

  const filteredFacets = useMemo(
    () =>
      allFilters.map((filter) => {
        return {
          filterlabel: filter.filterlabel,
          facets:
            filter.type === 'CHECKBOX'
              ? filter.facets.filter((facet) => facet.selected === true)
              : [
                  {
                    value: filter?.facets[0]?.value,
                    label: filter?.facets[0]?.label,
                    others: {
                      min: filter?.facets[0].others?.min,
                      max: filter?.facets[0].others?.max,
                      actualMin: filter?.facets[0].others?.actualMin,
                      actualMax: filter?.facets[0].others?.actualMax,
                    },
                  },
                ],
        }
      }),
    [allFilters]
  )

  const [productsCount, setProductsCount] = useState<number>(0)

  const [lastPage, setLastPage] = useState<number>(0)

  const [products, setProducts] = useState<ProductsProductCard[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    if (!allFilters.length) return

    const searchProducts = async () => {
      const { page } = searchParams
      const { value, '@odata.count': count } = await axios
        .post('/api/getProducts', {
          defaultFilters,
          term: 'tecnologia',
          skip: page * ITEMS_PER_PAGE,
          itemsPerPage: ITEMS_PER_PAGE,
          filteredFacets: filteredFacets.length ? filteredFacets : undefined,
        })
        .then(({ data }) => data)
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false))

      setProductsCount(count)
      setLastPage(Math.ceil(count / ITEMS_PER_PAGE))
      setProducts(value)
    }

    searchProducts()
  }, [allFilters.length, defaultFilters, filteredFacets, searchParams, slug])

  const value = {
    isLoading,
    slug,
    filteredFacets,
    productsCount,
    products,
    setProducts,
    lastPage,
    searchParams,
    setAllFilters,
    allFilters,
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}

export { SearchProvider }
