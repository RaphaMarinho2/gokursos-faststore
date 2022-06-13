/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Popover } from '@faststore/ui'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'gatsby'
import MenuCategoria from 'src/components/icons/MenuCategoria'

import LinkItem from './LinkItem'
import type { MenuItemProps, ObjectItem, SubMenuItemType } from './types/types'

const MenuItem = ({
  item,
  indexRef,
  value,
  setValue,
  popUpActual,
  setPopUpActual,
  isTopBarVisible,
}: MenuItemProps) => {
  const ref = useRef(null)

  const [currentMenu, setCurrentMenu] = useState<SubMenuItemType>([])
  const [menuStatus, setMenuStatus] = useState<number[]>([])

  /* eslint-disable-next-line */
  const parsedLabelMenu = item.label
    .normalize('NFD')
    .replace(/[\u0300-\u036f ]/g, '')
    .toLowerCase()

  useEffect(() => {
    let newCurrentMenu = item.submenu

    // eslint-disable-next-line array-callback-return
    menuStatus.map((index: number) => {
      newCurrentMenu = newCurrentMenu[index].submenu
    })
    setCurrentMenu(newCurrentMenu)
  }, [item.submenu, menuStatus])

  const handleClick = (index: number) => {
    const newMenuStatus = [...menuStatus, index]

    setMenuStatus(newMenuStatus)
  }

  return (
    <>
      <Link
        key={indexRef}
        to={item.link}
        ref={ref}
        onMouseOver={() => {
          setValue(true)
          setPopUpActual(indexRef)
        }}
        onFocus={() => setValue(true)}
        className="menu-item"
      >
        <div className="menu-item-categoria">
          <MenuCategoria />
          <span>{item.label}</span>
        </div>
      </Link>
      {value === true && indexRef === popUpActual && (
        <Popover
          data-menu-slideup={!isTopBarVisible}
          targetRef={ref}
          data-label={parsedLabelMenu}
        >
          <div
            className="popover-external"
            key={indexRef}
            onMouseOver={() => setValue(true)}
            onFocus={() => setValue(true)}
            onMouseLeave={() => {
              setValue(false)
              setMenuStatus([])
            }}
            onBlur={() => {
              setValue(false)
              setMenuStatus([])
            }}
          >
            <div className="popover-container">
              {currentMenu.map((submenuItem: ObjectItem, index: number) => {
                return (
                  <div
                    className="link-container-border"
                    key={submenuItem.label}
                    onClick={() => handleClick(index)}
                  >
                    <LinkItem submenuItem={submenuItem} />
                  </div>
                )
              })}
            </div>
          </div>
        </Popover>
      )}
    </>
  )
}

export default MenuItem
