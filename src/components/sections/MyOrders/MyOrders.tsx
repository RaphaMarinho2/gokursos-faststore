import './my-orders.scss'

export default function MyOrders() {
  return (
    <div className="my-orders">
      <h3 className="my-orders__title">Pedidos</h3>
      <div className="my-orders__content">
        <span className="empty-title">Opss!!!</span>
        <span className="empty-text">
          Você ainda não possui pedidos abertos!
        </span>
      </div>
    </div>
  )
}
