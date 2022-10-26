import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import ReactModal from 'react-modal'
import IconClose from 'src/components/icons/IconClose'
import './cart-sidebar.scss'

interface EmailModalProps extends ReactModal.Props {
  email: string
  setEmail: (email: string) => void
  submitFn: () => void
}

const CUSTOM_STYLES = {
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    height: 'fit-content',
    position: undefined,
    borderRadius: 10,
    padding: 18,
  },
}

export default function EmailModal({
  email,
  setEmail,
  submitFn,
  ...props
}: EmailModalProps) {
  const [isEmptyEmail, setIsEmptyEmail] = useState<boolean>(false)
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true)
  const onChangeEmail = (event: ChangeEvent<{ value: string }>) => {
    setIsEmptyEmail(false)
    setIsValidEmail(true)
    setEmail(event.target.value)
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()
    if (!email.trim()) {
      setIsEmptyEmail(true)

      return
    }

    const isValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/g.test(email)

    if (!isValid) {
      setIsValidEmail(false)

      return
    }

    submitFn()
  }

  const handleAfterClose = () => {
    setEmail('')
    setIsEmptyEmail(false)
    setIsValidEmail(true)
  }

  return (
    <ReactModal
      style={CUSTOM_STYLES}
      {...props}
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
      onAfterClose={handleAfterClose}
    >
      <div className="email-modal">
        <div className="email-modal__header">
          <button
            className="email-modal__close-button"
            onClick={props.onRequestClose}
          >
            <IconClose stroke="black" />
          </button>
        </div>
        <form className="email-modal__content" onSubmit={submit}>
          <h2 className="email-modal__content-title">
            Para finalizar a compra, informe seu e-mail
          </h2>
          <div className="email-modal__content-fieldset">
            <div className="input-container">
              <input
                className={
                  isEmptyEmail || !isValidEmail
                    ? 'input invalid-email'
                    : 'input'
                }
                value={email}
                placeholder="email@email.com"
                onChange={onChangeEmail}
              />
              {isEmptyEmail ? (
                <span className="error">*Campo obrigatório</span>
              ) : (
                <></>
              )}
              {!isValidEmail ? (
                <span className="error">*E-mail inválido</span>
              ) : (
                <></>
              )}
            </div>
            <button className="button" type="submit">
              Continuar
            </button>
          </div>
        </form>
      </div>
    </ReactModal>
  )
}
