import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'

import type { OrderData } from './typings'

import './my-orders.scss'

interface OrderSummaryProps {
  orderDetails: OrderData
}

export default function OrderSummary({ orderDetails }: OrderSummaryProps) {
  const subtotal = useFormattedPrice(orderDetails.LiquidoTotal)
  const total = useFormattedPrice(orderDetails.TransacionadoTotal)

  return (
    <div className="my-order__details-summary">
      <h4 className="title">Resumo</h4>
      {orderDetails.LiquidoTotal ? (
        <div className="subtotal">
          <span className="text">Subtotal</span>
          <span className="text">{subtotal}</span>
        </div>
      ) : (
        <></>
      )}
      <div className="total">
        <span className="text">Total</span>
        <span className="text">{total}</span>
      </div>
    </div>
  )
}
