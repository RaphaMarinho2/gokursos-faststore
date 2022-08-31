import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import { List } from '@faststore/ui'
import { useEffect, useState } from 'react'
import ProductShelf from 'src/components/product/ProductShelf'
import axios from 'axios'
import { slugify } from 'src/sdk/utils/slugify'

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

  const allTabs = [
    ...new Set(
      navigattionTabs?.map((item: { tabLabel: string }) => item.tabLabel)
    ),
  ]

  const [tabs] = useState(allTabs)
  const [selectedTab, setSelectedTab] = useTabs(tabs)

  const [products, setProducts] = useState<any>()

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
      <div className="product-shelf-titles">
        {pretitle && <h3 className="product-shelf-pretitle">{pretitle}</h3>}
        {title && <h2 className="product-shelf-title">{title}</h2>}
      </div>
      <div className="section-top layout__content section__divisor">
        <div className="navigattionTabs-list scrollmenu">
          <List variant="unordered">
            {tabs.map((tab: string, index: number) => {
              return (
                <li key={index} className="navigattionTabs-tab">
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
