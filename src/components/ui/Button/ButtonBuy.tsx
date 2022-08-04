import { Button as UIButton } from '@faststore/ui'
import Icon from 'src/components/ui/Icon'
import type { ButtonProps } from '@faststore/ui'

type Props = ButtonProps

function ButtonBuy({ children, ...props }: Props) {
  return (
    <UIButton
      data-fs-button
      data-store-buy-button
      data-fs-button-variant="buy"
      {...props}
    >
      <Icon name="ShoppingCart" width={24} height={24} weight="bold" />
      {children}
    </UIButton>
  )
}

export default ButtonBuy
