import Button from 'src/components/ui/Button'
import EmptyState from 'src/components/ui/EmptyState'
import Icon from 'src/components/ui/Icon'

interface Props {
  /**
   * This function is called when `Start Shopping` button is clicked
   */
  onDismiss: () => void
}

function EmptyCart({ onDismiss }: Props) {
  return (
    <EmptyState>
      <header data-empty-cart-title>
        <Icon name="ShoppingCart" width={84} height={84} weight="bold" />
        <p>Seu carrinho está vazio.</p>
      </header>
      <Button onClick={onDismiss} variant="continuarComprando">
        continuar comprando
      </Button>
    </EmptyState>
  )
}

export default EmptyCart
