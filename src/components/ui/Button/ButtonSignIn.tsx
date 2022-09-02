import User from 'src/components/icons/user'
import { navigate } from 'gatsby'
import './style.scss'
import { windowGlobal } from 'src/constants'

const ButtonSignIn = (props: any) => {
  return (
    <button
      data-fs-button-signin-link
      className=" signin-link"
      onClick={() =>
        !windowGlobal?.localStorage.getItem('user')
          ? navigate('/login')
          : props?.setDisplaySidebar?.(true)
      }
    >
      <User />
      <span className="login-message__bold">
        {windowGlobal?.localStorage.getItem('user')
          ? 'Meus cursos'
          : 'Entre ou Cadastre-se'}
      </span>
    </button>
  )
}

export default ButtonSignIn
