import { Price as UIPrice } from '@faststore/ui'
import { memo } from 'react'
import type { PriceProps } from '@faststore/ui'

import SROnly from '../SROnly'
import './price.scss'

type Props = PriceProps & {
  /**
   * Text for the screen readers only
   */
  SRText: string
  /**
   * Other classes that might be applied
   */
  classes?: string
}

function Prices({ classes, SRText, ...props }: Props) {
  return (
    <>
      <SROnly text={SRText} />
      <UIPrice className={`price ${classes}`} {...props} />
    </>
  )
}

export default memo(Prices)
