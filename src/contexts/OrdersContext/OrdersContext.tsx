import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import type { OrderData } from 'src/components/sections/MyOrders/typings'

interface OrdersContextProps {
  ordersData: OrderData[]
  isLoading: boolean
  isError: boolean
}

interface OrdersProviderProps {
  children: React.ReactNode
}

export const OrdersContext = createContext<OrdersContextProps | undefined>(
  undefined
)

export default function OrdersProvider({ children }: OrdersProviderProps) {
  const [ordersData, setOrdersData] = useState<OrderData[] | []>([])
  const [isLoading, setLoading] = useState<boolean>(true)
  const [isError, setError] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    const userData =
      typeof window !== 'undefined' ? window.localStorage.getItem('user') : ''

    axios
      .post('/api/getOrders', userData ? JSON.parse(userData) : null)
      .then((resp) => setOrdersData(resp.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  const value = {
    ordersData,
    isLoading,
    isError,
  }

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  )
}
