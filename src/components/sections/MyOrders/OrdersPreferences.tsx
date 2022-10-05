import type { OrderData } from './typings'

import './my-orders.scss'

interface OrderPreferencesProps {
  orderDetails: OrderData
}

export default function OrderPreferences({
  orderDetails,
}: OrderPreferencesProps) {
  const paymentMethod = orderDetails.PaymentMethodCore?.Name

  if (!paymentMethod) {
    return <></>
  }

  return (
    <div className="my-order__details-preferences">
      <h4 className="title">Preferências</h4>
      <span className="subtitle">Método de pagamento</span>
      <span className="text">{paymentMethod}</span>
    </div>
  )
}
