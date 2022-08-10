import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { InstitutionalTermsQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import InstitutionalTerms from 'src/components/sections/InstitutionalTerms/InstitutionalTerms'

export type Props = PageProps<InstitutionalTermsQuery>
function Page(props: Props) {
  return (
    <>
      <InstitutionalTerms location={props.location.pathname} />
    </>
  )
}

export const querySSG = graphql`
  query InstitutionalTerms {
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
