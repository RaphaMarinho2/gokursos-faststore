import { lazy, Suspense } from 'react'
import Footer from 'src/components/common/Footer'
import Navbar from 'src/components/common/Navbar'
import Toast from 'src/components/common/Toast'
import { useUI } from 'src/sdk/ui'
import type { PropsWithChildren } from 'react'

import 'src/styles/pages/layout.scss'
import Topbar from './components/common/TopBar'

const CartSidebar = lazy(() => import('src/components/cart/CartSidebar'))

function Layout({ children }: PropsWithChildren<unknown>) {
  const { displayMinicart } = useUI()

  return (
    <>
      <div id="layout">
        <Topbar />

        <Navbar />

        <main>{children}</main>

        <Footer />

        <Toast />

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
