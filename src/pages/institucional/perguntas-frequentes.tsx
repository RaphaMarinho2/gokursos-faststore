import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { InstitutionalFaqQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import InstitutionalFrequentQuestions from 'src/components/sections/InstitutionalFrequentQuestions'

export type Props = PageProps<InstitutionalFaqQuery>
function Page(props: Props) {
  return (
    <>
      <Breadcrumb
        breadcrumbList={[
          {
            name: 'Perguntas Frequentes',
            item: '',
            position: 1,
          },
        ]}
        name="Perguntas Frequentes"
      />
      <InstitutionalFrequentQuestions location={props.location.pathname} />
    </>
  )
}

export const querySSG = graphql`
  query InstitutionalFaq {
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
