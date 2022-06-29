import BubbleLinks from '@acctglobal/bubblelinks'
import './style.scss'

interface BestCoursesProps {
  title?: string
  subtitle?: string
  nodes: Array<{
    name: string | null
    slug: string | null
    image: {
      url: string | null
    } | null
  }>
}

interface BestCoursesModifyProps {
  map(
    arg0: (category: any) => { name: string; link: string; img: string }
  ): Array<{ name?: string | undefined; link: string; img: string }>
  nodes: Array<{
    name: string
    slug: string
    image: {
      url: string
    }
  }>
}

const BestCourses = ({ title, subtitle, nodes }: BestCoursesProps) => {
  const nodesModified = nodes as unknown as BestCoursesModifyProps

  return (
    <section className="best-courses">
      {title && subtitle && (
        <>
          <h2 className="best-courses__title">{title}</h2>
          <h3 className="best-courses__subtitle">{subtitle}</h3>
        </>
      )}
      <div className="best-courses__content">
        <BubbleLinks
          bubbleLinks={nodesModified.map((category) => {
            return {
              name: category.name,
              link: category.slug,
              img: category.image?.url,
            }
          })}
        />
      </div>
    </section>
  )
}

export default BestCourses
