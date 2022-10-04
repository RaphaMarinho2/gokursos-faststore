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
    hasSpecialCharacter: false,
    isEqual: false,
  })

  const validations = [
    {
      label: 'Uma letra maiúscula',
      example: 'ABC',
      verification: validate.hasOneUpLetter,
    },
    {
      label: 'Uma letra minúscula',
      example: 'abc',
      verification: validate.hasOneLowLetter,
    },
    {
      label: 'Um número',
      example: '123',
      verification: validate.hasNumber,
    },

    {
      label: 'Um caracter especial',
      example: '@#%',
      verification: validate.hasSpecialCharacter,
    },
    {
      label: 'No mínimo 8 caracteres',
      example: '***',
      verification: validate.hasEightCarc,
    },
    {
      label: 'As senhas devem ser iguais',
      example: '',
      verification: validate.isEqual,
    },
  ]

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
      hasSpecialCharacter: false,
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

    if (/\W|_/.test(value)) {
      passwordValidate = { ...passwordValidate, hasSpecialCharacter: true }
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

          {validations.map((validation) => (
            <p
              key={validation.label}
              className="password-required"
              style={{
                color:
                  password.length > 0
                    ? validation.verification
                      ? 'green'
                      : 'red'
                    : undefined,
              }}
            >
              <span>{validation.example}</span>
              <span>{validation.label}</span>
            </p>
          ))}
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
