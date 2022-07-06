import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { PlanosQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import CardPlanos from 'src/components/sections/CardPlanos'

export type Props = PageProps<PlanosQuery>
function Page(props: Props) {
  const {
    data: { allContentfulPlanos },
  } = props

  return <CardPlanos nodes={allContentfulPlanos.nodes} />
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
      }
    }
  }
`

Page.displayName = 'Page'
export default mark(Page)
