import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { PlanosQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import BenefitsPlans from 'src/components/sections/BenefitsPlans'

export type Props = PageProps<PlanosQuery>
function Page(props: Props) {
  const {
    data: { allContentfulBenefitsPlans },
  } = props

  return (
    <BenefitsPlans
      title="Vantagens de fazer um plano de assinatura"
      nodes={allContentfulBenefitsPlans.nodes}
    />
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
  }
`

Page.displayName = 'Page'
export default mark(Page)
