import { useState } from 'react'
import HiddenPasswordIcon from 'src/components/icons/HiddenPassword'
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

  const [isPasswordHidden, setPasswordHidden] = useState<boolean>(true)

  const handlePasswordHidden = () => setPasswordHidden(!isPasswordHidden)

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
        <div className="login-input__password">
          <input
            type={isPasswordHidden ? 'password' : 'text'}
            name="password"
            id="password"
            style={{
              borderColor: showErrorMessage ? '#D72424' : undefined,
            }}
            placeholder="Digite sua senha"
            onChange={handlePasswordLoginChange}
          />
          <button className="hide-button" onClick={handlePasswordHidden}>
            <HiddenPasswordIcon isHidden={isPasswordHidden} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmailLogin
