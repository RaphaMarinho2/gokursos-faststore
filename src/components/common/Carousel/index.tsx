import React, { Children, useEffect, useRef, useState } from 'react'

import Bullets from './components/Bullets'
import Arrows from './components/Arrows'
import { DefaultProps } from './utils/defaultProps'

interface Arrow {
  style?: Record<string, unknown>
  isVisible?: boolean
  iconColor?: string
}
interface Bullet {
  numeric?: boolean
  bulletEnableColor?: string
  bulletDisableColor?: string
  style?: Record<string, unknown>
  isVisible?: boolean
}

export interface CarouselProps {
  children: React.ReactNode
  bullet?: Bullet
  arrow?: Arrow
  qtyItems?: number
  gapItems?: number
  navigationAutomatic?: boolean
  timeoutNavigationAutomatic?: number
}

const Carousel = ({
  children,
  bullet,
  arrow,
  qtyItems,
  gapItems,
  navigationAutomatic = false,
  timeoutNavigationAutomatic = 5000,
}: CarouselProps) => {
  const arrayChildren = Children.toArray(children)
  let [bulletsQtd, setBulletsQtd] = useState<number>(0)
  const [buttonFocus, setButtonFocus] = useState<number>(0)
  let [itemWidth, setItemWidth] = useState<number>(0)
  const [pause, setPause] = useState(true)
  const [testeNavigation, setTesteNavigation] = useState<number>(0)
  const [numericBullet, setNumericBullet] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const refitem = useRef<HTMLDivElement | null>(null)
  const timeoutRef = useRef(null)

  const style = {
    bullets: {
      ...DefaultProps.styles.bullets,
      ...(bullet?.style as Record<string, unknown>),
    },
    arrows: {
      ...DefaultProps.styles.arrows,
      ...(arrow?.style as Record<string, unknown>),
    },
  }

  const currentItemDisplayed = () => {
    if (containerRef.current) {
      const totalScroll = containerRef.current.scrollWidth
      const currentScroll = containerRef.current.scrollLeft
      const { offsetWidth } = containerRef.current

      const totalItems = Math.ceil(totalScroll / offsetWidth)
      const currentItem =
        Math.round(currentScroll / (totalScroll / totalItems) - 0.3) + 1

      setNumericBullet(`${currentItem}/${totalItems}`)
    }

    return null
  }

  const focusBullets = () => {
    if (containerRef.current && refitem.current) {
      const widthItem = refitem.current.clientWidth
      const currentScroll = containerRef.current.scrollLeft
      const navigation = Math.round(currentScroll / widthItem)

      setButtonFocus(navigation)
    }

    return null
  }

  const arrowsNavigation = (position: string) => {
    if (containerRef.current && refitem.current) {
      const widthItem = refitem.current.clientWidth

      if (position === 'prev') {
        containerRef.current.scrollLeft -= widthItem
      }

      if (position === 'next') {
        containerRef.current.scrollLeft += widthItem
      }
    }

    return null
  }

  const setBullets = () => {
    if (containerRef.current && refitem.current) {
      itemWidth = refitem.current.clientWidth
      const divWidth = containerRef.current.offsetWidth
      const widthScroll = containerRef.current.scrollWidth

      bulletsQtd = Math.ceil((widthScroll - divWidth) / itemWidth)

      if (qtyItems) {
        setBulletsQtd(arrayChildren.length - qtyItems)
      } else {
        setBulletsQtd(bulletsQtd)
      }
    }

    return null
  }

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const bulletsNavigation = (n: number) => {
    if (containerRef.current && refitem.current) {
      const widthItem = refitem.current.clientWidth

      containerRef.current.scrollLeft = widthItem * n
    }
  }

  const visibleItems = (qtd: number) => {
    if (containerRef.current && refitem.current) {
      const divWidth = containerRef.current.offsetWidth
      const widthItem = divWidth / qtd

      setItemWidth(widthItem)
    }

    return null
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      currentItemDisplayed()
      setBullets()
      if (qtyItems) {
        visibleItems(qtyItems)
      }
    })
  }

  useEffect(() => {
    const automaticaNavigation = () => {
      if (pause) {
        setTimeout(() => {
          setTesteNavigation((prevIndex: number) =>
            prevIndex === bulletsQtd ? 0 : prevIndex + 1
          )

          setButtonFocus(testeNavigation + 1)
        }, timeoutNavigationAutomatic)
        bulletsNavigation(testeNavigation)
      }
    }

    resetTimeout()
    if (navigationAutomatic) {
      automaticaNavigation()
    }

    return () => {
      resetTimeout()
    }
  }, [
    bulletsQtd,
    navigationAutomatic,
    pause,
    testeNavigation,
    timeoutNavigationAutomatic,
  ])

  useEffect(() => {
    if (qtyItems) {
      visibleItems(qtyItems)
    }

    setBullets()
    currentItemDisplayed()
    containerRef.current?.addEventListener('scroll', () => {
      currentItemDisplayed()
      focusBullets()
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef])

  return (
    <>
      <div className="carousel-content" data-testid="Carousel">
        <div
          onMouseLeave={() =>
            navigationAutomatic ? setPause(true) : undefined
          }
          onMouseEnter={() =>
            navigationAutomatic ? setPause(false) : undefined
          }
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <div
            className="carousel-arrow-button-prev"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {arrow?.isVisible ? (
              <Arrows
                position="prev"
                style={style.arrows}
                iconColor={arrow.iconColor ?? '#ccc'}
                onClick={() => arrowsNavigation('prev')}
              />
            ) : (
              ''
            )}
          </div>

          <div
            ref={containerRef}
            className="carousel-container"
            style={{
              transform: 'translate3d(0, 0, 0)',
              width: '100%',
              display: ' flex',
              flexDirection: 'row',
              scrollBehavior: 'smooth',
              overflowX: 'scroll',
            }}
          >
            {arrayChildren.map((item, index) => {
              return (
                <div
                  key={index}
                  className="container-item"
                  style={{
                    minWidth: qtyItems ? `${itemWidth}px` : 'auto',
                    transition: 'all 0.5  ease-out',
                    paddingRight: `${gapItems ?? 2}px`,
                  }}
                  ref={refitem}
                >
                  {item}
                </div>
              )
            })}
          </div>

          <div
            className="carousel-arrow-button-next"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {arrow?.isVisible ? (
              <Arrows
                position="next"
                style={style.arrows}
                iconColor={arrow.iconColor ?? '#ccc'}
                onClick={() => arrowsNavigation('next')}
              />
            ) : (
              ''
            )}
          </div>
        </div>

        {bullet?.numeric && (
          <div
            className="numeric-bullets"
            style={{
              textAlign: 'center',
            }}
          >
            {numericBullet}
          </div>
        )}
        {bullet?.isVisible ? (
          <div
            className="bullets-container"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            {Array.from({ length: bulletsQtd + 1 }, (_, i) => i + 1).map(
              (_, index) => (
                <Bullets
                  className={buttonFocus === index ? 'active' : 'disable'}
                  onClick={() => {
                    bulletsNavigation(index)
                  }}
                  key={index}
                  index={index}
                  style={{
                    ...style.bullets,
                    transition: 'all 0.8s  ease-out',
                    backgroundColor: `${
                      buttonFocus === index
                        ? bullet?.bulletEnableColor ?? '#ff0000'
                        : bullet?.bulletDisableColor ?? '#ccc'
                    }`,
                  }}
                />
              )
            )}
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default Carousel
