import { useState } from 'react'

import BackLink from './BackLink'

function CreateUserPassword(props: any) {
  const { nextStep } = props

  const [confirmPassword, setConfirmPassword] = useState('')
  const [password, setPassword] = useState('')
  const [validate, setValidate] = useState({
    hasOneUpLetter: false,
    hasOneLowLetter: false,
    hasNumber: false,
    hasEightCarc: false,
    isEqual: false,
  })

  const handleConfirmPassword = (e: any) => {
    const { value } = e.target

    setConfirmPassword(value)

    if (value === password) {
      setValidate({ ...validate, isEqual: true })
    } else {
      setValidate({ ...validate, isEqual: false })
    }
  }

  const handlePasswordChange = (e: any) => {
    const { value } = e.target

    setPassword(value)

    let passwordValidate = {
      hasOneUpLetter: false,
      hasOneLowLetter: false,
      hasNumber: false,
      hasEightCarc: false,
      isEqual: false,
    }

    if (/[0-9]/.test(value)) {
      passwordValidate = { ...passwordValidate, hasNumber: true }
    }

    if (/[a-z]/.test(value)) {
      passwordValidate = { ...passwordValidate, hasOneLowLetter: true }
    }

    if (/[A-Z]/.test(value)) {
      passwordValidate = { ...passwordValidate, hasOneUpLetter: true }
    }

    if (value.length >= 8) {
      passwordValidate = { ...passwordValidate, hasEightCarc: true }
    }

    setValidate(passwordValidate)
  }

  const handleClick = () => {
    if (Object.values(validate).every((rule) => !!rule)) {
      props.handleSubmit(nextStep, password)
    }
  }

  return (
    <div className="container-password-input">
      <h1>Cadastrar uma nova senha</h1>

      <div className="password-input">
        <p>Nova senha</p>
        <input
          type="password"
          name="password"
          id="password"
          style={{
            borderColor: props.showErrorMessage ? '#D72424' : undefined,
          }}
          placeholder="Digite sua nova senha"
          value={password}
          onChange={handlePasswordChange}
        />
        <p>Confirmar senha</p>
        <input
          className="input-user-password"
          type="password"
          name="password"
          id="password"
          style={{
            borderColor: props.showErrorMessage ? '#D72424' : undefined,
          }}
          placeholder="Digite sua nova senha"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
        {props.showErrorMessage && (
          <span>
            Falha ao cadastrar senha. Em alguns instantes, tenta novamente.
          </span>
        )}

        <div className="password-validate">
          <p
            style={{
              color:
                password.length > 0
                  ? validate.hasOneUpLetter
                    ? 'green'
                    : 'red'
                  : undefined,
            }}
          >
            ABC Uma letra maiúscula
          </p>
          <p
            style={{
              color:
                password.length > 0
                  ? validate.hasOneLowLetter
                    ? 'green'
                    : 'red'
                  : undefined,
            }}
          >
            abc Uma letra minúscula
          </p>
          <p
            style={{
              color:
                password.length > 0
                  ? validate.hasNumber
                    ? 'green'
                    : 'red'
                  : undefined,
            }}
          >
            123 Um número
          </p>
          <p
            style={{
              color:
                password.length > 0
                  ? validate.hasEightCarc
                    ? 'green'
                    : 'red'
                  : undefined,
            }}
          >
            *** 8 caracteres
          </p>
        </div>
        <button
          type="button"
          onClick={handleClick}
          disabled={!Object.values(validate).every((rule) => !!rule)}
        >
          Cadastrar nova senha
        </button>
      </div>
      <div>
        <BackLink previousStep={props.previousStep} />
      </div>
    </div>
  )
}

export default CreateUserPassword
