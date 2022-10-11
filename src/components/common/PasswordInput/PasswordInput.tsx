import type { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { useState } from 'react'
import HiddenPasswordIcon from 'src/components/icons/HiddenPassword'

import './password-input.scss'

export default function PasswordInput(
  props: Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'type'
  >
) {
  const { style, ...restProps } = props
  const [isPasswordHidden, setPasswordHidden] = useState<boolean>(true)

  const handlePasswordHidden = () => setPasswordHidden(!isPasswordHidden)

  return (
    <div className="password-input__container" style={style}>
      <input type={isPasswordHidden ? 'password' : 'text'} {...restProps} />
      <button className="hide-button" onClick={handlePasswordHidden}>
        <HiddenPasswordIcon isHidden={isPasswordHidden} />
      </button>
    </div>
  )
}
