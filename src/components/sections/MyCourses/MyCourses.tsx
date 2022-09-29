import { useEffect, useState } from 'react'
import {
  Card as UICard,
  CardActions as UICardActions,
  CardContent as UICardContent,
  CardImage as UICardImage,
} from '@faststore/ui'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Dialog from '@mui/material/Dialog'
import axios from 'axios'
import CertificateActive from 'src/components/icons/CertificateActive'
import CertificateInactive from 'src/components/icons/CertificateInactive'
import ProductGridSkeleton from 'src/components/skeletons/ProductGridSkeleton/ProductGridSkeleton'

import { Pagination } from '../../Pagination/Pagination'
import Section from '../Section'
import './my-courses.scss'
import mockCourses from './mock.json'
// import { MyCourseData } from './typings'

type Variant = 'wide' | 'default'
export interface MyCoursesProps {
  bordered?: boolean
  variant?: Variant
  aspectRatio?: number
}

export default function MyCourses({
  variant = 'default',
  bordered = false,
}: MyCoursesProps) {
  // const [coursesData, setCoursesData] = useState<MyCourseData[] | []>([])

  const [coursesData, setCoursesData] = useState([{}])
  const [isLoading, setLoading] = useState<boolean>(true)
  const [itemsPerPage] = useState<number>(8)
  const [currentPage, setCurrentPage] = useState<number>(0)

  const pages = Math.ceil(coursesData.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = coursesData.slice(startIndex, endIndex)
  const [open, setOpen] = useState<boolean>(false)
  const [openError, setOpenError] = useState<boolean>(false)

  useEffect(() => {
    if (
      typeof window !== 'undefined'
        ? window.location.href.includes('?dev=true')
        : ''
    ) {
      setCoursesData(mockCourses)
      setLoading(false)
    } else {
      const userData =
        typeof window !== 'undefined' ? window.localStorage.getItem('user') : ''

      axios
        .post('/api/getCourseList', userData ? JSON.parse(userData) : null)
        .then((resp) => setCoursesData(resp.data))
        .catch((error) => {
          console.error(error)
          setOpenError(true)
        })
        .finally(() => setLoading(false))
    }
  }, [])

  // Redirection request to the course via id
  const handleGoCourses = async (id: string | number) => {
    setOpen(true)
    const userData =
      typeof window !== 'undefined' ? window.localStorage.getItem('user') : ''

    const infoUser = JSON.parse(userData ?? '')

    await axios
      .post('/api/getCourseUrl', infoUser ? { ...infoUser, _id: id } : null)
      .then((resp) => {
        const urlCourse = resp.data.UrlToLms

        if (resp.data) {
          window.open(urlCourse, '_blank')
        } else {
          console.error('data empty', resp.data)
          alert('Base não atualizada')
        }

        setOpen(false)
      })
      .catch((error) => {
        console.error(error)
        setOpen(false)
        setOpenError(true)
      })
      .finally(() => setLoading(false))
  }

  const handleCloseModalError = () => {
    setOpenError(false)
  }

  const qtyCourses = coursesData.length

  return (
    <>
      <Dialog
        onClick={handleCloseModalError}
        open={openError}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="content-course-error">
          <h6 className="title-error">Ops! Ocorreu um erro!</h6>
          <p>Fique tranquilo, estamos cientes e trabalhando na correção.</p>
          <p>Tente novamente mais tarde</p>
          <div data-card-actions>
            <button onClick={handleCloseModalError}>Fechar</button>
          </div>
        </div>
      </Dialog>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
            {currentItems.length
              ? !isLoading && (
                  <div className="my-courses__count">
                    Mostrando{' '}
                    <strong>
                      {currentItems.length !== 0 ? currentItems.length : 0} de{' '}
                      {qtyCourses} produtos
                    </strong>{' '}
                  </div>
                )
              : !isLoading && (
                  <div className="my-courses__count">
                    Nenhum produto encontrado{' '}
                    <span role="img" aria-label="emoji">
                      😢
                    </span>{' '}
                  </div>
                )}
            <ul className="my-courses__list">
              <ProductGridSkeleton loading={isLoading}>
                {currentItems &&
                  currentItems.map((item: any, index: number) => {
                    return (
                      <li
                        key={index}
                        className={`my-courses__card ${
                          item?.IsActive ? 'active' : 'inactive'
                        }`}
                      >
                        <UICardImage>
                          <img
                            src={item?.ProductImage?.ProductImageURL}
                            alt={item?.Name}
                            sizes="(max-width: 768px) 25vw, 30vw"
                            loading="lazy"
                          />
                        </UICardImage>
                        <UICardContent data-fs-product-card-content>
                          <div data-fs-product-card-heading>
                            <div className="content-title">
                              <h3 data-fs-product-card-title>{item.Name}</h3>
                            </div>
                            {item.IsActive ? (
                              <h4 data-fs-product-active>Acesso ativo</h4>
                            ) : (
                              <h4 data-fs-product-inactive>Acesso expirado</h4>
                            )}
                          </div>
                        </UICardContent>
                        {item.IsActive ? (
                          <p className="certificate active">
                            <CertificateActive />
                            <p>Certificado disponível</p>
                          </p>
                        ) : (
                          <p className="certificate inactive">
                            <CertificateInactive />
                            <p>Certificado indisponível</p>
                          </p>
                        )}
                        <UICardActions data-fs-product-card-actions>
                          <button
                            onClick={() => {
                              handleGoCourses(item._Id)
                            }}
                          >
                            Acessar curso
                          </button>
                        </UICardActions>
                      </li>
                    )
                  })}
              </ProductGridSkeleton>
            </ul>
          </div>
          {qtyCourses > 8 && (
            <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              pages={pages}
            />
          )}
        </UICard>
      </Section>
    </>
  )
}
