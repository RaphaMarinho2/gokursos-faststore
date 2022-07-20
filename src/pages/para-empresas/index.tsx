import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { ParaEmpresasQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import Section from 'src/components/sections/Section'
import BannerPlanos from 'src/components/sections/BannerPlanos'
import BenefitsPlans from 'src/components/sections/BenefitsPlans'
import CardPlanos from 'src/components/sections/CardPlanos/CardPlanos'

type Props = PageProps<ParaEmpresasQuery>
function Page(props: Props) {
  const {
    data: {
      allContentfulBannerPlanosParaEmpresas,
      allContentfulPlanosForCompanies,
      allContentfulBenefitsPlansForCompany,
    },
  } = props

  return (
    <Section>
      <BannerPlanos nodes={allContentfulBannerPlanosParaEmpresas.nodes} />
      <BenefitsPlans
        title="Vantagens dos nossos planos empresariais"
        subtitle="Investir na capacitação da sua equipe é a melhor forma de manter sua empresa conectada com o futuro! O GoKursos para empresas oferece:"
        nodes={allContentfulBenefitsPlansForCompany.nodes}
      />
      <CardPlanos
        nodes={allContentfulPlanosForCompanies.nodes}
        path="para-empresas"
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
    allContentfulPlanosForCompanies {
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
