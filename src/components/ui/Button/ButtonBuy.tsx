import { Button as UIButton } from '@faststore/ui'
import type { ButtonProps } from '@faststore/ui'
import ShoppingCartIcon from 'src/components/icons/ShoppingCart'

type Props = ButtonProps

function ButtonBuy({ children, ...props }: Props) {
  return (
    <UIButton
      data-fs-button
      data-store-buy-button
      data-fs-button-variant="buy"
      {...props}
    >
      <ShoppingCartIcon />
      {children}
    </UIButton>
  )
}

export default ButtonBuy
