import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { InstitutionalFormPaymentQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import InstitutionalFormPayment from 'src/components/sections/InstitutionalFormPayment'

export type Props = PageProps<InstitutionalFormPaymentQuery>
function Page(props: Props) {
  return (
    <>
      <InstitutionalFormPayment location={props.location.pathname} />
    </>
  )
}

export const querySSG = graphql`
  query InstitutionalFormPayment {
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
