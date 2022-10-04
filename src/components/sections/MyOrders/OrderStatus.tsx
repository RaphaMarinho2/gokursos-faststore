import ConfirmedPaymentIcon from 'src/components/icons/ConfirmedPayment'
import CanceledPaymentIcon from 'src/components/icons/CanceledPayment'
import WarningIcon from 'src/components/icons/Warning'
import './my-orders.scss'

import type { OrderData } from './typings'

interface OrderStatusProps {
  orderData: OrderData
}

export default function OrderStatus({ orderData }: OrderStatusProps) {
  const {
    StatusCore: { Status: statusDescription },
  } = orderData

  if (!statusDescription) {
    return <></>
  }

  const status = statusDescription.toLocaleUpperCase()

  const isPaymentApproved =
    status === 'PAGAMENTO APROVADO' || status === 'FATURADO'

  const isPending =
    status === 'PAGAMENTO PENDENTE' || status === 'CANCELAMENTO SOLICITADO'

  const isCanceled =
    status === 'CANCELADO' || status === 'PAGAMENTO NÃO FINALIZADO'

  if (isPaymentApproved) {
    return (
      <>
        <span className="order-status__approved">{statusDescription}</span>
        <ConfirmedPaymentIcon />
      </>
    )
  }

  if (isPending) {
    return (
      <>
        <span className="order-status__pending">{statusDescription}</span>
        <WarningIcon />
      </>
    )
  }

  if (isCanceled) {
    return (
      <>
        <span className="order-status__cancel">{statusDescription}</span>
        <CanceledPaymentIcon />
      </>
    )
  }

  return <span className="order-status__text">{statusDescription}</span>
}
