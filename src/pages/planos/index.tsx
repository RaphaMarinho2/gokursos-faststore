import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { PlanosQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import Section from 'src/components/sections/Section'
import BenefitsPlans from 'src/components/sections/BenefitsPlans'
import SimpleText from 'src/components/sections/SimpleText/SimpleText'

export type Props = PageProps<PlanosQuery>
function Page(props: Props) {
  const {
    data: { allContentfulBenefitsPlans, allContentfulPlanosTextoSimples },
  } = props

  return (
    <Section>
      <SimpleText
        textReceived={allContentfulPlanosTextoSimples}
        className="text-banner-bottom"
      />
      <BenefitsPlans
        title="Vantagens de fazer um plano de assinatura"
        nodes={allContentfulBenefitsPlans.nodes}
      />
    </Section>
  )
}

export const querySSG = graphql`
  query Planos {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }
    allContentfulBenefitsPlans(sort: { order: ASC, fields: createdAt }) {
      nodes {
        image {
          url
        }
        text {
          text
        }
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
