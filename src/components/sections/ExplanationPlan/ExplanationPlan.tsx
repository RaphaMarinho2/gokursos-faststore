import './style.scss'

interface ExplanationPlanProps {
  nodes: Array<{
    slug: string | null
    texto: {
      texto: string | null
    } | null
  }>
  className?: string
}

const ExplanationPlan = ({ nodes, className }: ExplanationPlanProps) => {
  return (
    <section
      className={`explanation-plan layout__content ${
        className ? `explanation-plan--${className}` : ''
      }`}
    >
      <p
        className={`explanation-plan__text ${
          className ? `explanation-plan__text--${className}` : ''
        }`}
      >
        {nodes[0]?.texto?.texto}
      </p>
    </section>
  )
}

export default ExplanationPlan
