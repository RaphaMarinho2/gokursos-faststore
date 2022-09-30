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
  const { search, pathname } = window.location
  const urlParams = new URLSearchParams(search)
  const upCurrent = parseInt(urlParams.get('page') ?? '0', 10)

  const pageNavigation = (to: number) => {
    urlParams.set('page', `${to}`)

    navigate(`${pathname}?${urlParams.toString()}`)
  }

  const checkPage = (page: number) => {
    const current = parseInt(urlParams.get('page') ?? '0', 10)

    return current === page - 1
  }

  return (
    <div className="product-listing__pagination product-listing__pagination--bottom">
      <Button
        className="product-listing__pagination-button"
        variant="tertiary"
        onClick={() => pageNavigation(upCurrent - 1)}
        disabled={checkPage(1)}
      >
        <HorizontalArrowIcon color={checkPage(1) ? undefined : '#FF3452'} />
      </Button>
      <div className="product-listing__current-page">{currentPage + 1}</div>
      <span className="product-listing__page-separator">de</span>
      <Button
        className="product-listing__last-page"
        onClick={() => pageNavigation(lastPage - 1)}
        disabled={checkPage(lastPage)}
      >
        {lastPage}
      </Button>
      <Button
        className="product-listing__pagination-button"
        variant="tertiary"
        onClick={() => pageNavigation(upCurrent + 1)}
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
