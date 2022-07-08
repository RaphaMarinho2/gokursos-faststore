import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { PlanosQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import Section from 'src/components/sections/Section'

export type Props = PageProps<PlanosQuery>

function Page() {
  return <Section />
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
  }
`

Page.displayName = 'Page'
export default mark(Page)
