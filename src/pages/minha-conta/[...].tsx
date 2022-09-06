import { Router } from '@reach/router'
import MyAccountMenu from 'src/components/sections/MyAccountMenu'
import MyOrders from 'src/components/sections/MyOrders'
import OrderDetails from 'src/components/sections/MyOrders/OrderDetails'
import Section from 'src/components/sections/Section'
import WithPrivateRoute from 'src/components/sections/WithPrivateRoute/WithPrivateRoute'
import OrdersProvider from 'src/contexts/OrdersContext/OrdersContext'

const PrivateMyOrders = WithPrivateRoute(MyOrders)
const PrivateOrderDetails = WithPrivateRoute(OrderDetails)

export default function MyAccount() {
  return (
    <OrdersProvider>
      <Section className="layout__content my-account">
        <MyAccountMenu />
        <Router basepath="/minha-conta" className="layout__content-full">
          <PrivateMyOrders path="/pedidos" />
          <PrivateOrderDetails path="/pedidos/:orderId" />
        </Router>
      </Section>
    </OrdersProvider>
  )
}
