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
import type { InfoprodutorPageQueryQuery } from '@generated/graphql'
import AccordionUp from 'src/components/icons/AccordionUp'
import AccordionDown from 'src/components/icons/AccordionDown'

export type Props = PageProps<InfoprodutorPageQueryQuery>
type ItemListType = {
  item: string
  name: string
  position: number
}

function Page(props: Props) {
  const {
    data: { allContentfulBannerInfoProdutor },
  } = props

  const [bannerInfo] = allContentfulBannerInfoProdutor.nodes

  const svgIcons = {
    svg1: <AccordionUp />,
    svg2: <AccordionDown />,
  }

  const title = 'Gilberto'

  const maybeState = parseSearchState(
    new URL('https://deploy-preview-26--gokursos.netlify.app/gilberto/')
  )

  const searchParams = {
    page: maybeState?.page,
    base: maybeState?.base,
    selectedFacets: maybeState ? maybeState.selectedFacets : [],
    term: maybeState?.term ?? null,
    sort: maybeState?.sort ?? 'score_desc',
  }

  const itemListElement: ItemListType[] = [
    {
      item: '/gilberto',
      name: 'Gilberto augusto',
      position: 1,
    },
  ]

  return (
    <SearchProvider
      onChange={applySearchState}
      itemsPerPage={ITEMS_PER_PAGE}
      {...searchParams}
    >
      <Breadcrumb breadcrumbList={itemListElement} name={title} />
      <BannerCategory
        title={bannerInfo.title ?? ''}
        subtitle=" "
        imageBannerDesktop={bannerInfo.bannerImageDesktop?.url ?? ''}
        imageBannerMobile={bannerInfo.bannerImageMobile?.url ?? ''}
      />
      <ProductGallery title={title} forceSvg={svgIcons} hasFilter={false} />

      <ScrollToTopButton />
    </SearchProvider>
  )
}

export const querySSG = graphql`
  query infoprodutorPageQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }
    allContentfulBannerInfoProdutor {
      nodes {
        title
        bannerImageDesktop {
          url
        }
        bannerImageMobile {
          url
        }
      }
    }
  }
`

Page.displayName = 'Page'
export default mark(Page)
