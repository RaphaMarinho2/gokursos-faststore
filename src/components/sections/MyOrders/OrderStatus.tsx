import type { OrderData } from './typings'
import './my-orders.scss'

interface OrderStatusProps {
  orderData: OrderData
}

export default function OrderStatus({ orderData }: OrderStatusProps) {
  const { StatusDescription: statusDescription } = orderData

  return <span className="order-status__text">{statusDescription}</span>
}
