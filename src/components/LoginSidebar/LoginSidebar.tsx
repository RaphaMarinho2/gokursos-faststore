import { Link } from 'gatsby'
import SlideOver from 'src/components/ui/SlideOver'
import { windowGlobal } from 'src/constants'
import { useModal } from 'src/sdk/ui/modal/Provider'

import ArrowRight from './Icons'
import './style.scss'

function LoginSidebar(props: any) {
  const { displaySidebar, setDisplaySidebar } = props
  const { onModalClose } = useModal()

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
            onClick={onModalClose}
          />
        </div>
        <div className="container-title-login">
          <p>Olá, {userData?.name ?? userData?.email ?? ''}</p>
        </div>
        <div className="infos-sidebar">
          <Link to="/meus-cursos" onClick={onModalClose}>
            <p className="courses-link">Meus cursos</p>
          </Link>
          <Link to="/minha-conta/pedidos" onClick={onModalClose}>
            <p className="requests-link">Meus pedidos</p>
          </Link>
          <button onClick={handleClick} className="exit-link">
            Sair desta loja
          </button>
        </div>
      </header>
    </SlideOver>
  )
}

export default LoginSidebar
