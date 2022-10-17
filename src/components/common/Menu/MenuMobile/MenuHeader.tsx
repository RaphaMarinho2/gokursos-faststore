import Icon from 'src/components/ui/Icon'
import { ButtonIcon } from 'src/components/ui/Button'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { windowGlobal } from 'src/constants'

import type { SubMenuItemType } from './types/types'

interface IMenuHeader {
  json: SubMenuItemType
  onCloseModal: () => void
  menuStatus: number[]
  setMenuStatus: (status: number[]) => void
}

const MenuHeader: FC<IMenuHeader> = ({
  json,
  onCloseModal,
  menuStatus,
  setMenuStatus,
}) => {
  const [currentMenuLabel, setCurrentMenuLabel] = useState('')

  const userData = JSON.parse(
    windowGlobal?.localStorage.getItem('user') ?? '{}'
  )

  useEffect(() => {
    let newCurrentMenu = json

    // eslint-disable-next-line array-callback-return
    menuStatus.map((indexMenu, index) => {
      if (index === menuStatus.length - 1) {
        setCurrentMenuLabel(newCurrentMenu[indexMenu].label)
      } else {
        newCurrentMenu = newCurrentMenu[indexMenu].submenu
      }
    })
  }, [json, menuStatus])

  const handleClick = () => {
    setMenuStatus(menuStatus.slice(0, -1))
  }

  return (
    <header className="navbar__modal-header">
      {menuStatus.length === 0 ? (
        <div className="navbar__modal-header-greetings">
          Olá, Bem-vindo!{' '}
          <span className="username">
            {userData?.name ?? userData?.email ?? ''}
          </span>
        </div>
      ) : (
        <div className="navbar__modal-submenu-header">
          <ButtonIcon
            aria-label="Voltar"
            icon={<Icon name="CaretLeft" width={22} height={22} color="#FFF" />}
            onClick={handleClick}
          />
          <h3>{currentMenuLabel}</h3>
        </div>
      )}

      <ButtonIcon
        aria-label="Close Menu"
        icon={<Icon name="X" width={20} height={20} color="#fff" />}
        onClick={onCloseModal}
      />
    </header>
  )
}

export default MenuHeader
