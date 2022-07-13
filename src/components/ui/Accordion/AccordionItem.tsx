import { forwardRef } from 'react'
import {
  Icon as UIIcon,
  AccordionItem as UIAccordionItem,
  AccordionPanel as UIAccordionPanel,
  AccordionButton as UIAccordionButton,
} from '@faststore/ui'
import type { AccordionItemProps } from '@faststore/ui'
import { ButtonIcon } from 'src/components/ui/Button'
import AccordionUp from 'src/components/icons/AccordionUp'
import AccordionDown from 'src/components/icons/AccordionDown'

interface Props extends AccordionItemProps {
  /**
   * Attribute to check whether the item is expanded or not.
   */
  isExpanded: boolean
  /**
   * Label for Accordion button
   */
  buttonLabel?: string
}

const AccordionItem = forwardRef<HTMLDivElement, Props>(function AccordionItem(
  {
    children,
    isExpanded,
    index = 0,
    buttonLabel = '',
    testId = 'store-accordion-item',
    ...otherProps
  },
  ref
) {
  return (
    <UIAccordionItem
      ref={ref}
      index={index}
      data-testid={`${testId}-item`}
      {...otherProps}
    >
      <UIAccordionButton
        className="text__title-subsection"
        data-testid={`${testId}-button`}
      >
        {buttonLabel}
        <UIIcon
          data-testid={`${testId}-button-icon`}
          component={
            <>
              <ButtonIcon
                data-icon={isExpanded ? 'expanded' : true}
                data-fs-button-menu
                icon={<AccordionUp />}
                aria-label="Abrir menu"
                className="btn-drawer-menu"
              />

              <ButtonIcon
                data-icon={isExpanded ? true : 'collapsed'}
                data-fs-button-menu
                icon={<AccordionDown />}
                aria-label="Abrir menu"
                className="btn-drawer-menu"
              />
            </>
          }
        />
      </UIAccordionButton>
      <UIAccordionPanel data-testid={`${testId}-panel`}>
        {children}
      </UIAccordionPanel>
    </UIAccordionItem>
  )
})

export default AccordionItem
