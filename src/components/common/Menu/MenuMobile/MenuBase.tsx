/* eslint-disable jsx-a11y/no-static-element-interactions */

import { Link } from '@faststore/ui'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import Icon from 'src/components/ui/Icon'

import type { ObjectItem, SubMenuItemType } from './types/types'

interface IMenuBase {
  json: SubMenuItemType
  menuStatus: number[]
  setMenuStatus: (status: number[]) => void
}

const MenuBase: FC<IMenuBase> = ({ json, menuStatus, setMenuStatus }) => {
  const [currentMenu, setCurrentMenu] = useState<SubMenuItemType>([])

  useEffect(() => {
    let newCurrentMenu = json

    // eslint-disable-next-line array-callback-return
    menuStatus.map((index) => {
      newCurrentMenu = newCurrentMenu[index].submenu
    })
    setCurrentMenu(newCurrentMenu)
  }, [json, menuStatus])

  const handleClick = (index: number) => {
    const newMenuStatus = [...menuStatus, index]

    setMenuStatus(newMenuStatus)
  }

  return (
    <ul>
      {currentMenu.map(
        ({ label, submenu, link }: ObjectItem, index: number) => {
          return (
            <li key={`${label}-${index}`}>
              {submenu.length !== 0 ? (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                <div className="menu-item" onClick={() => handleClick(index)}>
                  <span>{label}</span>
                  <Icon name="CaretRight" width={24} height={24} color="#222" />
                </div>
              ) : (
                <Link href={link} className="menu-item menu-item-link">
                  {label}
                  <Icon name="CaretRight" width={24} height={24} color="#222" />
                </Link>
              )}
            </li>
          )
        }
      )}
    </ul>
  )
}

export default MenuBase
