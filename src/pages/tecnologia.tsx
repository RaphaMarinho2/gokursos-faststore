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
import type { DepartmentPageQueryQuery } from '@generated/graphql'

export type Props = PageProps<DepartmentPageQueryQuery>
function Page(props: Props) {
  const {
    data: { allContentfulBannerDepartmentCategory },
  } = props

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

Page.displayName = 'Page'
export default mark(Page)
