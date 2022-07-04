import { useEffect, useState } from 'react'
import Icon from 'src/components/ui/Icon'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import { Button } from '@faststore/ui'

import type { UIButtonProps } from '../../ui/Button'

import './scroll-to-top-button.scss'

interface ScrollToTopButtonProps {
  iconMobile?: UIButtonProps['icon']
  iconDesktop?: UIButtonProps['icon']
}

function ScrollToTopButton({
  iconMobile = <Icon name="CaretUp" width={12} height={12} weight="bold" />,
  iconDesktop = <Icon name="CaretUp" width={20} height={20} weight="bold" />,
}: ScrollToTopButtonProps) {
  const [visibleTop, setVisibleTop] = useState(false)
  const { isTablet } = useWindowDimensions()

  function useScroll(callback: () => void): void {
    useEffect(() => {
      window?.addEventListener('scroll', callback)

      return () => {
        window?.removeEventListener('scroll', callback)
      }
    }, [callback])
  }

  useScroll(() => {
    const topPage = function checkIsPageTop() {
      return window.scrollY === 0
    }

    setVisibleTop(topPage)
  })

  return (
    <section className="scroll-to-top-button layout__content">
      <div
        className={`scroll-to-top-button__content ${
          visibleTop ? 'visible-top' : 'hidden-top'
        }`}
      >
        <Button onClick={() => window.scrollTo(0, 0)}>
          {isTablet ? iconMobile : iconDesktop}
        </Button>
      </div>
    </section>
  )
}

export default ScrollToTopButton
