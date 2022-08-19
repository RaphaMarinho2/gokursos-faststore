import {
  parseSearchState,
  SearchProvider as FSSearchProvider,
  useSession,
} from '@faststore/sdk'
import { graphql } from 'gatsby'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { useEffect, useState } from 'react'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import SROnly from 'src/components/ui/SROnly'
import { ITEMS_PER_PAGE } from 'src/constants'
import { mark } from 'src/sdk/tests/mark'
import type { SearchState } from '@faststore/sdk'
import type { PageProps } from 'gatsby'
import type {
  SearchPageQueryQuery,
  SearchPageQueryQueryVariables,
} from '@generated/graphql'
import 'src/styles/pages/search.scss'
import axios from 'axios'
import { applySearchState } from 'src/sdk/search/state'
import type { ProductsProductCard } from 'src/components/product/ProductCard/ProductCard'
import { SearchProvider } from 'src/contexts/SearchContext/SearchContext'
import ProductGallery from 'src/components/sections/ProductGallery'

type Query = { query: Record<string, string> }

interface ServerDataProps {
  productsData: {
    '@odata.count': number
    '@odata.context': string
    value: ProductsProductCard[]
  }
}

export type Props = PageProps<
  SearchPageQueryQuery,
  SearchPageQueryQueryVariables,
  unknown,
  ServerDataProps
> &
  Query

const useSearchParams = ({ href }: Location) => {
  const [params, setParams] = useState<SearchState | null>(null)

  useEffect(() => {
    const url = new URL(href)

    setParams(parseSearchState(url))
  }, [href])

  return params
}

function Page(props: Props) {
  const {
    data: { site },
    serverData,
  } = props

  const {
    productsData: { value: products, '@odata.count': productsCount },
  } = serverData

  const { locale } = useSession()
  const searchParams = useSearchParams(props.location)
  const title = 'Search Results | BaseStore'

  if (!searchParams) {
    return null
  }

  return (
    <FSSearchProvider
      onChange={applySearchState}
      itemsPerPage={ITEMS_PER_PAGE}
      {...searchParams}
    >
      {/* SEO */}
      <GatsbySeo
        noindex
        language={locale}
        title={title}
        description={site?.siteMetadata?.description ?? ''}
        titleTemplate={site?.siteMetadata?.titleTemplate ?? ''}
        openGraph={{
          type: 'website',
          title,
          description: site?.siteMetadata?.description ?? '',
        }}
      />
      <SROnly as="h1" text={title} />
      {/*
        WARNING: Do not import or render components from any
        other folder than '../components/sections' in here.

        This is necessary to keep the integration with the CMS
        easy and consistent, enabling the change and reorder
        of elements on this page.

        If needed, wrap your component in a <Section /> component
        (not the HTML tag) before rendering it here.
      */}
      <Breadcrumb name="All Products" />
      <SearchProvider searchParams={searchParams}>
        <ProductGallery
          title="Search Results"
          searchTerm={searchParams.term ?? undefined}
          products={products}
          productsCount={productsCount}
          // TODO: remove this when adapt filters to search
          hasFilter={false}
        />
      </SearchProvider>
    </FSSearchProvider>
  )
}

export const querySSG = graphql`
  query SearchPageQuery {
    site {
      siteMetadata {
        titleTemplate
        title
        description
      }
    }
  }
`

export const getServerData = async (props: Props) => {
  const { query } = props

  try {
    const productsData = await axios
      .post(
        '/api/getSearch',
        {
          term: query.q,
          sort: query.sort,
          skip: Number(query.page) * ITEMS_PER_PAGE,
          itemsPerPage: ITEMS_PER_PAGE,
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

    return {
      status: 200,
      props: {
        productsData,
      },
      headers: {
        'cache-control': 'public, max-age=0, stale-while-revalidate=31536000',
      },
    }
  } catch (err) {
    console.error(err)

    return {
      status: 500,
      props: {},
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
      },
    }
  }
}

Page.displayName = 'Page'

export default mark(Page)
