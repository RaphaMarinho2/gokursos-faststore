import { navigate } from 'gatsby'
import { useEffect } from 'react'
import EditPassoword from 'src/components/sections/EditPassoword'
import { windowGlobal } from 'src/constants'

function Page() {
  useEffect(() => {
    if (windowGlobal?.localStorage.getItem('user')) navigate('/')
  }, [])

  return (
    <>
      <EditPassoword />
    </>
  )
}

export default Page
