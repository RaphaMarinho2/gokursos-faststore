import { useSession } from '@faststore/sdk'
import { gql } from '@vtex/graphql-utils'
import { useCallback, useMemo } from 'react'
import { ITEMS_PER_SECTION } from 'src/constants'
import type {
  ProductsQueryQuery,
  ProductsQueryQueryVariables,
} from '@generated/graphql'

import { prefetchQuery } from '../graphql/prefetchQuery'
import { useQuery } from '../graphql/useQuery'
import type { QueryOptions } from '../graphql/useQuery'

export const query = gql`
  query ProductsQuery(
    $first: Int!
    $after: String
    $sort: StoreSort!
    $term: String!
    $selectedFacets: [IStoreSelectedFacet!]!
  ) {
    search(
      first: $first
      after: $after
      sort: $sort
      term: $term
      selectedFacets: $selectedFacets
    ) {
      products {
        pageInfo {
          totalCount
        }
        edges {
          node {
            id: productID
            sku
            name
            gtin
            description

            isVariantOf {
              productGroupID
              name
            }

            image {
              url
              alternateName
            }

            brand {
              name
            }

            offers {
              lowPrice
              offers {
                availability
                price
                listPrice
                seller {
                  identifier
                }
              }
            }

            breadcrumbList {
              itemListElement {
                item
                name
                position
              }
            }
          }
        }
      }
    }
  }
`

const toArray = <T>(x: T[] | T | undefined) =>
  Array.isArray(x) ? x : x ? [x] : []

export const useLocalizedVariables = ({
  first,
  after,
  sort,
  term,
  selectedFacets,
}: Partial<ProductsQueryQueryVariables>) => {
  const { channel } = useSession()

  return useMemo(() => {
    const facets = toArray(selectedFacets)

    return {
      first: first ?? ITEMS_PER_SECTION,
      after: after ?? '0',
      sort: sort ?? ('score_desc' as const),
      term: term ?? '',
      selectedFacets: [...facets, { key: 'channel', value: channel! }],
    }
  }, [first, after, sort, term, selectedFacets, channel])
}

/**
 * Use this hook for fetching a list of products, like in search results and shelves
 */
export const useProductsQuery = (
  variables: Partial<ProductsQueryQueryVariables>,
  options?: QueryOptions
) => {
  const localizedVariables = useLocalizedVariables(variables)

  const { data } = useQuery<ProductsQueryQuery, ProductsQueryQueryVariables>(
    query,
    localizedVariables,
    options
  )

  return data?.search.products
}

export const useProductsQueryPrefetch = (
  variables: ProductsQueryQueryVariables,
  options?: QueryOptions
) => {
  const localizedVariables = useLocalizedVariables(variables)

  return useCallback(
    () => prefetchQuery(query, localizedVariables, options),
    [options, localizedVariables]
  )
}
