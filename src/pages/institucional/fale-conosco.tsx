import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import { mark } from 'src/sdk/tests/mark'
import InstitutionalMenu from 'src/components/sections/InstutionalMenu/InstitutionalMenu'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import { BreadcrumbJsonLd } from 'gatsby-plugin-next-seo'
import type { InstitutionalContactUsQuery } from '@generated/graphql'

const BREADCRUMB = [
  {
    item: '',
    name: 'Fale Conosco',
    position: 1,
  },
]

type Props = PageProps<InstitutionalContactUsQuery>

function Page(props: Props) {
  return (
    <>
      <BreadcrumbJsonLd itemListElements={BREADCRUMB} />
      <Breadcrumb breadcrumbList={BREADCRUMB} name="Fale Conosco" />
      <InstitutionalMenu location={props.location.pathname} />
    </>
  )
}

export const querySSG = graphql`
  query InstitutionalContactUs {
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
