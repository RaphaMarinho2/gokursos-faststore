import type { ChangeEvent } from 'react'
import { useState } from 'react'
import ReactModal from 'react-modal'

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

  const submit = () => {
    if (!email) {
      setIsValidEmail(false)

      return
    }

    submitFn()
  }

  return (
    <ReactModal style={CUSTOM_STYLES} {...props}>
      <div className="email-modal">
        <div className="email-modal__header">
          <button
            className="email-modal__close-button"
            onClick={props.onRequestClose}
          >
            X
          </button>
        </div>
        <div className="email-modal__content">
          <h2 className="email-modal__content-title">
            PARA FINALIZAR A COMPRA, INFORME SEU E-MAIL
          </h2>
          <div className="email-modal__content-input">
            <input value={email} onChange={onChangeEmail} />
            {!isValidEmail ? <span>*Campo obrigatório</span> : <></>}
            <button onClick={submit}>Continuar</button>
          </div>
        </div>
      </div>
    </ReactModal>
  )
}
