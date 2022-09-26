import { lazy, Suspense, useState } from 'react'
import Footer from 'src/components/common/Footer'
import Navbar from 'src/components/common/Navbar'
import Toast from 'src/components/common/Toast'
import { useUI } from 'src/sdk/ui'
import type { PropsWithChildren } from 'react'
import 'src/styles/pages/layout.scss'

import Topbar from './components/common/TopBar'
import Newletter from './components/sections/Newletter'
import LoginSidebar from './components/LoginSidebar'

const CartSidebar = lazy(() => import('src/components/cart/CartSidebar'))

function Layout({ children }: PropsWithChildren<unknown>) {
  const { displayMinicart } = useUI()
  const [displaySidebar, setDisplaySidebar] = useState(false)

  return (
    <>
      <div id="layout">
        <Topbar />

        <Navbar setDisplaySidebar={setDisplaySidebar} />

        <main>{children}</main>

        <Newletter />

        <Footer />

        <Toast />

        <LoginSidebar
          displaySidebar={displaySidebar}
          setDisplaySidebar={setDisplaySidebar}
        />

        {displayMinicart && (
          <Suspense fallback={null}>
            <CartSidebar />
          </Suspense>
        )}
      </div>
    </>
  )
}

export default Layout
