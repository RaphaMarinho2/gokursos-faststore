import { Dropdown } from '@faststore/ui'
import { useState, useEffect } from 'react'

import './style.scss'

const InstitutionalMenu = () => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [])

  const onDismiss = () => {
    setOpen(false)
  }

  return (
    <Dropdown isOpen={isOpen} onDismiss={onDismiss}>
      <ul>
        <li>
          <a href="/fale-conosco">Fale Conosco</a>
        </li>
        <li>
          <a href="/perguntas-frequentes">Perguntas Frequentes</a>
        </li>
        <li>
          <a href="/quem-somos">Quem somos</a>
        </li>
        <li>
          <a href="/formas-de-pagamento">Formas de Pagamento</a>
        </li>
        <li>
          <a href="/termos-de-uso">Termos de Uso</a>
        </li>
        <li>
          <a href="/seguranca-e-privacidade">Segurança e Privacidade</a>
        </li>
      </ul>
    </Dropdown>
  )
}

export default InstitutionalMenu
