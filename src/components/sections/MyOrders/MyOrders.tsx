import RedWarningIcon from 'src/components/icons/RedWarning'
import useOrders from 'src/contexts/OrdersContext/useOrders'
import SpinnerIcon from 'src/components/icons/Spinner'

import './my-orders.scss'
import OrderItem from './OrderItem'
import type { OrderData } from './typings'

export default function MyOrders() {
  const { ordersData, isLoading, isError } = useOrders()

  if (isLoading) {
    return (
      <div className="my-orders">
        <h3 className="my-orders__title">Pedidos</h3>
        <div className="my-orders__loading-content">
          <SpinnerIcon />
          <span className="text">Carregando...</span>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="my-orders">
        <div className="my-orders__error-content">
          <RedWarningIcon width={173} height={173} />
          <h3 className="title">Ops!!!!!</h3>
          <span className="text">
            Desculpe, estamos enfrentando problemas técnicos e não conseguimos
            carregar seus pedidos no momento.
          </span>
        </div>
      </div>
    )
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
