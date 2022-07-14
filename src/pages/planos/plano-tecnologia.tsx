import { useState, useEffect } from 'react'
import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { PlanoTecnologiaQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import SimpleText from 'src/components/sections/SimpleText/SimpleText'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import type { SearchState } from '@faststore/sdk'
import { SearchProvider, parseSearchState } from '@faststore/sdk'
import { applySearchState } from 'src/sdk/search/state'
import { ITEMS_PER_PAGE } from 'src/constants'
import ProductGallery from 'src/components/sections/ProductGallery'
import AccordionUp from 'src/components/icons/AccordionUp'
import AccordionDown from 'src/components/icons/AccordionDown'
import ScrollToTopButton from 'src/components/sections/ScrollToTopButton'

export type Props = PageProps<PlanoTecnologiaQuery>

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
    data: { allContentfulPlanosTextoSimples },
  } = props

  const itemListElement: ItemListType[] = [
    {
      item: '/planos',
      name: 'Planos',
      position: 1,
    },
    {
      item: '/planos/plano-tecnologia',
      name: 'Plano Tecnologia',
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
      <ProductGallery title={title} forceSvg={svgIcons} />

      <ScrollToTopButton />
    </SearchProvider>
  )
}

export const querySSG = graphql`
  query PlanoTecnologia {
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
