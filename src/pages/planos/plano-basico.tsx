import { useState, useEffect } from 'react'
import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { PlanoBasicoQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import ExplanationPlan from 'src/components/sections/ExplanationPlan/ExplanationPlan'
import type { SearchState } from '@faststore/sdk'
import { SearchProvider, parseSearchState } from '@faststore/sdk'
import { applySearchState } from 'src/sdk/search/state'
import { ITEMS_PER_PAGE } from 'src/constants'
import ProductGallery from 'src/components/sections/ProductGallery'
import AccordionUp from 'src/components/icons/AccordionUp'
import AccordionDown from 'src/components/icons/AccordionDown'
import ScrollToTopButton from 'src/components/sections/ScrollToTopButton'

export type Props = PageProps<PlanoBasicoQuery>

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
  } = props

  const itemListElement: ItemListType[] = [
    {
      item: '/planos',
      name: 'Planos',
      position: 1,
    },
    {
      item: '/planos/plano-basico',
      name: 'Plano Básico',
      position: 2,
    },
  ]

  const title = 'Conheça os planos GoKursos'

  const svgIcons = {
    svg1: <AccordionUp />,
    svg2: <AccordionDown />,
  }

  const searchParams = useSearchParams(props.location)

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
      <ExplanationPlan
        nodes={allContentfulPlanos.nodes.filter(
          (node) => node.slug === '/plano-basico'
        )}
      />

      <ProductGallery
        title={title}
        forceSvg={svgIcons}
        galleryTitle={galleryTitle}
      />

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
    allContentfulPlanos(sort: { order: ASC, fields: createdAt }) {
      nodes {
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
