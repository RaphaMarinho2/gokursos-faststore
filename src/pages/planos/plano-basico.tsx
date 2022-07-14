import { useState, useEffect } from 'react'
// import { useSession } from '@faststore/sdk'
import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { PlanoBasicoQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import SimpleText from 'src/components/sections/SimpleText/SimpleText'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import ScrollToTopButton from 'src/components/sections/ScrollToTopButton'
import type { SearchState } from '@faststore/sdk'
import { SearchProvider, parseSearchState } from '@faststore/sdk'
import { applySearchState } from 'src/sdk/search/state'
import { ITEMS_PER_PAGE } from 'src/constants'
import ProductGallery from 'src/components/sections/ProductGallery'

const useSearchParams = ({ href }: Location) => {
  const [params, setParams] = useState<SearchState | null>(null)

  useEffect(() => {
    const url = new URL(href)

    setParams(parseSearchState(url))
  }, [href])

  return params
}

type ItemListType = {
  item: string
  name: string
  position: number
}

export type Props = PageProps<PlanoBasicoQuery>

function Page(props: Props) {
  const {
    data: { allContentfulPlanosTextoSimples },
  } = props

  const searchParams = useSearchParams(props.location)

  const itemListElement: ItemListType[] = [
    {
      item: '/planos',
      name: 'Planos',
      position: 1,
    },
    {
      item: '/planos/plano-negocios',
      name: 'Plano Básico',
      position: 2,
    },
  ]

  const title = 'Conheça os planos GoKursos'

  const galleryTitle = 'Cursos incluídos nesse plano'

  if (!searchParams) {
    return null
  }

  return (
    <SearchProvider
      onChange={applySearchState}
      itemsPerPage={ITEMS_PER_PAGE}
      {...searchParams}
    >
      <Breadcrumb breadcrumbList={itemListElement} name={title} />

      <SimpleText
        textReceived={allContentfulPlanosTextoSimples}
        className="text-banner-bottom"
      />
      <ProductGallery title={title} galleryTitle={galleryTitle} />

      <ScrollToTopButton />
    </SearchProvider>
  )
}

export const querySSG = graphql`
  query PlanoBasico {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }
    allContentfulPlanosTextoSimples {
      nodes {
        text {
          text
        }
      }
    }
  }
`

Page.displayName = 'Page'
export default mark(Page)
