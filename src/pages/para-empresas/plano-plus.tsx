import { useState, useEffect } from 'react'
import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { PlanoPlusEmpresasQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import BuyBox from 'src/components/sections/BuyBox/BuyBox'
import ExplanationPlan from 'src/components/sections/ExplanationPlan/ExplanationPlan'
import type { SearchState } from '@faststore/sdk'
import { SearchProvider, parseSearchState } from '@faststore/sdk'
import { applySearchState } from 'src/sdk/search/state'
import { ITEMS_PER_PAGE } from 'src/constants'
import ProductGallery from 'src/components/sections/ProductGallery'
import AccordionUp from 'src/components/icons/AccordionUp'
import AccordionDown from 'src/components/icons/AccordionDown'
import ScrollToTopButton from 'src/components/sections/ScrollToTopButton'

export type Props = PageProps<PlanoPlusEmpresasQuery>

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
    data: { allContentfulPlanosForCompanies },
  } = props

  const itemListElement: ItemListType[] = [
    {
      item: '/para-empresas',
      name: 'Empresas',
      position: 1,
    },
    {
      item: '/para-empresas/plano-basico',
      name: 'Plano Plus',
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
    allContentfulPlanosForCompanies.nodes[
      allContentfulPlanosForCompanies.nodes.length - 1
    ]

  return (
    <SearchProvider
      onChange={applySearchState}
      itemsPerPage={ITEMS_PER_PAGE}
      {...searchParams}
    >
      <Breadcrumb breadcrumbList={itemListElement} name={title} />
      <BuyBox
        nodes={allContentfulPlanosForCompanies.nodes.filter(
          (node) => node.slug === '/plano-plus'
        )}
      />
      <ExplanationPlan
        nodes={allContentfulPlanosForCompanies.nodes.filter(
          (node) => node.slug === '/plano-plus'
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
  query PlanoPlusEmpresas {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }
    allContentfulPlanosForCompanies(sort: { order: ASC, fields: createdAt }) {
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
