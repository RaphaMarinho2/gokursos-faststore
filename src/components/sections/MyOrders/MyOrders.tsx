import useOrders from 'src/contexts/OrdersContext/useOrders'

import './my-orders.scss'
import OrderItem from './OrderItem'
import type { OrderData } from './typings'

export default function MyOrders() {
  const { ordersData, isLoading, isError } = useOrders()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error...</div>
  }

  return (
    <div className="my-orders">
      <h3 className="my-orders__title">Pedidos</h3>
      {ordersData?.length ? (
        <div className="my-orders__content">
          <ul className="my-orders__list">
            {ordersData.map((order: OrderData) => {
              if (!order.Pedidos?.length) {
                return
              }

              return (
                <OrderItem orderData={order} key={order.Pedidos[0].OrderID} />
              )
            })}
          </ul>
        </div>
      ) : (
        <div className="my-orders__empty-content">
          <span className="empty-title">Opss!!!</span>
          <span className="empty-text">
            Você ainda não possui pedidos abertos!
          </span>
        </div>
      )}
    </div>
  )
}
