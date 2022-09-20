import { useState, useEffect } from 'react'
import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { PlanoComunicacaoTecnologiaQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import BuyBox from 'src/components/sections/BuyBox/BuyBox'
import ExplanationPlan from 'src/components/sections/ExplanationPlan'
import ScrollToTopButton from 'src/components/sections/ScrollToTopButton'
import type { SearchState } from '@faststore/sdk'
import {
  SearchProvider as FSSearchProvider,
  parseSearchState,
} from '@faststore/sdk'
import { applySearchState } from 'src/sdk/search/state'
import { ITEMS_PER_PAGE } from 'src/constants'
import ProductGallery from 'src/components/sections/ProductGallery'
import AccordionUp from 'src/components/icons/AccordionUp'
import AccordionDown from 'src/components/icons/AccordionDown'
import { SearchProvider } from 'src/contexts/SearchContext/SearchContext'

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
    data: { allContentfulPlanos },
    location: { href },
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

  const svgIcons = {
    svg1: <AccordionUp />,
    svg2: <AccordionDown />,
  }

  if (!searchParams) {
    return null
  }

  const { galleryTitle } =
    allContentfulPlanos.nodes[allContentfulPlanos.nodes.length - 1]

  return (
    <FSSearchProvider
      onChange={applySearchState}
      itemsPerPage={ITEMS_PER_PAGE}
      {...searchParams}
    >
      <Breadcrumb breadcrumbList={itemListElement} name={title} />
      <BuyBox
        location={href}
        nodes={allContentfulPlanos.nodes.filter(
          (node) => node.slug === '/plano-comunicacao-tecnologia-e-negocios'
        )}
      />
      <ExplanationPlan
        nodes={allContentfulPlanos.nodes.filter(
          (node) => node.slug === '/plano-comunicacao-tecnologia-e-negocios'
        )}
      />

      <SearchProvider
        slug="/plano-comunicacao-tecnologia-e-negocios"
        searchParams={searchParams}
      >
        <ProductGallery
          title={title}
          forceSvg={svgIcons}
          galleryTitle={galleryTitle}
          hasFilter={false}
        />
      </SearchProvider>

      <ScrollToTopButton />
    </FSSearchProvider>
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
    allContentfulPlanos(sort: { order: ASC, fields: createdAt }) {
      nodes {
        textoBotao
        titulo
        preco
        slug
        bannerImageMobile {
          url
        }
        bannerImageDesktop {
          url
        }
        compartilhar {
          url
        }
        galleryTitle
        texto {
          texto
        }
        slug
      }
    }
    allContentfulSignaturePageSubtitle {
      nodes {
        subtitle
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
