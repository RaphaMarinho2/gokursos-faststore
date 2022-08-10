import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { InstitutionalFaqQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import InstitutionalTerms from 'src/components/sections/InstitutionalTerms/InstitutionalTerms'

export type Props = PageProps<InstitutionalFaqQuery>
function Page(props: Props) {
  console.info('pagina intitucional', props)

  return (
    <>
      <InstitutionalTerms location={props.location.pathname} />
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
