import { Link } from 'gatsby'
import { useRef, useState } from 'react'
import DropDownIcon from 'src/components/icons/DropDownIcon'
import useOnClickOutside from 'src/hooks/useOnClickOutside'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

import './my-account-menu.scss'

export default function MyAccountMenu() {
  const [dropdowmOpen, setDropdownOpen] = useState<boolean>(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const { isTablet } = useWindowDimensions()

  const showDropdown = () => setDropdownOpen(!dropdowmOpen)

  useOnClickOutside(mobileMenuRef, () => setDropdownOpen(false))

  if (isTablet) {
    return (
      <div className="my-account-mobile-menu" ref={mobileMenuRef}>
        <button
          className="my-account-mobile-menu__selected"
          onClick={showDropdown}
        >
          Pedidos{' '}
          <div className="dropdown-icon">
            <DropDownIcon />
          </div>
        </button>
        {dropdowmOpen && (
          <ul className="my-account-mobile-menu__links">
            <li className="my-account-mobile-menu__links-item">
              <Link className="link" to="/minha-conta/pedidos">
                Pedidos
              </Link>
            </li>
            <li className="my-account-mobile-menu__links-item">
              <button className="logout">Sair</button>
            </li>
          </ul>
        )}
      </div>
    )
  }

  return (
    <div className="my-account-menu">
      <div className="my-account-menu__greetings">
        <span className="my-account-menu__greetings-text">Olá,</span>
        <span className="my-account-menu__greetings-name">Thales!</span>
      </div>
      <nav className="my-account-menu__links">
        <Link className="my-account-menu__links-item" to="/minha-conta/pedidos">
          Pedidos
        </Link>
        <button className="my-account-menu__links-logout">Sair</button>
      </nav>
    </div>
  )
}
