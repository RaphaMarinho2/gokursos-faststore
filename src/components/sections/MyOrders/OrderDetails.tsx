import { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import useOrders from 'src/contexts/OrdersContext/useOrders'
import AccountBackIcon from 'src/components/icons/AccountBackIcon'

import OrderStatus from './OrderStatus'
import type { OrderData, OrderItemData } from './typings'

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
    return <div>Error...</div>
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
          <li className="my-order__details-item" key={item.Product.LinkId}>
            <img
              className="my-order__details-item-image"
              src={item.Product.ProductImageURL}
              alt={item.Product.Name}
            />
            <span className="my-order__details-item-name">
              {item.Product.Name}
            </span>
            <span className="my-order__details-item-price">{`${item.Quantidade} uni - ${item.ValorTransacionadoItem}`}</span>
          </li>
        ))}
      </ul>
      <div className="my-order__details-preferences">
        <h4 className="title">Preferências</h4>
        <span className="subtitle">Método de pagamento</span>
        <span className="text">
          {orderDetails.Pedidos[0].PaymentMethodCore.Name}
        </span>
      </div>
      <div className="my-order__details-summary">
        <h4 className="title">Resumo</h4>
        <div className="subtotal">
          <span className="text">Subtotal</span>
          <span className="text">{orderDetails.Pedidos[0].ValorLiquido}</span>
        </div>
        <div className="total">
          <span className="text">Total</span>
          <span className="text">
            {orderDetails.Pedidos[0].ValorTransacionado}
          </span>
        </div>
      </div>
      <Link className="my-order__details-back" to="/minha-conta/pedidos">
        <AccountBackIcon />
        Voltar
      </Link>
    </section>
  )
}
