import { Link } from 'gatsby'

import './my-account-menu.scss'

export default function MyAccountMenu() {
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
