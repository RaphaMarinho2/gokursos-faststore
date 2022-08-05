import { mark } from 'src/sdk/tests/mark'
import Section from 'src/components/sections/Section'
import InstitutionalMenu from 'src/components/sections/InstutionalMenu/InstitutionalMenu'
import { BreadcrumbJsonLd } from 'gatsby-plugin-next-seo'
import Breadcrumb from 'src/components/sections/Breadcrumb'

function Page() {
  const breadCrumb = [
    {
      item: '',
      name: 'Fale Conosco',
      position: 1,
    },
  ]

  return (
    <Section>
      <BreadcrumbJsonLd itemListElements={breadCrumb} />
      <Breadcrumb breadcrumbList={breadCrumb} name="Fale Conosco" />
      <InstitutionalMenu />
    </Section>
  )
}

Page.displayName = 'Page'
export default mark(Page)
