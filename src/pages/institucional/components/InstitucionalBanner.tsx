import Section from 'src/components/sections/Section'
import './styles.scss'

interface Props {
  text: string
}

function InstitucionalBanner({ text }: Props) {
  return (
    <Section>
      <div className="institucional-bannner">
        <p className="layout__content">{text}</p>
      </div>
    </Section>
  )
}

export default InstitucionalBanner
