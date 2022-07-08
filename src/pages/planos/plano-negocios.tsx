import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { PlanoNegocioQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import Section from 'src/components/sections/Section'
import ExplanationPlan from 'src/components/sections/ExplanationPlan'
import Subtitle from 'src/components/common/Subtitle'

type ItemListType = {
  item: string
  name: string
  position: number
}

export type Props = PageProps<PlanoNegocioQuery>

function Page(props: Props) {
  const {
    data: { allContentfulPlanos, allContentfulSignaturePageSubtitle },
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
      <ExplanationPlan
        nodes={allContentfulPlanos.nodes.filter(
          (node) => node.slug === 'plano-negocios'
        )}
      />
      <Subtitle nodes={allContentfulSignaturePageSubtitle.nodes} />
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
    allContentfulPlanos(sort: { order: ASC, fields: createdAt }) {
      nodes {
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
  }
`

Page.displayName = 'Page'
export default mark(Page)
