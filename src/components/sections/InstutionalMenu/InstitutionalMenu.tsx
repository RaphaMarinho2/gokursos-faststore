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

interface InstitutionalMenuProps {
  location: string
}

interface DropDownTopProps {
  location: string
  label: string
}

type DropDownMenuProps = Pick<InstitutionalMenuProps, 'location'>

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

const DropDownMenu = ({ location }: DropDownMenuProps) => {
  const menuPosition = {
    left: '0',
    right: '0',
  }

  return (
    <DropdownMenu style={menuPosition}>
      {ArrayMenu.map((el, index) => {
        const { text, url } = el

        if (url !== location) {
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

const DropDownTop = ({ location, label }: DropDownTopProps) => {
  return (
    <div className="institutional-menu__top">
      <a href={location}>{label}</a>
      <DropdownButton>
        <div>
          <DropDownIcon />
        </div>
      </DropdownButton>
    </div>
  )
}

const InstitutionalMenu = ({ location }: InstitutionalMenuProps) => {
  const { isTablet } = useWindowDimensions()

  const label = Object.values(ArrayMenu).filter((item) => {
    let labelText = ''
    const regex = /\/$/
    const itemLocation = location.replace(regex, '')
    const itemUrl = item.url.replace(regex, '')

    if (itemUrl === itemLocation) {
      labelText = item.text
    }

    return labelText
  })

  const valueDefault = ArrayMenu[0]?.text
  const textLabel = label[0]?.text

  const [isOpen, setOpen] = useState(false)

  const onDismiss = () => {
    setOpen(false)
  }

  return (
    <Section className="institutional-menu">
      {!isTablet ? (
        <ListMenuDesk />
      ) : (
        <Dropdown isOpen={isOpen} onDismiss={onDismiss} id="institutional-menu">
          <DropDownTop location={location} label={textLabel ?? valueDefault} />
          <DropDownMenu location={location} />
        </Dropdown>
      )}
    </Section>
  )
}

export default InstitutionalMenu
