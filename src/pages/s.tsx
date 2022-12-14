import { SearchProvider as FSSearchProvider, useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import SROnly from 'src/components/ui/SROnly'
import { ITEMS_PER_PAGE } from 'src/constants'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type {
  SearchPageQueryQuery,
  SearchPageQueryQueryVariables,
} from '@generated/graphql'
import 'src/styles/pages/search.scss'
import { applySearchState } from 'src/sdk/search/state'
import { SearchProvider } from 'src/contexts/SearchContext/SearchContext'
import ProductGallery from 'src/components/sections/ProductGallery'
import useSearchParams from 'src/utils/useSearchParams'

export type Props = PageProps<
  SearchPageQueryQuery,
  SearchPageQueryQueryVariables,
  unknown
>

function Page(props: Props) {
  const {
    data: { site },
  } = props

  const { locale } = useSession()
  const searchParams = useSearchParams(props.location)

  const title = searchParams?.term ?? ''

  if (!searchParams) {
    return null
  }

  const encodedTerm = encodeURI(searchParams.term ?? '')

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
      <Breadcrumb name="Busca" />
      <SearchProvider
        searchParams={searchParams}
        defaultFilters={`IsActive eq true and (contains(Name, '${encodedTerm}') or contains(Department/Name, '${encodedTerm}') or contains(Category/Name, '${encodedTerm}') or contains(KeyWords, '${encodedTerm}') or contains(Brand/Name, '${encodedTerm}') or contains(Description, '${encodedTerm}') or contains(DescriptionShort, '${encodedTerm}') or contains(Especificacao/Conteudo, '${encodedTerm}') or contains(Especificacao/Objetivos, '${encodedTerm}'))`}
      >
        <ProductGallery title="Search Results" />
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

Page.displayName = 'Page'

export default mark(Page)
