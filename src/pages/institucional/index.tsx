import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { InstitutionalQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import Section from 'src/components/sections/Section'
import InstitutionalMenu from 'src/components/sections/InstutionalMenu/InstitutionalMenu'

export type Props = PageProps<InstitutionalQuery>

function Page(props: Props) {
  return (
    <Section>
      <InstitutionalMenu location={props.location.pathname} />
    </Section>
  )
}

export const querySSG = graphql`
  query Institutional {
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
