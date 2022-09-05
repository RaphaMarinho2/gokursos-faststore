import { useContext } from 'react'

import { OrdersContext } from './OrdersContext'

export default function useOrders() {
  const context = useContext(OrdersContext)

  if (!context) {
    throw new Error('useOrders must be used within the OrdersProvider')
  }

  return context
}
