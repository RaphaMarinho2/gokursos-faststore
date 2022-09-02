import { navigate } from 'gatsby'
import { useEffect } from 'react'
import CreateUser from 'src/components/sections/CreateUser'
import { windowGlobal } from 'src/constants'

function Page() {
  useEffect(() => {
    if (windowGlobal?.localStorage.getItem('user')) navigate('/')
  }, [])

  return (
    <>
      <CreateUser />
    </>
  )
}

export default Page
