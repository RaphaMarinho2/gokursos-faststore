import type { ReactElement } from 'react'
import { useState } from 'react'

interface Props {
  title: string
  content: string | ReactElement
  iconDefault: ReactElement
  iconClicked: ReactElement
}

const Accordion = ({ title, iconDefault, iconClicked, content }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div data-accordion-container>
      <button data-accordion-title onClick={() => setIsVisible(!isVisible)}>
        <h2 data-accordion-title-text>{title}</h2>
        {iconDefault && <>{!isVisible ? iconDefault : iconClicked}</>}
      </button>
      {isVisible && <p data-accordion-content>{content}</p>}
    </div>
  )
}

export default Accordion
