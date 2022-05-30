import { useState } from 'react'
import { List as UIList } from '@faststore/ui'
import Link from 'src/components/ui/Link'
import Accordion, { AccordionItem } from 'src/components/ui/Accordion'

import links from './data/links'

type SubItem = {
  href: string | null
  name: string
  icon?: JSX.Element | null
}

type LinkItem = {
  href: string | null
  name: string
  icon?: JSX.Element | null
  subItems?: SubItem[]
}

interface LinksListProps {
  items: LinkItem[]
}

function LinksList({ items }: LinksListProps) {
  return (
    <UIList>
      {items.map((item) => (
        <>
          {item.subItems ? (
            <li key={item.name}>
              <p>{item.name}</p>
              <div className="subitem-wrapper">
                {item.subItems.map((subItem) => (
                  <>
                    {subItem.icon === null ? (
                      <li key={subItem.name}>
                        {subItem.href !== null ? (
                          <Link variant="footer" to={subItem.href}>
                            {subItem.name}
                          </Link>
                        ) : (
                          <p>{subItem.name}</p>
                        )}
                      </li>
                    ) : (
                      <li key={subItem.name}>{subItem.icon}</li>
                    )}
                  </>
                ))}
              </div>
            </li>
          ) : (
            <li key={item.name}>
              {item.href !== null ? (
                <Link variant="footer" to={item.href}>
                  {item.icon === null ? <>{item.name}</> : <>{item.icon}</>}
                </Link>
              ) : (
                <>{item.icon === null ? <>{item.name}</> : <>{item.icon}</>}</>
              )}
            </li>
          )}
        </>
      ))}
    </UIList>
  )
}

function FooterLinks() {
  const [indicesExpanded, setIndicesExpanded] = useState<Set<number>>(
    new Set([])
  )

  const onChange = (index: number) => {
    if (indicesExpanded.has(index)) {
      indicesExpanded.delete(index)
      setIndicesExpanded(new Set(indicesExpanded))
    } else {
      setIndicesExpanded(new Set(indicesExpanded.add(index)))
    }
  }

  return (
    <section className="footer__links">
      <div className="display-mobile">
        <Accordion expandedIndices={indicesExpanded} onChange={onChange}>
          {links.map((section, index) => {
            const parsedTitle = section.title
              .normalize('NFD')
              .replace(/[\u0300-\u036f ]/g, '')
              .toLowerCase()

            return (
              <AccordionItem
                key={section.title}
                isExpanded={indicesExpanded.has(index)}
                buttonLabel={section.title}
                className={parsedTitle}
              >
                <LinksList items={section.items} />
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>

      <div className="hidden-mobile">
        <div className="footer__links-columns">
          {links.map((section) => {
            const parsedTitle = section.title
              .normalize('NFD')
              .replace(/[\u0300-\u036f ]/g, '')
              .toLowerCase()

            return (
              <nav key={section.title} className={parsedTitle}>
                <p className="text__title-mini">{section.title}</p>
                <LinksList items={section.items} />
              </nav>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FooterLinks
