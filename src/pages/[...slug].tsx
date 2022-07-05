import ServerCollectionPageQuery from 'src/mocks/ServerCollectionPageQuery.json'
import ScrollToTopButton from 'src/components/sections/ScrollToTopButton'
import ProductGallery from 'src/components/sections/ProductGallery'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import { mark } from 'src/sdk/tests/mark'
import { SearchProvider, parseSearchState } from '@faststore/sdk'
import { applySearchState } from 'src/sdk/search/state'
import { ITEMS_PER_PAGE } from 'src/constants'
import BannerCategory from 'src/components/sections/BannerCategory'
import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import axios from 'axios'
import type { DepartmentPageQueryQuery } from '@generated/graphql'

export type Props = PageProps<DepartmentPageQueryQuery>
function Page(props: Props) {
  const {
    data: { allContentfulBannerDepartmentCategory },
  } = props

  // const {
  //   data: { site },
  //   serverData: { collection },
  //   location: { host },
  //   slug,
  // } = props

  // console.log('props', props)

  const collection = ServerCollectionPageQuery

  const title = collection?.seo.title ?? ''

  const maybeState = parseSearchState(
    new URL('https://deploy-preview-26--gokursos.netlify.app/tecnologia/')
  )

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
      <Breadcrumb
        breadcrumbList={collection?.breadcrumbList.itemListElement}
        name={title}
      />

      <BannerCategory nodes={allContentfulBannerDepartmentCategory.nodes} />

      <ProductGallery title={title} />

      <ScrollToTopButton />
    </SearchProvider>
  )
}

export const querySSG = graphql`
  query DepartmentPageQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }
    allContentfulBannerDepartmentCategory {
      nodes {
        title
        subtitle
        imageDesktop {
          url
        }
        imageMobile {
          url
        }
      }
    }
  }
`

export const getServerData = async (props: Props) => {
  const {
    params: { slug },
  } = props

  const categoryName = slug.includes('/') && slug.split('/')[1]
  const departmentName = !slug.includes('/') && slug

  try {
    const data = await axios
      .get('/api/getDepartmentOrCategory', {
        proxy: {
          protocol: 'http',
          host: 'localhost',
          port: 8000,
        },
        params: {
          departmentName,
          categoryName,
        },
      })
      .then(({ data: { value } }) => value)

    if (!data.length) {
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
