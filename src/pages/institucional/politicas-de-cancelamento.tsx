import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { InstitutionalCancelPolicyQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import InstitutionalCancelPolicy from 'src/components/sections/InstitutionalCancelPolicy/InstitutionalCancelPolicy'

export type Props = PageProps<InstitutionalCancelPolicyQuery>
function Page(props: Props) {
  return (
    <>
      <InstitutionalCancelPolicy location={props.location.pathname} />
    </>
  )
}

export const querySSG = graphql`
  query InstitutionalCancelPolicy {
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
