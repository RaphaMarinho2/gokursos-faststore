// import { Link } from 'gatsby'
import SlideOver from 'src/components/ui/SlideOver'
import { windowGlobal } from 'src/constants'

import ArrowRight from './Icons'
import './style.scss'

function LoginSidebar(props: any) {
  const { displaySidebar, setDisplaySidebar } = props

  const handleClick = () => {
    windowGlobal?.localStorage.removeItem('user')
    windowGlobal?.location.reload()
  }

  const userData = JSON.parse(
    windowGlobal?.localStorage.getItem('user') ?? '{}'
  )

  return (
    <SlideOver
      isOpen={displaySidebar}
      onDismiss={() => setDisplaySidebar(false)}
      size="partial"
      direction="rightSide"
      className="login-sidebar"
    >
      <header data-testid="login-sidebar">
        <div className="login-sidebar__top">
          <div className="login-sidebar__title">
            <p className="text__lead">Voltar</p>
          </div>
          <ArrowRight
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            data-testid="login-sidebar-button-close"
            aria-label="Close login"
            onClick={() => setDisplaySidebar(false)}
          />
        </div>
        <div className="container-title-login">
          <p>Olá, {userData?.name ?? userData?.email ?? ''}</p>
        </div>
        <div className="infos-sidebar">
          <a href="/minha-conta/pedidos">
            <p className="courses-link">Meus cursos</p>
          </a>
          <a href="/minha-conta/pedidos">
            <p className="requests-link">Meus pedidos</p>
          </a>
          {/* <Link to="/minha-conta/pedidos">
            <p className="requests-link">Meus pedidos</p>
          </Link> */}
          <button onClick={handleClick} className="exit-link">
            Sair desta loja
          </button>
        </div>
      </header>
    </SlideOver>
  )
}

export default LoginSidebar
