import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { ParaEmpresasQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import Section from 'src/components/sections/Section'
import BannerPlanos from 'src/components/sections/BannerPlanos'
import BenefitsPlans from 'src/components/sections/BenefitsPlans'

export type Props = PageProps<ParaEmpresasQuery>
function Page(props: Props) {
  const {
    data: {
      allContentfulBannerPlanosParaEmpresas,
      allContentfulBenefitsPlansForCompany,
    },
  } = props

  return (
    <Section>
      <BannerPlanos nodes={allContentfulBannerPlanosParaEmpresas.nodes} />
      <BenefitsPlans
        title="Vantagens de fazer um plano de assinatura"
        nodes={allContentfulBenefitsPlansForCompany.nodes}
      />
    </Section>
  )
}

export const querySSG = graphql`
  query ParaEmpresas {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }
    allContentfulBannerPlanosParaEmpresas {
      nodes {
        subtitle
        title
        imageMobile {
          url
        }
        imageDesktop {
          url
        }
      }
    }

    allContentfulBenefitsPlansForCompany {
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
