// import aes from 'js-crypto-aes'
import { List } from '@faststore/ui'
import { useState } from 'react'
import CryptoJS from 'crypto-js'
import { Badge } from 'src/components/ui/Badge'
import Button, { ButtonIcon } from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import SlideOver from 'src/components/ui/SlideOver'
import { windowGlobal } from 'src/constants'
import { useCart } from 'src/sdk/cart/useCart'
// import { useCheckoutButton } from 'src/sdk/cart/useCheckoutButton'
import { useUI } from 'src/sdk/ui'
import { useModal } from 'src/sdk/ui/modal/Provider'

import CartItem from '../CartItem'
import EmptyCart from '../EmptyCart'
import OrderSummary from '../OrderSummary'

function CartSidebar() {
  // const btnProps = useCheckoutButton()
  const cart = useCart()
  const { displayMinicart, closeMinicart } = useUI()
  const { onModalClose } = useModal()

  const { items, totalItems, subTotal, total } = cart
  const [isValidating, setIsValidating] = useState<boolean>(false)

  const isEmpty = items.length === 0

  const { email } = JSON.parse(windowGlobal?.localStorage.getItem('user') ?? '')

  const cartData = {
    email,
    products: [items],
  }

  const handleSendItemCheckout = () => {
    setIsValidating(true)
    setTimeout(() => {
      setIsValidating(false)
    }, 3000)

    const serializedCartData = JSON.stringify(cartData)
    const iv = { words: [0, 0, 0, 0], sigBytes: 16 } as CryptoJS.lib.WordArray
    const key = CryptoJS.enc.Utf8.parse(process.env.GATSBY_CART_KEY ?? '')

    const encrypted = CryptoJS.AES.encrypt(serializedCartData, key, {
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
      iv,
    })

    // eslint-disable-next-line no-console
    console.log('IV -->', iv)

    // eslint-disable-next-line no-console
    console.log('ENC -->', encrypted.toString())
    const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
      iv,
    })

    // eslint-disable-next-line no-console
    console.log('DEC -->', decrypted.toString(CryptoJS.enc.Utf8))

    if (!windowGlobal) {
      return
    }

    windowGlobal.location.href = `https://www.gokursos.com.br/checkout?cart=${encrypted.toString()}`
  }

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
          icon={<Icon name="X" width={19} height={19} />}
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
                <Button
                  variant="finalizarCompra"
                  onClick={handleSendItemCheckout}
                >
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
