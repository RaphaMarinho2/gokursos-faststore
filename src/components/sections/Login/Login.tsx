import axios from 'axios'
import { Link, navigate } from 'gatsby'
import React, { useState } from 'react'
import { ButtonLink } from 'src/components/ui/Button'
import { windowGlobal } from 'src/constants'

import EmailLogin from './EmailLogin'

function Login() {
  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailLogin(e.target.value)
  }

  const handlePasswordLoginChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordLogin(e.target.value)
  }

  const handleSubmitLogin = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/login', {
        email: emailLogin,
        passcode: passwordLogin,
        isPin: false,
        isNew: false,
        isEdit: false,
      })

      navigate('/')
      windowGlobal?.localStorage.setItem(
        'user',
        JSON.stringify({ token: response.data.Token.Token, email: emailLogin })
      )
    } catch (error) {
      setShowErrorMessage(true)
    }
  }

  return (
    <div className="container-form-login">
      <EmailLogin
        handleEmailChange={handleEmailChange}
        handlePasswordLoginChange={handlePasswordLoginChange}
        showErrorMessage={showErrorMessage}
      />
      <div className="container-login">
        {showErrorMessage && (
          <span className="error-message">Email ou senha incorretos</span>
        )}
        <Link className="forget-password" to="/edit-password">
          <p>Esqueceu a senha?</p>
        </Link>
        <div className="button-login">
          <button type="button" onClick={handleSubmitLogin}>
            Entrar
          </button>
          <ButtonLink to="/register">Cadastre-se</ButtonLink>
        </div>
        <Link className="back-text" to="/">
          Voltar
        </Link>
      </div>
    </div>
  )
}

export default Login
