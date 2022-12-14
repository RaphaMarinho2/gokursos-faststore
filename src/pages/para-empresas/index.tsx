import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { ParaEmpresasQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import Section from 'src/components/sections/Section'
import BannerPlanos from 'src/components/sections/BannerPlanos'
import BenefitsPlans from 'src/components/sections/BenefitsPlans'
import CardPlanos from 'src/components/sections/CardPlanos/CardPlanos'
import ContactForm from 'src/components/sections/ContactForm'

type Props = PageProps<ParaEmpresasQuery>
function Page(props: Props) {
  const {
    data: {
      allContentfulBannerPlanosParaEmpresas,
      allContentfulPlanosForCompanies,
      allContentfulBenefitsPlansForCompany,
      allContentfulContactFormulary,
      allContentfulSixReasons,
    },
  } = props

  return (
    <Section>
      <BannerPlanos nodes={allContentfulBannerPlanosParaEmpresas.nodes} />
      <BenefitsPlans
        title="Seis motivos para escolher o GoKursos"
        nodes={allContentfulSixReasons.nodes}
        className="six-reasons"
      />
      <BenefitsPlans
        title="Vantagens dos nossos planos empresariais"
        subtitle="Investir na capacitação da sua equipe é a melhor forma de manter sua empresa conectada com o futuro! O GoKursos para empresas oferece:"
        nodes={allContentfulBenefitsPlansForCompany.nodes}
      />
      <CardPlanos
        nodes={allContentfulPlanosForCompanies.nodes}
        path="para-empresas"
      />
      <ContactForm nodes={allContentfulContactFormulary.nodes} />
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
    allContentfulContactFormulary {
      nodes {
        title
        subtitle
        image {
          url
          filename
        }
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
    allContentfulSixReasons(sort: { order: ASC, fields: createdAt }) {
      nodes {
        exchangeImageInText
        text {
          text
        }
      }
    }
    allContentfulPlanosForCompanies(sort: { fields: id }) {
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
