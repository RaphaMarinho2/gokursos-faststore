import React, { useState } from 'react'
import { List as UIList } from '@faststore/ui'
import Link from 'src/components/ui/Link'
import Accordion, { AccordionItem } from 'src/components/ui/Accordion'
import VisaIcon from 'src/components/icons/Visa'
import MastercardIcon from 'src/components/icons/Mastercard'
import AmexIcon from 'src/components/icons/Amex'
import HipercardIcon from 'src/components/icons/Hipercard'
import EloIcon from 'src/components/icons/Elo'
import BoletoIcon from 'src/components/icons/Boleto'
import PixIcon from 'src/components/icons/Pix'
import TwoCardsIcon from 'src/components/icons/TwoCards'
import AcctIcon from 'src/components/icons/Acct'
import VtexIcon from 'src/components/icons/Vtex'
import PciIcon from 'src/components/icons/Pci'
import EncryptIcon from 'src/components/icons/Encrypt'
import EshopIcon from 'src/components/icons/Eshop'

const links = [
  {
    title: 'Suporte e Ajuda',
    items: [
      {
        href: '/',
        name: '0800 969 8000',
        icon: null,
      },
      {
        href: '/',
        name: 'Fale conosco',
        icon: null,
      },
      {
        href: '/',
        name: 'Perguntas Frequentes',
        icon: null,
      },
      {
        href: '/',
        name: 'Quem somos',
        icon: null,
      },
      {
        href: '/',
        name: 'Formas de pagamento',
        icon: null,
      },
      {
        href: '/',
        name: 'Política de Cancelamento',
        icon: null,
      },
      {
        href: '/',
        name: 'Termos de Uso',
        icon: null,
      },
      {
        href: '/',
        name: 'Segurança de Privacidade',
        icon: null,
      },
    ],
  },
  {
    title: 'Parceiros',
    items: [
      {
        href: null,
        name: 'UNINASSAU',
        icon: null,
      },
      {
        href: null,
        name: 'UNINORTE',
        icon: null,
      },
      {
        href: null,
        name: 'BARÇA INNOVATION HUB',
        icon: null,
      },
      {
        href: null,
        name: 'UNAMA',
        icon: null,
      },
      {
        href: null,
        name: 'BEDUKA',
        icon: null,
      },
    ],
  },
  {
    title: 'Formas de Pagamento',
    items: [
      {
        href: null,
        name: 'Visa',
        icon: <VisaIcon />,
      },
      {
        href: null,
        name: 'Mastercard',
        icon: <MastercardIcon />,
      },
      {
        href: null,
        name: 'Amex',
        icon: <AmexIcon />,
      },
      {
        href: null,
        name: 'Hipercard',
        icon: <HipercardIcon />,
      },
      {
        href: null,
        name: 'Elo',
        icon: <EloIcon />,
      },
      {
        href: null,
        name: 'Pagamento à vista',
        subItems: [
          {
            href: null,
            name: 'Boleto',
            icon: <BoletoIcon />,
          },
          {
            href: null,
            name: 'Pix',
            icon: <PixIcon />,
          },
        ],
      },
      {
        href: null,
        name: '2 cartões',
        subItems: [
          {
            href: null,
            name: 'Dois Cartões',
            icon: <TwoCardsIcon />,
          },
        ],
      },
    ],
  },
  {
    title: 'Tecnologia e Desenvolvimento',
    items: [
      {
        href: 'https://acct.global/',
        name: 'ACCT',
        icon: <AcctIcon />,
      },
      {
        href: 'https://vtex.com/br-pt/',
        name: 'VTEX',
        icon: <VtexIcon />,
      },
      {
        href: 'https://secure.vtex.com/?an=t42748',
        name: 'Lets Encrypt',
        icon: <EncryptIcon />,
      },
      {
        href: 'https://varejo.myeshop.com.br/',
        name: 'Eshop',
        icon: <EshopIcon />,
      },
      {
        href: 'https://secure.vtex.com/?an=t42748',
        name: 'PCI',
        icon: <PciIcon />,
      },
    ],
  },
]

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
          {links.map((section, index) => (
            <AccordionItem
              key={section.title}
              isExpanded={indicesExpanded.has(index)}
              buttonLabel={section.title}
            >
              <LinksList items={section.items} />
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="hidden-mobile">
        <div className="footer__links-columns">
          {links.map((section) => (
            <nav key={section.title}>
              <p className="text__title-mini">{section.title}</p>
              <LinksList items={section.items} />
            </nav>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FooterLinks
