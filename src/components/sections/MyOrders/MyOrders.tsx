import axios from 'axios'
import { useEffect, useState } from 'react'

import './my-orders.scss'
import Order from './Order'
import type { OrderData } from './typings'

export default function MyOrders() {
  const [orderData, setOrderData] = useState<OrderData[] | []>([])

  useEffect(() => {
    const userData =
      typeof window !== 'undefined' ? window.localStorage.getItem('user') : ''

    axios
      .post('/api/getOrders', userData ? JSON.parse(userData) : null)
      .then((resp) => setOrderData(resp.data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className="my-orders">
      <h3 className="my-orders__title">Pedidos</h3>
      {orderData?.length ? (
        <div className="my-orders__content">
          <ul className="my-orders__list">
            {orderData.map((order: OrderData) => {
              if (!order.Pedidos) {
                return <></>
              }

              return <Order orderData={order} key={order.Pedidos[0].OrderID} />
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
