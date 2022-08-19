import ScrollToTopButton from 'src/components/sections/ScrollToTopButton'
import ProductGallery from 'src/components/sections/ProductGallery'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import { mark } from 'src/sdk/tests/mark'
import { SearchProvider, parseSearchState, useSession } from '@faststore/sdk'
import { applySearchState } from 'src/sdk/search/state'
import { ITEMS_PER_PAGE } from 'src/constants'
import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import axios from 'axios'
import type {
  DepartmentPageQueryQuery,
  DepartmentPageQueryQueryVariables,
} from '@generated/graphql'
import queryContentful from 'src/sdk/contentful/queryContentful'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import BannerCategory from 'src/components/sections/BannerCategory'
import type { ProductsProductCard } from 'src/components/product/ProductCard/ProductCard'
import { SearchProvider as PLPProvider } from 'src/contexts/SearchContext/SearchContext'

interface PageCMSDepartmentCategoryType {
  title: string
  subtitle: string
  slug: string
  seoTitle: string
  seoDescription: string
  bannerImageDesktop: {
    url: string
    width: number
    height: number
  }
  bannerImageMobile: {
    url: string
    width: number
    height: number
  }
}

interface ServerDataProps {
  CMSData: {
    data: {
      departmentCategoryPageCollection: {
        items: PageCMSDepartmentCategoryType[]
      }
    }
  }
  productsData: {
    '@odata.count': number
    '@odata.context': string
    value: ProductsProductCard[]
  }
}

export type Props = PageProps<
  DepartmentPageQueryQuery,
  DepartmentPageQueryQueryVariables,
  unknown,
  ServerDataProps
>

function Page(props: Props) {
  const {
    location: { host, href },
    data,
    serverData,
  } = props

  const {
    CMSData,
    productsData: { value: products, '@odata.count': productsCount },
  } = serverData

  const [
    {
      title,
      subtitle,
      slug,
      seoTitle,
      seoDescription,
      bannerImageDesktop,
      bannerImageMobile,
    },
  ] = CMSData.data.departmentCategoryPageCollection.items

  const { locale } = useSession()

  const maybeState = parseSearchState(new URL(href))

  const searchParams = {
    page: maybeState?.page,
    base: maybeState?.base,
    selectedFacets: maybeState ? maybeState.selectedFacets : [],
    term: maybeState?.term ?? null,
    sort: maybeState?.sort ?? 'score_desc',
  }

  // TODO: breadcrumbList needs to come from TrueChange. Waiting back-end changes.
  const breadcrumbList = {
    itemListElement: [
      {
        item: `/${slug}`,
        name: slug[0].toUpperCase() + slug.substring(1),
        position: 1,
      },
    ],
  }

  const { page } = searchParams

  const pageQuery = page !== 0 ? `?page=${page}` : ''
  const canonical =
    host !== undefined
      ? `https://${host}/${slug}/${pageQuery}`
      : `/${slug}/${pageQuery}`

  return (
    <SearchProvider
      onChange={applySearchState}
      itemsPerPage={ITEMS_PER_PAGE}
      {...searchParams}
    >
      {/* SEO */}
      <GatsbySeo
        title={seoTitle ?? data.site?.siteMetadata?.title ?? ''}
        titleTemplate={data.site?.siteMetadata?.titleTemplate ?? ''}
        description={
          seoDescription ?? data.site?.siteMetadata?.description ?? ''
        }
        canonical={canonical}
        language={locale}
        openGraph={{
          type: 'website',
          title: seoTitle,
          description: data.site?.siteMetadata?.description ?? '',
        }}
      />

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
        breadcrumbList={breadcrumbList.itemListElement}
        name={seoTitle}
      />

      <BannerCategory
        title={title}
        subtitle={subtitle}
        imageBannerDesktop={bannerImageDesktop?.url}
        imageBannerMobile={bannerImageMobile?.url}
      />
      <PLPProvider slug={slug}>
        <ProductGallery
          products={products}
          productsCount={productsCount}
          title={title}
        />
      </PLPProvider>

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
query DepartmentCategoryPageQuery($slug: String!) {
  departmentCategoryPageCollection(where: {slug: $slug}) {
    items {
      title
      subtitle
      seoTitle
      seoDescription
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

  try {
    const body = {
      query: DepartmentCategoryPageQuery,
      variables: {
        slug,
      },
    }

    const CMSData = await queryContentful<ServerDataProps['CMSData']>({
      body,
    })

    const productsData = await axios
      .post(
        '/api/getDepartmentOrCategory',
        {
          slug,
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

    if (
      !CMSData ||
      !productsData ||
      CMSData.data.departmentCategoryPageCollection.items.length === 0
    ) {
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
      props: {
        CMSData,
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
