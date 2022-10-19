import { paymentIcons } from './paymentMethods'
import type { OrderData } from './typings'

import './my-orders.scss'

interface OrderPreferencesProps {
  orderDetails: OrderData
}

export default function OrderPreferences({
  orderDetails,
}: OrderPreferencesProps) {
  const paymentName = orderDetails.PaymentMethodCore?.Name
  const cardLastNumbers =
    orderDetails.Order?.PaymentMethod?.metodoPagamento === 'cartaoCredito'
      ? orderDetails.Order?.PaymentMethod?.numeroCartao
      : ''

  if (!paymentName) {
    return <></>
  }

  const showPaymentMethodText = () =>
    cardLastNumbers ? (
      <div className="text">
        {paymentIcons[`${paymentName.toLocaleUpperCase()}`]}{' '}
        {`**** **** **** ${cardLastNumbers}`}
      </div>
    ) : (
      <div className="text">
        {paymentIcons[`${paymentName.toLocaleUpperCase()}`]}
      </div>
    )

  return (
    <div className="my-order__details-preferences">
      <h4 className="title">Preferências</h4>
      <span className="subtitle">Método de pagamento</span>
      {showPaymentMethodText()}
    </div>
  )
}
