import BubbleLinks from '@acctglobal/bubblelinks'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import { getSrc } from 'gatsby-plugin-image'

import Section from '../Section'
import './style.scss'

interface BestCoursesProps {
  title?: string
  subtitle?: string
  nodes: Array<{
    name: string | null
    slug: string | null
    image: {
      gatsbyImageData: IGatsbyImageData
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
      gatsbyImageData: IGatsbyImageData
    }
  }>
}

const BestCourses = ({ title, subtitle, nodes }: BestCoursesProps) => {
  const nodesModified = nodes as unknown as BestCoursesModifyProps

  return (
    <Section>
      <div className="best-courses layout__content">
        {title && subtitle && (
          <>
            <h2 className="best-courses__title">{title}</h2>
            <h3 className="best-courses__subtitle">{subtitle}</h3>
          </>
        )}
        <div className="best-courses__content">
          <BubbleLinks
            bubbleLinks={nodesModified.map((category) => {
              const imageSrc = getSrc(category.image.gatsbyImageData)

              return {
                name: category.name,
                link: category.slug,
                img: imageSrc ?? '',
              }
            })}
          />
        </div>
      </div>
    </Section>
  )
}

export default BestCourses
