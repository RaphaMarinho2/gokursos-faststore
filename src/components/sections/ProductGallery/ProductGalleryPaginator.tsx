import { navigate } from 'gatsby'
import HorizontalArrowIcon from 'src/components/icons/HorizontalArrow'
import Button from 'src/components/ui/Button'

import './product-gallery.scss'

interface ProductGalleryPaginatorProps {
  currentPage: number
  lastPage: number
}

const ProductGalleryPaginator = ({
  currentPage,
  lastPage,
}: ProductGalleryPaginatorProps) => {
  const addPage = () => {
    const { search, pathname } = window.location
    const urlParams = new URLSearchParams(search)

    if (!urlParams.has('page')) {
      return
    }

    const current = parseInt(urlParams.get('page') ?? '0', 10)

    urlParams.set('page', `${current + 1}`)

    navigate(`${pathname}?${urlParams.toString()}`)
  }

  const backPage = () => {
    const { search, pathname } = window.location
    const urlParams = new URLSearchParams(search)

    if (!urlParams.has('page')) {
      return
    }

    const current = parseInt(urlParams.get('page') ?? '0', 10)

    urlParams.set('page', `${current - 1}`)

    navigate(`${pathname}?${urlParams.toString()}`)
  }

  const checkPage = (page: number) => {
    const { search } = window.location
    const urlParams = new URLSearchParams(search)

    if (!urlParams.has('page')) {
      return
    }

    const current = parseInt(urlParams.get('page') ?? '0', 10)

    return current === page - 1
  }

  return (
    <div className="product-listing__pagination product-listing__pagination--bottom">
      <Button
        className="product-listing__pagination-button"
        variant="tertiary"
        onClick={backPage}
        disabled={checkPage(1)}
      >
        <HorizontalArrowIcon color={checkPage(1) ? undefined : '#FF3452'} />
      </Button>
      <div className="product-listing__current-page">{currentPage}</div>
      <span className="product-listing__page-separator">de</span>
      <div className="product-listing__last-page">{lastPage}</div>
      <Button
        className="product-listing__pagination-button"
        variant="tertiary"
        onClick={addPage}
        disabled={checkPage(lastPage)}
      >
        <HorizontalArrowIcon
          direction="right"
          color={checkPage(lastPage) ? undefined : '#FF3452'}
        />
      </Button>
    </div>
  )
}

export default ProductGalleryPaginator
