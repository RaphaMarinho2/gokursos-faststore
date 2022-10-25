import axios from 'axios'
import { useState } from 'react'
import StepWizard from 'react-step-wizard'

import EditPasswordEmail from './EditPasswordEmail'
import UserEditPassword from './UserEditPassword'
import EditPasswordToken from './EditPasswordToken'

function EditPassword() {
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [user, setUser] = useState('')

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value)
  }

  const handleSubmit = async (callback: () => void, password: string) => {
    try {
      await axios.put('/api/editPassword', {
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
          <EditPasswordEmail handleUserChange={handleUserChange} user={user} />
          <UserEditPassword
            handleSubmit={handleSubmit}
            showErrorMessage={showErrorMessage}
          />
          <EditPasswordToken user={user} />
        </StepWizard>
      </div>
    </>
  )
}

export default EditPassword
