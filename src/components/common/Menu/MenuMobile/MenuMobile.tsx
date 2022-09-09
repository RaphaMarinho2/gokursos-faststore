import type { FC } from 'react'
import { useState } from 'react'
import menu from 'src/components/common/Menu/mocks/menuItems.json'

import MenuBase from './MenuBase'
import MenuHeader from './MenuHeader'
import './MenuMobile.scss'

interface Props {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
  isDrawerOpen: boolean
  onCloseModal: () => void
}

const MenuMobile: FC<Props> = ({ isDrawerOpen, onCloseModal }) => {
  const json = menu.items
  const [menuStatus, setMenuStatus] = useState<number[]>([])

  const handleMenuStatus = (status: number[]) => {
    setMenuStatus(status)
  }

  return (
    <>
      {isDrawerOpen && (
        <>
          <MenuHeader
            json={json}
            onCloseModal={onCloseModal}
            menuStatus={menuStatus}
            setMenuStatus={setMenuStatus}
          />
          <div className="menu-mobile-container">
            <MenuBase
              json={json}
              menuStatus={menuStatus}
              setMenuStatus={handleMenuStatus}
            />
          </div>
        </>
      )}
    </>
  )
}

export default MenuMobile
