import { useState, useEffect } from 'react'
import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { PlanoComunicacaoTecnologiaQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import SimpleText from 'src/components/sections/SimpleText/SimpleText'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import ScrollToTopButton from 'src/components/sections/ScrollToTopButton'
import type { SearchState } from '@faststore/sdk'
import { SearchProvider, parseSearchState } from '@faststore/sdk'
import { applySearchState } from 'src/sdk/search/state'
import { ITEMS_PER_PAGE } from 'src/constants'
import ProductGallery from 'src/components/sections/ProductGallery'

export type Props = PageProps<PlanoComunicacaoTecnologiaQuery>

type ItemListType = {
  item: string
  name: string
  position: number
}

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
    data: { allContentfulPlanosTextoSimples, allContentfulPlanos },
  } = props

  const searchParams = useSearchParams(props.location)

  const itemListElement: ItemListType[] = [
    {
      item: '/planos',
      name: 'Planos',
      position: 1,
    },
    {
      item: '/planos/plano-comunicacao-tecnologia-e-negocios',
      name: 'Plano Comunição, Tecnologia e Negócios',
      position: 2,
    },
  ]

  const title = 'Conheça os planos GoKursos'

  if (!searchParams) {
    return null
  }

  const { galleryTitle } =
    allContentfulPlanos.nodes[allContentfulPlanos.nodes.length - 1]

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
        withDivisorBottom
      />

      <ProductGallery title={title} galleryTitle={galleryTitle} />

      <ScrollToTopButton />
    </SearchProvider>
  )
}

export const querySSG = graphql`
  query PlanoComunicacaoTecnologia {
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
    allContentfulPlanos {
      nodes {
        galleryTitle
      }
    }
  }
`

Page.displayName = 'Page'
export default mark(Page)
