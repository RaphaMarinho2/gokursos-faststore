import { BreadcrumbJsonLd } from 'gatsby-plugin-next-seo'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import MyCourses from 'src/components/sections/MyCourses'
import { mark } from 'src/sdk/tests/mark'

const BREADCRUMB = [
  {
    item: '',
    name: 'Meus Cursos',
    position: 1,
  },
]

function Page() {
  return (
    <>
      <BreadcrumbJsonLd itemListElements={BREADCRUMB} />
      <Breadcrumb breadcrumbList={BREADCRUMB} name="Meus Cursos" />
      <MyCourses />
    </>
  )
}

Page.displayName = 'Page'
export default mark(Page)
