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

  if (!paymentName) {
    return <></>
  }

  return (
    <div className="my-order__details-preferences">
      <h4 className="title">Preferências</h4>
      <span className="subtitle">Método de pagamento</span>
      {paymentIcons[`${paymentName.toLocaleUpperCase()}`]}
    </div>
  )
}
