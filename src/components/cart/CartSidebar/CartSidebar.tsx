import { List } from '@faststore/ui'
import { Badge } from 'src/components/ui/Badge'
import Button, { ButtonIcon } from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import SlideOver from 'src/components/ui/SlideOver'
import { useCart } from 'src/sdk/cart/useCart'
import { useCheckoutButton } from 'src/sdk/cart/useCheckoutButton'
import { useUI } from 'src/sdk/ui'
import { useModal } from 'src/sdk/ui/modal/Provider'

import CartItem from '../CartItem'
import EmptyCart from '../EmptyCart'
import OrderSummary from '../OrderSummary'

function CartSidebar() {
  const btnProps = useCheckoutButton()
  const cart = useCart()
  const { displayMinicart, closeMinicart } = useUI()
  const { onModalClose } = useModal()

  const { items, totalItems, isValidating, subTotal, total } = cart

  const isEmpty = items.length === 0

  return (
    <SlideOver
      isOpen={displayMinicart}
      onDismiss={closeMinicart}
      size="partial"
      direction="rightSide"
      className="cart-sidebar"
    >
      <header data-testid="cart-sidebar">
        <div className="cart-sidebar__title">
          <p className="text__lead">Meu carrinho</p>
          <Badge variant="info">{totalItems}</Badge>
        </div>
        <ButtonIcon
          data-testid="cart-sidebar-button-close"
          aria-label="Close Cart"
          icon={<Icon name="X" width={32} height={32} />}
          onClick={onModalClose}
        />
      </header>

      {isEmpty ? (
        <EmptyCart onDismiss={onModalClose} />
      ) : (
        <>
          <List>
            {items.map((item) => (
              <li key={item.id}>
                <CartItem item={item} />
              </li>
            ))}
          </List>

          <footer>
            <OrderSummary
              subTotal={subTotal}
              total={total}
              numberOfItems={totalItems}
              checkoutButton={
                <Button variant="finalizarCompra" {...btnProps}>
                  {isValidating ? 'Carregando...' : 'Finalizar compra'}
                </Button>
              }
            />
          </footer>
        </>
      )}
    </SlideOver>
  )
}

export default CartSidebar
