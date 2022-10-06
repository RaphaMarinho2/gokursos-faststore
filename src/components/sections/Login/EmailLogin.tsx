import PasswordInput from 'src/components/common/PasswordInput'
import './style.scss'

interface Props {
  showErrorMessage?: boolean
  handleEmailChange: (param: React.ChangeEvent<HTMLInputElement>) => void
  handlePasswordLoginChange: (
    param: React.ChangeEvent<HTMLInputElement>
  ) => void
}

function EmailLogin(props: Props) {
  const { handleEmailChange, handlePasswordLoginChange, showErrorMessage } =
    props

  return (
    <div className="container-login">
      <h1>Entrar com e-mail e senha</h1>
      <div className="login-input">
        <p>E-mail</p>

        <input
          type="text"
          name="email"
          id="email"
          style={{
            borderColor: showErrorMessage ? '#D72424' : undefined,
          }}
          placeholder="Digite seu e-mail"
          onChange={handleEmailChange}
        />
        <p>Senha</p>
        <PasswordInput
          name="password"
          style={{
            border: showErrorMessage ? '1px solid #D72424' : undefined,
          }}
          placeholder="Digite sua senha"
          onChange={handlePasswordLoginChange}
        />
      </div>
    </div>
  )
}

export default EmailLogin
