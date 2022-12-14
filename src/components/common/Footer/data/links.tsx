import VisaIcon from 'src/components/icons/Visa'
import MastercardIcon from 'src/components/icons/Mastercard'
import AmexIcon from 'src/components/icons/Amex'
import HipercardIcon from 'src/components/icons/Hipercard'
import EloIcon from 'src/components/icons/Elo'
import BoletoIcon from 'src/components/icons/Boleto'
import PixIcon from 'src/components/icons/Pix'
import TwoCardsIcon from 'src/components/icons/TwoCards'
import AcctIcon from 'src/components/icons/Acct'
import EshopIcon from 'src/components/icons/Eshop'

const links = [
  {
    title: 'Suporte e Ajuda',
    items: [
      {
        href: 'tel:08009698000',
        name: '0800 969 8000',
        icon: null,
      },
      {
        href: '/institucional/fale-conosco',
        name: 'Fale conosco',
        icon: null,
      },
      {
        href: '/institucional/perguntas-frequentes/',
        name: 'Perguntas Frequentes',
        icon: null,
      },
      {
        href: '/institucional/quem-somos/',
        name: 'Quem somos',
        icon: null,
      },
      {
        href: '/institucional/formas-de-pagamento/',
        name: 'Formas de pagamento',
        icon: null,
      },
      {
        href: '/institucional/politicas-de-cancelamento/',
        name: 'Política de Cancelamento',
        icon: null,
      },
      {
        href: '/institucional/termos-de-uso/',
        name: 'Termos de Uso',
        icon: null,
      },
      {
        href: '/institucional/seguranca-e-privacidade/',
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
        href: 'https://varejo.myeshop.com.br/',
        name: 'Eshop',
        icon: <EshopIcon />,
      },
    ],
  },
]

export default links
