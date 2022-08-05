import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { InstitutionalFaqQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import InstitutionalMenu from 'src/components/sections/InstutionalMenu/InstitutionalMenu'

export type Props = PageProps<InstitutionalFaqQuery>
function Page(props: Props) {
  console.info('pagina intitucional', props)

  return (
    <>
      <InstitutionalMenu />
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
