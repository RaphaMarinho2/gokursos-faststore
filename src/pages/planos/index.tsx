import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { PlanosQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import Section from 'src/components/sections/Section'
import BenefitsPlans from 'src/components/sections/BenefitsPlans'
import SimpleText from 'src/components/sections/SimpleText/SimpleText'
import BannerPlanos from 'src/components/sections/BannerPlanos'
import CardPlanos from 'src/components/sections/CardPlanos/CardPlanos'

export type Props = PageProps<PlanosQuery>
function Page(props: Props) {
  const {
    data: {
      allContentfulBenefitsPlans,
      allContentfulPlanosTextoSimples,
      allContentfulBannerPlanosDeAssinatura,
      allContentfulPlanos,
    },
  } = props

  return (
    <Section>
      <BannerPlanos nodes={allContentfulBannerPlanosDeAssinatura.nodes} />
      <SimpleText
        textReceived={allContentfulPlanosTextoSimples}
        className="text-banner-bottom"
      />
      <BenefitsPlans
        title="Vantagens de fazer um plano de assinatura"
        nodes={allContentfulBenefitsPlans.nodes}
      />
      <CardPlanos nodes={allContentfulPlanos.nodes} />
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
    allContentfulBannerPlanosDeAssinatura {
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
    allContentfulPlanos {
      nodes {
        texto {
          texto
        }
        textoBotao
        titulo
        promocao
        preco
        saibaMais
        slug
      }
    }
  }
`

Page.displayName = 'Page'
export default mark(Page)
