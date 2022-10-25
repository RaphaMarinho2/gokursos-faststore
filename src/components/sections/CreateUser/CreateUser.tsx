import axios from 'axios'
import { useState } from 'react'
import StepWizard from 'react-step-wizard'

import CreateUserEmail from './CreateUserEmail'
import CreateUserPassword from './CreateUserPassword'
import CreateUserToken from './CreateUserToken'

function CreateUser() {
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [user, setUser] = useState('')

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value)
  }

  const handleSubmit = async (callback: () => void, password: string) => {
    try {
      await axios.post('/api/createUser', {
        email: user,
        passcode: password,
      })
      callback()
    } catch (error) {
      setShowErrorMessage(true)
    }
  }

  return (
    <>
      <div className="container-form">
        <StepWizard isLazyMount>
          <CreateUserEmail handleUserChange={handleUserChange} user={user} />
          <CreateUserPassword
            handleSubmit={handleSubmit}
            showErrorMessage={showErrorMessage}
          />
          <CreateUserToken user={user} />
        </StepWizard>
      </div>
    </>
  )
}

export default CreateUser
