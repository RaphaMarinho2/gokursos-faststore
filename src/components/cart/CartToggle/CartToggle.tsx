import Cart from 'src/components/icons/cart'
import { ButtonIcon } from 'src/components/ui/Button'
import { useCartToggleButton } from 'src/sdk/cart/useCartToggleButton'

function CartToggle() {
  const btnProps = useCartToggleButton()

  return (
    <ButtonIcon
      data-fs-button-cart="true"
      aria-label={`Cart with ${btnProps['data-items']} items`}
      icon={<Cart />}
      {...btnProps}
    />
  )
}

export default CartToggle
