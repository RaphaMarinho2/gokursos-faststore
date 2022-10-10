import { Link } from 'gatsby'
import './style.scss'

interface Props {
  nextStep?: () => void
  handleUserChange: (param: React.ChangeEvent<HTMLInputElement>) => void
  user: string
}

function CreateUserEmail(props: Props) {
  const { nextStep, handleUserChange, user } = props

  return (
    <div className="container-user-input">
      <h1>Por favor Informe seu e-mail</h1>
      <div className="user-input">
        <p>E-mail</p>

        <input
          type="email"
          name="user"
          id="user"
          placeholder="Digite seu e-mail"
          onChange={handleUserChange}
        />
      </div>
      <button
        disabled={!/^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/g.test(user)}
        type="button"
        onClick={nextStep}
      >
        Confirmar
      </button>
      <Link className="back-text" to="/">
        Voltar
      </Link>
    </div>
  )
}

export default CreateUserEmail
