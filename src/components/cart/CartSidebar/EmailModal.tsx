import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import ReactModal from 'react-modal'
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
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true)
  const onChangeEmail = (event: ChangeEvent<{ value: string }>) => {
    setIsValidEmail(true)
    setEmail(event.target.value)
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()
    if (!email.trim()) {
      setIsValidEmail(false)

      return
    }

    submitFn()
  }

  return (
    <ReactModal
      style={CUSTOM_STYLES}
      {...props}
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
    >
      <div className="email-modal">
        <div className="email-modal__header">
          <button
            className="email-modal__close-button"
            onClick={props.onRequestClose}
          >
            X
          </button>
        </div>
        <form className="email-modal__content" onSubmit={submit}>
          <h2 className="email-modal__content-title">
            Para finalizar a compra, informe seu e-mail
          </h2>
          <div className="email-modal__content-fieldset">
            <div className="input-container">
              <input
                type="email"
                className={isValidEmail ? 'input' : 'input invalid-email'}
                value={email}
                placeholder="email@email.com"
                onChange={onChangeEmail}
              />
              {!isValidEmail ? (
                <span className="error">*Campo obrigatório</span>
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
