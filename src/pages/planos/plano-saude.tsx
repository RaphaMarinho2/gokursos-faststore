import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { PlanoSaudeQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import SimpleText from 'src/components/sections/SimpleText/SimpleText'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import Section from 'src/components/sections/Section'
import MultiRangeSlider from 'src/components/sections/MulRangeSlider'

type ItemListType = {
  item: string
  name: string
  position: number
}

export type Props = PageProps<PlanoSaudeQuery>

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
      item: '/planos/plano-saude',
      name: 'Plano Saúde',
      position: 2,
    },
  ]

  const title = 'Conheça os planos GoKursos'
  const priceByApi = {
    min: 1.0,
    max: 100.0,
  }

  return (
    <Section>
      <Breadcrumb breadcrumbList={itemListElement} name={title} />
      <SimpleText
        textReceived={allContentfulPlanosTextoSimples}
        className="text-banner-bottom"
      />
      <MultiRangeSlider
        min={priceByApi.min}
        max={priceByApi.max}
        onChange={({ min, max }) => console.info(`min = ${min}, max = ${max}`)}
      />
    </Section>
  )
}

export const querySSG = graphql`
  query PlanoSaude {
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
