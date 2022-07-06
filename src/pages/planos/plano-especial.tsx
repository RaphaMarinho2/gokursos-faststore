import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { PlanoEspecialQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import SimpleText from 'src/components/sections/SimpleText/SimpleText'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import Section from 'src/components/sections/Section'

type ItemListType = {
  item: string
  name: string
  position: number
}

export type Props = PageProps<PlanoEspecialQuery>

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
      item: '/planos/plano-especial',
      name: 'Plano Especial',
      position: 2,
    },
  ]

  const title = 'Conheça os planos GoKursos'

  return (
    <Section>
      <Breadcrumb breadcrumbList={itemListElement} name={title} />
      <SimpleText
        textReceived={allContentfulPlanosTextoSimples}
        className="text-banner-bottom"
      />
    </Section>
  )
}

export const querySSG = graphql`
  query PlanoEspecial {
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
