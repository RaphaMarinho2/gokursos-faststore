import type { ReactNode } from 'react'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

import Carousel from '../Carousel'

import './styles.scss'

interface Props {
  children: ReactNode
  title?: string
  pretitle?: string
  withDivisor?: boolean
  hasArrows?: boolean
  qtyMobile?: number
  qtyTablet?: number
  qtyDesk?: number
  autoPlay?: boolean
  timeoutAutoPlay?: number
}

function ImageShelf({
  children,
  title,
  pretitle,
  withDivisor,
  hasArrows,
  qtyMobile,
  qtyTablet,
  qtyDesk,
  autoPlay,
  timeoutAutoPlay,
}: Props) {
  const { isMobile, isTablet } = useWindowDimensions()

  const mobileShelfQty = qtyMobile ?? 2
  const tabletShelfQty = qtyTablet ?? 4
  const deskShelfQty = qtyDesk ?? 5
  const shelfItemQuantity = isMobile
    ? mobileShelfQty
    : isTablet
    ? tabletShelfQty
    : deskShelfQty

  const arrowStyle = {
    isVisible: hasArrows,
    iconColor: '#004E98',
    style: {
      height: isTablet ? 30 : 34,
      margin: 0,
      padding: 0,
      width: isTablet ? 28 : 32,
      background: '#FFFFFF',
      boxShadow: '2px 1px 15px rgba(0, 0, 0, 0.15)',
    },
  }

  return (
    <div
      className={`component-shelf-container layout__section
      ${withDivisor ? 'section__divisor' : ''}`}
    >
      {pretitle && <h4 className="pretitle">{pretitle}</h4>}
      {title && <h3 className="title">{title}</h3>}
      <Carousel
        hasAutomaticNavigation={autoPlay}
        timeoutNavigationAutomatic={timeoutAutoPlay}
        arrow={arrowStyle}
        qtyItems={shelfItemQuantity}
        gapItems={5}
      >
        {children}
      </Carousel>
    </div>
  )
}

export default ImageShelf
