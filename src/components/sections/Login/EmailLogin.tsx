import './style.scss'

function EmailLogin(props: any) {
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
            borderColor: props.showErrorMessage ? '#D72424' : undefined,
          }}
          placeholder="Digite seu e-mail"
          onChange={props.handleEmailChange}
        />
        <p>Senha</p>

        <input
          type="password"
          name="password"
          id="password"
          style={{
            borderColor: props.showErrorMessage ? '#D72424' : undefined,
          }}
          placeholder="Digite sua senha"
          onChange={props.handlePasswordLoginChange}
        />
      </div>
    </div>
  )
}

export default EmailLogin
