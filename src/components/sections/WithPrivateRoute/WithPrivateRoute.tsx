import { navigate } from 'gatsby'
import type { ComponentType } from 'react'

interface PrivateComponentProps {
  path?: string
}

export default function WithPrivateRoute<T>(Component: ComponentType<T>) {
  const PrivateComponent = ({ path, ...props }: PrivateComponentProps) => {
    if (!isLoggedIn() && path !== '/login') {
      navigate('/login')

      return null
    }

    return <Component {...(props as T)} />
  }

  return PrivateComponent
}

function isLoggedIn() {
  const userData = JSON.parse(localStorage.getItem('user') ?? '{}')

  return !!userData?.token
}
