import axios from 'axios'
import type { Dispatch, SetStateAction } from 'react'
import { useMemo, createContext, useEffect, useState } from 'react'
import type { ProductsProductCard } from 'src/components/product/ProductCard/ProductCard'
import type { SearchState } from 'src/components/search/Filter/typings'
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
  filteredFacets: Filters[]
  setAllFilters: (allFilters: Filters[]) => void
  allFilters: Filters[]
  productsCount: number
  products: ProductsProductCard[]
  setProducts: React.Dispatch<React.SetStateAction<ProductsProductCard[]>>
  searchParams: SearchState
  lastPage: number
  sort: string
  setSort: Dispatch<SetStateAction<string>>
  filterLoading: boolean
  setFilterLoading: (filterLoading: boolean) => void
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
  const [sort, setSort] = useState<string>('')
  const [filterLoading, setFilterLoading] = useState<boolean>(true)

  const filteredFacets = useMemo(
    () =>
      allFilters.map((filter) => {
        return {
          filterlabel: filter.filterlabel,
          facets:
            filter.type === 'CHECKBOX'
              ? filter.facets.filter((facet) => facet.selected === true)
              : filter?.facets?.length
              ? [
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
                ]
              : [],
        }
      }),
    [allFilters]
  ) as Filters[]

  const [productsCount, setProductsCount] = useState<number>(0)

  const [lastPage, setLastPage] = useState<number>(0)

  const [products, setProducts] = useState<ProductsProductCard[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    const searchProducts = async () => {
      const { page } = searchParams

      try {
        const { value, '@odata.count': count } = await axios
          .post('/api/getProducts', {
            defaultFilters,
            skip: page * ITEMS_PER_PAGE,
            sort,
            itemsPerPage: ITEMS_PER_PAGE,
            filteredFacets: filteredFacets.length ? filteredFacets : undefined,
          })
          .then(({ data }) => data)

        setProductsCount(count)
        setLastPage(Math.ceil(count / ITEMS_PER_PAGE))
        setProducts(value)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    searchProducts()
  }, [defaultFilters, filterLoading, filteredFacets, searchParams, sort])

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
    sort,
    setSort,
    filterLoading,
    setFilterLoading,
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}

export { SearchProvider }
