import { useState } from 'react'

import BackLink from '../BackLink'

interface Props {
  nextStep?: () => void
  previousStep?: () => void
  handleSubmit: (nextStep: () => void, password: string) => void
  showErrorMessage: boolean
}

function CreateUserPassword(props: Props) {
  const { nextStep, previousStep, handleSubmit, showErrorMessage } = props

  const [confirmPassword, setConfirmPassword] = useState('')
  const [password, setPassword] = useState('')
  const [validate, setValidate] = useState({
    hasOneUpLetter: false,
    hasOneLowLetter: false,
    hasNumber: false,
    hasEightCarc: false,
    isEqual: false,
  })

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setConfirmPassword(value)

    if (value === password) {
      setValidate({ ...validate, isEqual: true })
    } else {
      setValidate({ ...validate, isEqual: false })
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      handleSubmit(nextStep as () => void, password)
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
            borderColor: showErrorMessage ? '#D72424' : undefined,
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
            borderColor: showErrorMessage ? '#D72424' : undefined,
          }}
          placeholder="Digite sua nova senha"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
        {showErrorMessage && (
          <span className="message-error-request">
            Falha ao cadastrar senha. Em alguns instantes, tenta novamente.
          </span>
        )}

        <div className="password-validate">
          <h1 className="message-required">Sua nova senha deve ter: </h1>

          <p
            className="password-required"
            style={{
              color:
                password.length > 0
                  ? validate.hasOneUpLetter
                    ? 'green'
                    : 'red'
                  : undefined,
            }}
          >
            <span>ABC </span> <span>Uma letra maiúscula</span>
          </p>
          <p
            className="password-required"
            style={{
              color:
                password.length > 0
                  ? validate.hasOneLowLetter
                    ? 'green'
                    : 'red'
                  : undefined,
            }}
          >
            <span>abc</span> <span>Uma letra minúscula</span>
          </p>
          <p
            className="password-required"
            style={{
              color:
                password.length > 0
                  ? validate.hasNumber
                    ? 'green'
                    : 'red'
                  : undefined,
            }}
          >
            <span>123</span> <span>Um número</span>
          </p>
          <p
            className="password-required"
            style={{
              color:
                password.length > 0
                  ? validate.hasEightCarc
                    ? 'green'
                    : 'red'
                  : undefined,
            }}
          >
            <span>***</span> <span>No mínimo 8 caracteres</span>
          </p>
          <p
            style={{
              color:
                password.length > 0
                  ? validate.isEqual
                    ? 'green'
                    : 'red'
                  : undefined,
            }}
          >
            As senhas devem ser iguais
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
        <BackLink previousStep={previousStep} />
      </div>
    </div>
  )
}

export default CreateUserPassword
