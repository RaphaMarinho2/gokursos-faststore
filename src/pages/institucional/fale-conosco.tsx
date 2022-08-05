import { mark } from 'src/sdk/tests/mark'
import InstitutionalMenu from 'src/components/sections/InstutionalMenu/InstitutionalMenu'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import ContactUs from 'src/components/sections/ContactUs'
import { BreadcrumbJsonLd } from 'gatsby-plugin-next-seo'

const BREADCRUMB = [
  {
    item: '',
    name: 'Fale Conosco',
    position: 1,
  },
]

function Page() {
  return (
    <>
      <BreadcrumbJsonLd itemListElements={BREADCRUMB} />
      <Breadcrumb breadcrumbList={BREADCRUMB} name="Fale Conosco" />
      <InstitutionalMenu />
      <ContactUs />
    </>
  )
}

Page.displayName = 'Page'
export default mark(Page)
