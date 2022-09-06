import { navigate } from 'gatsby'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'

import type { OrderData } from './typings'
import OrderStatus from './OrderStatus'
import './my-orders.scss'

interface OrdersProps {
  orderData: OrderData
}

export default function OrderItem({ orderData }: OrdersProps) {
  const orderValue = useFormattedPrice(orderData.Pedidos[0].ValorTransacionado)
  const orderDate = new Date(orderData.Pedidos[0].DataHora)

  const redirectForOrderDetails = (orderId: string) => () => {
    navigate(`/minha-conta/pedidos/${orderId}`)
  }

  return (
    <li className="my-orders__list-item">
      <div className="my-orders__list-item-info">
        <span className="title">{`Pedido #${orderData.Pedidos[0].OrderID}`}</span>
        <span className="order-date">{`${orderDate.toLocaleDateString(
          'pt-Br'
        )} às ${orderDate.toLocaleTimeString('pt-Br')}`}</span>
        <span className="order-value">{orderValue}</span>
        <span className="order-status">
          Status: <OrderStatus orderData={orderData} />
        </span>
      </div>
      <button
        className="my-orders__list-item-button"
        onClick={redirectForOrderDetails(orderData.Pedidos[0].OrderID)}
      >
        Ver detalhes do pedido
      </button>
    </li>
  )
}
