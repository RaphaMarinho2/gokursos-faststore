import ServerCollectionPageQuery from 'src/mocks/ServerCollectionPageQuery.json'
import ScrollToTopButton from 'src/components/sections/ScrollToTopButton'
import ProductGallery from 'src/components/sections/ProductGallery'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import { mark } from 'src/sdk/tests/mark'
import { SearchProvider, parseSearchState } from '@faststore/sdk'
import { applySearchState } from 'src/sdk/search/state'
import { ITEMS_PER_PAGE } from 'src/constants'
import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import axios from 'axios'
import type {
  ContentfulPageDepartmentCategory,
  DepartmentPageQueryQuery,
  DepartmentPageQueryQueryVariables,
} from '@generated/graphql'
import queryContentful from 'src/sdk/contentful/queryContentful'

interface ServerDataProps {
  CMSData: ContentfulPageDepartmentCategory
  productData: any
}

export type Props = PageProps<
  DepartmentPageQueryQuery,
  DepartmentPageQueryQueryVariables,
  unknown,
  ServerDataProps
>
function Page(props: Props) {
  const { location, data, serverData } = props

  // eslint-disable-next-line no-console
  console.log(data)

  const title = 'a'

  const collection = ServerCollectionPageQuery

  const maybeState = parseSearchState(new URL(location.href))

  const searchParams = {
    page: maybeState?.page,
    base: maybeState?.base,
    selectedFacets: maybeState ? maybeState.selectedFacets : [],
    term: maybeState?.term ?? null,
    sort: maybeState?.sort ?? 'score_desc',
  }

  return (
    <SearchProvider
      onChange={applySearchState}
      itemsPerPage={ITEMS_PER_PAGE}
      {...searchParams}
    >
      {/* SEO */}
      {/* <GatsbySeo
        title={data.site?.siteMetadata?.title ?? CMSData.seo?.title ?? ''}
        titleTemplate={data.site?.siteMetadata?.titleTemplate ?? ''}
        description={
          data.site?.siteMetadata?.description ?? CMSData.seo?.description ?? ''
        }
        canonical={canonical}
        language={locale}
        openGraph={{
          type: 'website',
          title,
          description: data.site?.siteMetadata?.description ?? '',
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={collection?.breadcrumbList.itemListElement ?? []}
      /> */}

      {/*
        WARNING: Do not import or render components from any
        other folder than '../components/sections' in here.
        This is necessary to keep the integration with the CMS
        easy and consistent, enabling the change and reorder
        of elements on this page.
        If needed, wrap your component in a <Section /> component
        (not the HTML tag) before rendering it here.
      */}
      <Breadcrumb
        breadcrumbList={collection?.breadcrumbList.itemListElement}
        name={title}
      />

      {/* <BannerCategory nodes={allContentfulPageDepartmentCategory.nodes} /> */}

      <ProductGallery products={serverData.productData} title={title} />

      <ScrollToTopButton />
    </SearchProvider>
  )
}

export const querySSG = graphql`
  query DepartmentPageQuery {
    site {
      siteMetadata {
        titleTemplate
        title
        description
      }
    }
  }
`

export const DepartmentCategoryPageQuery = `
query DepartmentCategoryPageQuery {
  departmentCategoryPageCollection {
    items {
      title
      subtitle
      seo
      slug
      bannerImageDesktop {
        url
        width
        height
      }
      bannerImageMobile {
        url
        width
        height
      }
    }
  }
}`

export const getServerData = async (props: Props) => {
  const {
    params: { slug },
  } = props

  const categoryName = slug.includes('/') && slug.split('/')[1]
  const departmentName = !slug.includes('/') && slug

  try {
    const body = {
      query: DepartmentCategoryPageQuery,
      variables: {},
    }

    const CMSData = await queryContentful<ContentfulPageDepartmentCategory>({
      body,
    })

    const productData = await axios
      .get('/api/getDepartmentOrCategory', {
        proxy: {
          protocol: '',
          host: '',
          port: 8000,
        },
        params: {
          departmentName,
          categoryName,
        },
      })
      .then(({ data: { value } }) => value)

    const data: ServerDataProps = {
      CMSData,
      productData,
    }

    if (!data) {
      const originalUrl = `/${slug}`

      return {
        status: 301,
        props: {},
        headers: {
          'cache-control': 'public, max-age=0, stale-while-revalidate=31536000',
          location: `/404/?from=${encodeURIComponent(originalUrl)}`,
        },
      }
    }

    return {
      status: 200,
      props: data ?? {},
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
