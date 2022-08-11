import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { InstitutionalPrivacyQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import InstitutionalPrivacy from 'src/components/sections/InstitutionalPrivacy/InstitutionalPrivacy'

export type Props = PageProps<InstitutionalPrivacyQuery>
function Page(props: Props) {
  return (
    <>
      <InstitutionalPrivacy location={props.location.pathname} />
    </>
  )
}

export const querySSG = graphql`
  query InstitutionalPrivacy {
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
