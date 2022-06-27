// import { useState } from 'react'

// import { Link } from 'gatsby'
// import { Image } from 'src/components/ui/Image'

import { ITEMS_PER_SECTION } from 'src/constants'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import { List } from '@faststore/ui'
import { useState } from 'react'
import ProductShelf from 'src/components/product/ProductShelf'

import Section from '../Section'
import { useTabs, TabPanel } from './tabRules'
import { TabSwitch } from './TabSwitch'

import './buttonsCss.scss'

type NavigationTabsProps = {
  tabLabel: string
}

type Props = {
  navigattionTabs: NavigationTabsProps[]
}

function BlockDesktop({ navigattionTabs }: Props) {
  const { isMobile, isTablet } = useWindowDimensions()

  const shelfItemQuantity = isMobile ? 2 : isTablet ? 4 : 5

  const allTabs = [
    ...new Set(
      navigattionTabs?.map((item: { tabLabel: string }) => item.tabLabel)
    ),
  ]

  const [tabs] = useState(allTabs)
  const [selectedTab, setSelectedTab] = useTabs(tabs)

  console.info('vai vir O MENU:w', selectedTab)

  return (
    <Section className="navigattionTabs-container section">
      <div className="navigattionTabs-subtitle--border" />
      <div className="section-top layout__content">
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
                <Section className="layout__content home-shelf-container">
                  <ProductShelf
                    cardsQuantity={shelfItemQuantity}
                    first={ITEMS_PER_SECTION}
                    title={navigattionTabs[index].tabLabel}
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
