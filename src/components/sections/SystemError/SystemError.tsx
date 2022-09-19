import Button from 'src/components/ui/Button'

import Section from '../Section'
import './system-error.scss'

interface SystenErrorProps {
  icon: string
  title: string
  subtitle: string
  textButton: string
  eventButton?: VoidFunction
}

const SystemError = (props: SystenErrorProps) => {
  const { icon, title, subtitle, textButton, eventButton } = props

  return (
    <>
      <Section className="system_error layout__content layout__section column">
        <div className="content-error">
          <img src={icon} alt={title} title={title} />
          <h1 className="titleError">{title}</h1>
          <p
            className="textError"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
          <Button className="system-error__button" onClick={eventButton}>
            {textButton}
          </Button>
        </div>
      </Section>
    </>
  )
}

export default SystemError
