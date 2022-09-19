import { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import type { FC } from 'react'

import MenuItem from './MenuItem'
import './menuDesktop.scss'
import type { MenuItemType, ObjectItem } from './types/types'

interface Props {
  isTopBarVisible: boolean
  menuItems: MenuItemType
  value: boolean
  setValue: (value: boolean) => void
}

const MenuDesktop: FC<Props> = ({
  menuItems,
  isTopBarVisible,
  value,
  setValue,
}) => {
  const [popUpActual, setPopUpActual] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setValue(false))
    }

    return () => window.removeEventListener('scroll', () => setValue(false))
  }, [setValue])

  return (
    <>
      {menuItems.items.map((item: ObjectItem, index: number) => {
        return (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            {item?.submenu.length !== 0 ? (
              <MenuItem
                key={index}
                item={item}
                indexRef={index}
                value={value}
                setValue={setValue}
                popUpActual={popUpActual}
                setPopUpActual={setPopUpActual}
                isTopBarVisible={isTopBarVisible}
              />
            ) : (
              <Link className="menu-item" to={item.link}>
                {item.label}
              </Link>
            )}
          </div>
        )
      })}
    </>
  )
}

export default MenuDesktop
