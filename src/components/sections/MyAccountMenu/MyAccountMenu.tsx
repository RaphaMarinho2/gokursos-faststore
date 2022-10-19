import { Link, navigate } from 'gatsby'
import { useRef, useState } from 'react'
import Modal from 'react-modal'
import DropDownIcon from 'src/components/icons/DropDownIcon'
import RedWarningIcon from 'src/components/icons/RedWarning'
import useOnClickOutside from 'src/hooks/useOnClickOutside'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

import './my-account-menu.scss'

const CUSTOM_STYLES = {
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    height: 'fit-content',
    position: undefined,
    borderRadius: 10,
  },
}

interface LogoutModalContentProps {
  setModalIsOpen: (modalIsOpen: boolean) => void
}

export default function MyAccountMenu() {
  const [dropdowmOpen, setDropdownOpen] = useState<boolean>(false)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const { isTablet } = useWindowDimensions()

  const showDropdown = () => setDropdownOpen(!dropdowmOpen)

  useOnClickOutside(mobileMenuRef, () => setDropdownOpen(false))

  const openModal = () => setModalIsOpen(true)

  const userData = JSON.parse(
    typeof window !== 'undefined'
      ? window.localStorage.getItem('user') ?? '{}'
      : '{}'
  )

  const userName = userData?.name ?? userData?.email ?? ''

  if (isTablet) {
    return (
      <>
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
                <button className="logout" onClick={openModal}>
                  Sair
                </button>
              </li>
            </ul>
          )}
        </div>
        <Modal isOpen={modalIsOpen} style={CUSTOM_STYLES}>
          <LogoutModalContent setModalIsOpen={setModalIsOpen} />
        </Modal>
      </>
    )
  }

  return (
    <>
      <div className="my-account-menu">
        <div className="my-account-menu__greetings">
          <span className="my-account-menu__greetings-text">Olá,</span>
          <span className="my-account-menu__greetings-name">{`${userName}!`}</span>
        </div>
        <nav className="my-account-menu__links">
          <Link
            className="my-account-menu__links-item"
            to="/minha-conta/pedidos"
          >
            Pedidos
          </Link>
          <button className="my-account-menu__links-logout" onClick={openModal}>
            Sair
          </button>
        </nav>
      </div>
      <Modal isOpen={modalIsOpen} style={CUSTOM_STYLES}>
        <LogoutModalContent setModalIsOpen={setModalIsOpen} />
      </Modal>
    </>
  )
}

function LogoutModalContent({ setModalIsOpen }: LogoutModalContentProps) {
  const closeModal = () => setModalIsOpen(false)

  const logout = () => {
    navigate('/')
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('user')
    }
  }

  return (
    <div className="logout-modal">
      <RedWarningIcon />
      <span className="title">Encerrar sessão</span>
      <span className="text">
        Tem certeza que deseja encerrar a sessão da sua conta?
      </span>
      <div className="buttons-container">
        <button className="exit-button" onClick={logout}>
          Sair
        </button>
        <button className="cancel-button" onClick={closeModal}>
          Cancelar
        </button>
      </div>
    </div>
  )
}
