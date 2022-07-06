import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { PlanoNegocioQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import Section from 'src/components/sections/Section'

type ItemListType = {
  item: string
  name: string
  position: number
}

export type Props = PageProps<PlanoNegocioQuery>

function Page() {
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
  }
`

Page.displayName = 'Page'
export default mark(Page)
