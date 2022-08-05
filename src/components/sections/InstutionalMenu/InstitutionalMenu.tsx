import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from '@faststore/ui'
import { useState } from 'react'
import Section from 'src/components/sections/Section'
import DropDownIcon from 'src/components/icons/DropDownIcon'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

import './style.scss'

import ArrayMenu from './menuMock.json'

const ListMenuDesk = () => {
  if (typeof window !== 'undefined') {
    const location = window?.location?.pathname

    return (
      <div className="layout__content">
        <ul>
          {ArrayMenu.map((el, index) => {
            const { text, url } = el
            const selectedClass =
              location?.indexOf(url) !== -1 ? 'selected' : ''

            return (
              <li className={selectedClass} key={index}>
                <a href={url}>{text}</a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return <></>
}

const DropDownMenu = () => {
  const menuPosition = {
    left: '0',
    right: '0',
  }

  return (
    <DropdownMenu style={menuPosition}>
      {ArrayMenu.map((el, index) => {
        const { text, url } = el

        if (index !== 0) {
          return (
            <DropdownItem key={index}>
              <a href={url}>{text}</a>
            </DropdownItem>
          )
        }

        return <></>
      })}
    </DropdownMenu>
  )
}

const InstitutionalMenu = () => {
  const { isTablet } = useWindowDimensions()

  const [isOpen, setOpen] = useState(false)

  const onDismiss = () => {
    setOpen(false)
  }

  const DropDownTop = () => {
    return (
      <div className="institutional-menu__top">
        <a href="/institucional/fale-conosco">Fale Conosco</a>
        <DropdownButton>
          <div>
            <DropDownIcon />
          </div>
        </DropdownButton>
      </div>
    )
  }

  return (
    <Section className="institutional-menu">
      {!isTablet ? (
        <ListMenuDesk />
      ) : (
        <Dropdown isOpen={isOpen} onDismiss={onDismiss} id="institutional-menu">
          <DropDownTop />
          <DropDownMenu />
        </Dropdown>
      )}
    </Section>
  )
}

export default InstitutionalMenu
