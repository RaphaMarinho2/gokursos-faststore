import { useRef, useState } from 'react'
import CartToggle from 'src/components/cart/CartToggle'
import SearchInput from 'src/components/common/SearchInput'
import Icon from 'src/components/ui/Icon'
import { ButtonIcon, ButtonSignIn } from 'src/components/ui/Button'
import Logo from 'src/components/icons/logo'
import SlideOver from 'src/components/ui/SlideOver'
import { mark } from 'src/sdk/tests/mark'
import { useModal } from 'src/sdk/ui/modal/Provider'
import type { SearchInputRef } from '@faststore/ui'
import MenuMobileIcon from 'src/components/icons/MenuMobileIcon'
import MenuMobile from 'src/components/common/MenuMobile'
import MenuDesktop from 'src/components/common/MenuDesktop/MenuDesktop'
import menuItems from 'src/components/common/MenuDesktop/mocks/menuItems.json'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

function Navbar(props: any) {
  const { onModalClose } = useModal()
  const searchMobileRef = useRef<SearchInputRef>(null)
  const [value, setValue] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [searchExpanded, setSearchExpanded] = useState(false)
  const { isMobile, isTablet } = useWindowDimensions()

  const handleCloseSlideOver = () => {
    onModalClose()
    setIsDrawerOpen(false)
  }

  const handlerExpandSearch = () => {
    setSearchExpanded(true)
    searchMobileRef.current?.inputRef?.focus()
  }

  return (
    <header
      className={
        searchExpanded
          ? 'navbar layout__content-full search-expanded'
          : 'navbar layout__content-full'
      }
    >
      <div className="navbar__header layout__content">
        <section className="navbar__row">
          {!searchExpanded && (
            <>
              <ButtonIcon
                data-fs-button-menu
                icon={<MenuMobileIcon />}
                aria-label="Abrir menu"
                className="btn-drawer-menu"
                onClick={() => setIsDrawerOpen(true)}
              />
              <Logo />
            </>
          )}
          {!isMobile && !isTablet && <SearchInput />}
          <div
            className="navbar__buttons"
            data-store-search-expanded={searchExpanded}
          >
            {searchExpanded && (
              <ButtonIcon
                data-fs-button-collapse
                aria-label="Collapse search bar"
                icon={<Icon name="CaretLeft" width={32} height={32} />}
                onClick={() => setSearchExpanded(false)}
              />
            )}
            <SearchInput
              placeholder=""
              ref={searchMobileRef}
              testId="store-input-mobile"
              buttonTestId="store-input-mobile-button"
              onSearchClick={handlerExpandSearch}
            />
            <ButtonSignIn setDisplaySidebar={props.setDisplaySidebar} />
            <CartToggle />
          </div>
        </section>
      </div>
      <div className="nav-section">
        <div className="navbar__menu layout__content">
          <MenuDesktop
            menuItems={menuItems}
            value={value}
            setValue={setValue}
            isTopBarVisible={false}
          />
        </div>
      </div>

      <SlideOver
        isOpen={isDrawerOpen}
        onDismiss={handleCloseSlideOver}
        size="full"
        direction="leftSide"
        className="navbar__modal-content"
      >
        <div className="navbar__modal-body">
          <MenuMobile
            setIsDrawerOpen={setIsDrawerOpen}
            isDrawerOpen={isDrawerOpen}
            onCloseModal={handleCloseSlideOver}
          />

          <div className="navlinks">
            <div className="navlinks__signin">
              <ButtonSignIn />
            </div>
          </div>
        </div>
      </SlideOver>
    </header>
  )
}

Navbar.displayName = 'Navbar'

export default mark(Navbar)
