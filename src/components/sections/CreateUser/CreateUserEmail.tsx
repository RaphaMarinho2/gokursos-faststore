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
        disabled={!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(user)}
        type="button"
        onClick={nextStep}
      >
        Confirmar
      </button>
      <div>
        <a href="/">
          <p className="back-text">Voltar</p>
        </a>
      </div>
    </div>
  )
}

export default CreateUserEmail
