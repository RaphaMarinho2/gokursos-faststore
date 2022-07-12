import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { PlanoNegocioQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import SimpleText from 'src/components/sections/SimpleText/SimpleText'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import Section from 'src/components/sections/Section'
import BuyBox from 'src/components/sections/BuyBox/BuyBox'

type ItemListType = {
  item: string
  name: string
  position: number
}

export type Props = PageProps<PlanoNegocioQuery>

function Page(props: Props) {
  const {
    data: { allContentfulPlanosTextoSimples, allContentfulPlanos },
  } = props

  const itemListElement: ItemListType[] = [
    {
      item: '/planos',
      name: 'Planos',
      position: 1,
    },
    {
      item: '/planos/plano-negocios',
      name: 'Plano Negócios',
      position: 2,
    },
  ]

  const title = 'Conheça os planos GoKursos'

  return (
    <Section>
      <h1>Plano Negocios</h1>
      <Breadcrumb breadcrumbList={itemListElement} name={title} />
      <SimpleText
        textReceived={allContentfulPlanosTextoSimples}
        className="text-banner-bottom"
      />
      <BuyBox
        nodes={allContentfulPlanos.nodes.filter(
          (node) => node.slug === '/plano-negocios'
        )}
      />
    </Section>
  )
}

export const querySSG = graphql`
  query PlanoNegocio {
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
        textoBotao
        titulo
        preco
        slug
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
