import { Router } from '@reach/router'
import MyAccountMenu from 'src/components/sections/MyAccountMenu'
import MyOrders from 'src/components/sections/MyOrders'
import Section from 'src/components/sections/Section'
import WithPrivateRoute from 'src/components/sections/WithPrivateRoute/WithPrivateRoute'

const PrivateMyOrders = WithPrivateRoute(MyOrders)

export default function MyAccount() {
  return (
    <Section className="layout__content my-account">
      <MyAccountMenu />
      <Router basepath="/minha-conta" className="layout__content-full">
        <PrivateMyOrders path="/pedidos" />
      </Router>
    </Section>
  )
}
