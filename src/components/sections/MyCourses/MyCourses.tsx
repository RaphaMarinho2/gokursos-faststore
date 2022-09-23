import {
  Card as UICard,
  CardActions as UICardActions,
  CardImage as UICardImage,
} from '@faststore/ui'
import CertificateInactive from 'src/components/icons/CertificateInactive'
import CertificateActive from 'src/components/icons/CertificateActive'
import { Pagination } from '@mui/material'

import Section from '../Section'
import './my-courses.scss'

type Variant = 'wide' | 'default'

export interface MyCoursesProps {
  bordered?: boolean
  variant?: Variant
  aspectRatio?: number
}

// mock

const items = [
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: false,
    certificate: false,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
  {
    image: 'https://gde.godigitaledu.com/rest/productimage/v1/images/31097',
    title: 'MBA em Marketing (UniCarioca) - PLANO 18 MESES',
    isActive: true,
    certificate: true,
  },
]

const pagination = items.length / 8

export default function MyCourses({
  variant = 'default',
  bordered = false,
}: MyCoursesProps) {
  return (
    <>
      <div className="title-container">
        <p className="layout__content">Meus Cursos</p>
      </div>
      <Section className="layout__content my-courses__content">
        <UICard
          data-fs-product-card-variant={variant}
          data-fs-product-card-bordered={bordered}
          data-fs-product-card-actionabled
        >
          <div className="my-courses__wrapper">
            <ul className="my-courses__list">
              {items.map((item: any, index: number) => {
                return (
                  <li
                    key={index}
                    className={`my-courses__card ${
                      item.isActive ? 'active' : 'inactive'
                    }`}
                  >
                    <UICardImage>
                      <img
                        src={item.image}
                        alt={item.title}
                        sizes="(max-width: 768px) 25vw, 30vw"
                        loading="lazy"
                      />
                    </UICardImage>
                    <h3 data-fs-product-card-title>{item.title}</h3>
                    {item.isActive ? (
                      <h4 data-fs-product-active>Acesso ativo</h4>
                    ) : (
                      <h4 data-fs-product-inactive>Acesso expirado</h4>
                    )}
                    {item.certificate ? (
                      <a className="certificate active" href="/teste">
                        <CertificateActive />
                        <p>Certificado disponível</p>
                      </a>
                    ) : (
                      <a className="certificate inactive" href="/teste">
                        <CertificateInactive />
                        <p>Certificado indisponível</p>
                      </a>
                    )}
                    <UICardActions data-fs-product-card-actions>
                      <button>Acessar curso</button>
                    </UICardActions>
                  </li>
                )
              })}
            </ul>
          </div>
          <Pagination count={pagination} />
        </UICard>
      </Section>
    </>
  )
}
