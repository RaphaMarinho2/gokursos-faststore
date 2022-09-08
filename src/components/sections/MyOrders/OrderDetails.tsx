import { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import useOrders from 'src/contexts/OrdersContext/useOrders'
import AccountBackIcon from 'src/components/icons/AccountBackIcon'
import RedWarningIcon from 'src/components/icons/RedWarning'

import ProductItem from './ProductItem'
import OrderStatus from './OrderStatus'
import type { OrderData, OrderItemData } from './typings'
import OrderPreferences from './OrdersPreferences'
import OrderSummary from './OrderSummary'

import './my-orders.scss'

export default function OrderDetails() {
  const { ordersData, isLoading, isError } = useOrders()
  const [detailsLoading, setDetailsLoading] = useState<boolean>(true)
  const [orderDetails, setOrderDetails] = useState<
    OrderData | Record<string, never>
  >({})

  const location = typeof window !== 'undefined' && window.location

  useEffect(() => {
    setDetailsLoading(true)
    if (!location || isLoading) {
      return
    }

    const { pathname } = location

    const orderId = pathname.replace('/minha-conta/pedidos/', '')

    if (!orderId) {
      return
    }

    setOrderDetails(
      ordersData.reduce(
        (
          selectedOrder: OrderData | Record<string, never>,
          order: OrderData
        ) => {
          if (order.Pedidos?.length && order.Pedidos[0].OrderID === orderId) {
            selectedOrder = order
          }

          return selectedOrder
        },
        {}
      )
    )
    setDetailsLoading(false)
  }, [isLoading, location, ordersData])

  if (isLoading || detailsLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return (
      <div className="my-orders">
        <div className="my-orders__error-content">
          <RedWarningIcon width={173} height={173} />
          <h3 className="title">Ops!!!!!</h3>
          <span className="text">
            Desculpe, estamos enfrentando problemas técnicos e não conseguimos
            carregar seu pedido no momento.
          </span>
        </div>
      </div>
    )
  }

  return (
    <section className="my-order__details">
      <h3 className="my-order__details-title">Detalhes do Pedido</h3>
      <div className="my-order__details-id">{`Pedido #${orderDetails.Pedidos[0].OrderID}`}</div>
      <span className="my-order__details-text">
        {new Date(orderDetails.Pedidos[0].Data).toLocaleDateString('pt-Br')}
      </span>
      <span className="my-order__details-text my-order__details-status">
        Status: <OrderStatus orderData={orderDetails as OrderData} />
      </span>
      <ul className="my-order__details-list">
        {orderDetails.Pedidos[0].Items.map((item: OrderItemData) => (
          <ProductItem item={item} key={item.Product.LinkId} />
        ))}
      </ul>
      <OrderPreferences orderDetails={orderDetails as OrderData} />
      <OrderSummary orderDetails={orderDetails as OrderData} />
      <Link className="my-order__details-back" to="/minha-conta/pedidos">
        <AccountBackIcon />
        Voltar
      </Link>
    </section>
  )
}
