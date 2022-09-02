import axios from 'axios'
import { navigate } from 'gatsby'
import { useState } from 'react'
import { windowGlobal } from 'src/constants'

import BackLink from './BackLink'

function CreateUserToken(props: any) {
  const [token, setToken] = useState('')
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value)
  }

  const handleSubmitToken = async (e: any) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/login', {
        email: props.user,
        passcode: token,
        isPin: true,
        isNew: true,
        isEdit: false,
      })

      windowGlobal?.localStorage.setItem(
        'user',
        JSON.stringify({ token: response.data.Token.Token, email: props.user })
      )

      navigate('/')
    } catch (error) {
      setShowErrorMessage(true)
    }
  }

  return (
    <div className="container-token-input">
      <h1>
        Agora é só informar a chave de validação enviado para:
        <p>{props.user}</p>
      </h1>
      <div className="token-input">
        <input
          type="text"
          name="code"
          id="code"
          placeholder="Chave de validação"
          style={{ borderColor: showErrorMessage ? '#D72424' : undefined }}
          onChange={handleTokenChange}
        />
      </div>
      {showErrorMessage && <span>Código inválido</span>}
      <button type="button" onClick={handleSubmitToken}>
        Continuar
      </button>
      <div>
        <BackLink previousStep={props.previousStep} />
      </div>
    </div>
  )
}

export default CreateUserToken
