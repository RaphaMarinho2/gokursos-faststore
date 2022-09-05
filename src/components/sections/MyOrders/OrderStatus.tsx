import WarningIcon from 'src/components/icons/Warning'

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

  return <span className="order-status__text">{statusDescription}</span>
}
