import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { InstitutionalAboutUsQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import InstitutionalAboutUs from 'src/components/sections/InstitutionalAboutUs/InstitutionalAboutUs'

export type Props = PageProps<InstitutionalAboutUsQuery>
function Page(props: Props) {
  console.info('pagina intitucional', props)

  return (
    <>
      <InstitutionalAboutUs location={props.location.pathname} />
    </>
  )
}

export const querySSG = graphql`
  query InstitutionalAboutUs {
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
