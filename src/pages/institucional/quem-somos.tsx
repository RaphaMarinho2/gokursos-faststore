import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { InstitutionalAboutUsQuery } from '@generated/graphql'
import { mark } from 'src/sdk/tests/mark'
import AboutUs from 'src/components/sections/AboutUs/AboutUs'

export type Props = PageProps<InstitutionalAboutUsQuery>
function Page(props: Props) {
  return (
    <>
      <AboutUs location={props.location.pathname} />
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
