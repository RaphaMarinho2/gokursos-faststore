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
}: ProductGalleryPaginatorProps) => (
  <div className="product-listing__pagination product-listing__pagination--bottom">
    <Button className="product-listing__pagination-button" variant="tertiary">
      <HorizontalArrowIcon />
    </Button>
    <div className="product-listing__current-page">{currentPage}</div>
    <span className="product-listing__page-separator">de</span>
    <div className="product-listing__last-page">{lastPage}</div>
    <Button className="product-listing__pagination-button" variant="tertiary">
      <HorizontalArrowIcon direction="right" color="#FF3452" />
    </Button>
  </div>
)

export default ProductGalleryPaginator
