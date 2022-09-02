import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import { List } from '@faststore/ui'
import { useEffect, useState, useRef } from 'react'
import ProductShelf from 'src/components/product/ProductShelf'
import axios from 'axios'
import { slugify } from 'src/sdk/utils/slugify'
import Arrows from 'src/components/common/Carousel/components/Arrows'

import Section from '../Section'
import { useTabs, TabPanel } from './tabRules'
import { TabSwitch } from './TabSwitch'

import './shelfCss.scss'

type NavigationTabsProps = {
  tabLabel: string
}

type Props = {
  navigattionTabs: NavigationTabsProps[]
  title?: string
  pretitle?: string
}

function BlockDesktop({ navigattionTabs, title, pretitle }: Props) {
  const { isMobile, isTablet } = useWindowDimensions()

  const shelfItemQuantity = isMobile ? 2 : isTablet ? 4 : 5

  const isDesktop = !isMobile && !isTablet

  const allTabs = [
    ...new Set(
      navigattionTabs?.map((item: { tabLabel: string }) => item.tabLabel)
    ),
  ]

  const [tabs] = useState(allTabs)
  const [selectedTab, setSelectedTab] = useTabs(tabs)

  const [products, setProducts] = useState<any>()

  const [isArrowPrevEnabled, setIsArrowPrevEnabled] = useState<boolean>(false)
  const [isArrowNextEnabled, setIsArrowNextEnabled] = useState<boolean>(true)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const refitem = useRef<HTMLLIElement | null>(null)
  const arrowStyle = {
    borderRadius: '30px',
    height: ' 33px',
    margin: '8px',
    width: '32px',
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

  const handleScroll = () => {
    if (containerRef.current) {
      if (
        containerRef.current.scrollTop === 0 &&
        containerRef.current.scrollLeft === 0
      ) {
        setIsArrowNextEnabled(true)
        setIsArrowPrevEnabled(false)
      } else if (
        containerRef.current.scrollLeft >= containerRef.current.scrollHeight
      ) {
        setIsArrowNextEnabled(false)
        setIsArrowPrevEnabled(true)
      } else {
        setIsArrowNextEnabled(true)
        setIsArrowPrevEnabled(true)
      }
    }

    return null
  }

  useEffect(() => {
    const departmentName =
      selectedTab &&
      selectedTab !== undefined &&
      slugify(selectedTab) !== 'Geral'
        ? slugify(selectedTab).toLowerCase()
        : null

    axios
      .get('/api/getTopSellers', {
        params: {
          departmentName,
        },
      })
      .then(({ data: { value } }) => setProducts(value))
  }, [selectedTab])

  return (
    <Section className="navigattionTabs-container section">
      <div className="navigattionTabs-headers">
        <div className="product-shelf-titles">
          {pretitle && <h3 className="product-shelf-pretitle">{pretitle}</h3>}
          {title && <h2 className="product-shelf-title">{title}</h2>}
        </div>
        {isDesktop && (
          <div className="navigattionTabs-arrows">
            <Arrows
              position="prev"
              style={arrowStyle}
              iconColor={isArrowPrevEnabled ? '#FF3452' : '#DDDDDD'}
              onClick={() => arrowsNavigation('prev')}
              disabled={!isArrowPrevEnabled}
            />
            <Arrows
              position="next"
              style={arrowStyle}
              iconColor={isArrowNextEnabled ? '#FF3452' : '#DDDDDD'}
              onClick={() => arrowsNavigation('next')}
              disabled={!isArrowNextEnabled}
            />
          </div>
        )}
      </div>
      <div className="section-top layout__content section__divisor">
        <div
          className="navigattionTabs-list scrollmenu"
          ref={containerRef}
          style={{
            transform: 'translate3d(0, 0, 0)',
            width: '100%',
            display: ' flex',
            flexDirection: 'row',
            scrollBehavior: 'smooth',
            overflowX: 'scroll',
          }}
          onScroll={handleScroll}
        >
          <List variant="unordered">
            {tabs.map((tab: string, index: number) => {
              return (
                <li key={index} className="navigattionTabs-tab" ref={refitem}>
                  <TabSwitch
                    key={index}
                    isActive={selectedTab === tab}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab}
                  </TabSwitch>
                </li>
              )
            })}
          </List>
        </div>
      </div>
      <div className="section-center">
        {navigattionTabs?.map((item, index) => (
          <div
            key={index}
            className={
              selectedTab !== item.tabLabel ? 'block-inactive' : 'block-active'
            }
          >
            <TabPanel hidden={selectedTab !== item.tabLabel}>
              <article className="block">
                <Section className="layout__content home-shelf-container navigattionTabs-content">
                  <ProductShelf
                    cardsQuantity={shelfItemQuantity}
                    products={products}
                  />
                </Section>
              </article>
            </TabPanel>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default BlockDesktop
