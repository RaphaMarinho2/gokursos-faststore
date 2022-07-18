import './style.scss'

interface TitleProps {
  nodes: Array<{
    subtitle: string | null
  }>
  className?: string
}

const Subtitle = ({ nodes, className }: TitleProps) => {
  return (
    <section
      className={`subtitle layout__content ${
        className ? `subtitle--${className}` : ''
      }`}
    >
      <h2
        className={`subtitle__text ${
          className ? `subtitle__text--${className}` : ''
        }`}
      >
        {nodes[0]?.subtitle}
      </h2>
    </section>
  )
}

export default Subtitle
