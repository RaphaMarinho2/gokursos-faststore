import { navigate } from 'gatsby'
import { useEffect } from 'react'
import Login from 'src/components/sections/Login'
import { windowGlobal } from 'src/constants'

function Page() {
  useEffect(() => {
    if (windowGlobal?.localStorage.getItem('user')) navigate('/')
  }, [])

  return (
    <>
      <Login />
    </>
  )
}

export default Page
