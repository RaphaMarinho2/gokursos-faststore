import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { InstitutionalCancelPolicyQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import InstitutionalCancelPolicy from 'src/components/sections/InstitutionalCancelPolicy/InstitutionalCancelPolicy'

export type Props = PageProps<InstitutionalCancelPolicyQuery>
function Page(props: Props) {
  return (
    <>
      <Breadcrumb
        breadcrumbList={[
          {
            name: 'Política de Cancelamento',
            item: '',
            position: 1,
          },
        ]}
        name="Política de Cancelamento"
      />
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
