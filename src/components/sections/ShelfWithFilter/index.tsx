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

  const containerRef = useRef<HTMLDivElement | null>(null)
  const refitem = useRef<HTMLDivElement | null>(null)

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

  const arrowStyle = {
    borderRadius: '30px',
    border: '1px solid #FF3452',
    height: ' 33px',
    margin: '8px',
    width: '32px',
  }

  return (
    <Section className="navigattionTabs-container section">
      <div className="navigattionTabs-header">
        <div className="product-shelf-titles">
          {pretitle && <h3 className="product-shelf-pretitle">{pretitle}</h3>}
          {title && <h2 className="product-shelf-title">{title}</h2>}
        </div>
        {isDesktop && (
          <div className="navigattionTabs-arrows">
            <Arrows
              position="prev"
              style={arrowStyle}
              iconColor="#FF3452"
              onClick={() => arrowsNavigation('prev')}
            />
            <Arrows
              position="next"
              style={arrowStyle}
              iconColor="#FF3452"
              onClick={() => arrowsNavigation('next')}
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
        >
          <List variant="unordered">
            {tabs.map((tab: string, index: number) => {
              return (
                <div key={index} ref={refitem}>
                  <li key={index} className="navigattionTabs-tab">
                    <TabSwitch
                      key={index}
                      isActive={selectedTab === tab}
                      onClick={() => setSelectedTab(tab)}
                    >
                      {tab}
                    </TabSwitch>
                  </li>
                </div>
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
