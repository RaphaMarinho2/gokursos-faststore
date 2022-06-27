import BubbleLinks from '@acctglobal/bubblelinks'

import './styles.scss'

interface BestCoursesProps {
  title?: string
  subtitle?: string
  nodes: Array<{
    name: string
    slug: string
    image: {
      url: string
    }
  }>
}

interface BestCoursesModifyProps extends Omit<BestCoursesProps, 'nodes'> {
  nodes: Array<{
    name: string | null
    slug: string | null
    image: {
      url: string | null
    } | null
  }>
}

const BestCourses = ({ title, subtitle, nodes }: BestCoursesProps) => {
  return (
    <section className="best-courses">
      {title && subtitle && (
        <>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </>
      )}
      <BubbleLinks
        bubbleLinks={nodes.map((category) => {
          return {
            name: category.name,
            link: category.slug,
            img: category.image?.url,
          }
        })}
      />
    </section>
  )
}

export default BestCourses
