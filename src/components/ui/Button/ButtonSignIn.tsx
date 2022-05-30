import usePersonQuery from 'src/sdk/person/usePersonQuery'
import { ButtonLink } from 'src/components/ui/Button'
import User from 'src/components/icons/user'

const ButtonSignIn = () => {
  const person = usePersonQuery()

  return (
    <ButtonLink
      data-fs-button-signin-link
      to={person?.id ? '/account' : '/login'}
      className="text__title-mini signin-link"
      variant="tertiary"
    >
      <User />
      <span>{person?.id ? 'My Account' : 'Entre ou cadastre-se'}</span>
    </ButtonLink>
  )
}

export default ButtonSignIn
