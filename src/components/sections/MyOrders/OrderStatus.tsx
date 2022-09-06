import WarningIcon from 'src/components/icons/Warning'
import ConfirmedPaymentIcon from 'src/components/icons/ConfirmedPayment'

import type { OrderData } from './typings'
import './my-orders.scss'

interface OrderStatusProps {
  orderData: OrderData
}

export default function OrderStatus({ orderData }: OrderStatusProps) {
  const { Status: status, StatusDescription: statusDescription } = orderData

  if (status === 'payment-pending') {
    return (
      <>
        <span className="order-status__pending">{statusDescription}</span>
        <WarningIcon />
      </>
    )
  }

  if (status === 'ready-for-handling') {
    return (
      <>
        <span className="order-status__approved">Pagamento Aprovado</span>
        <ConfirmedPaymentIcon />
      </>
    )
  }

  return <span className="order-status__text">{statusDescription}</span>
}
