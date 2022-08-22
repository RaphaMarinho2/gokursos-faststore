import HorizontalArrowIcon from 'src/components/icons/HorizontalArrow'
import Button from 'src/components/ui/Button'

import './product-gallery.scss'

const ProductGalleryPaginator = () => (
  <div className="product-listing__pagination product-listing__pagination--bottom">
    <Button className="product-listing__pagination-button" variant="tertiary">
      <HorizontalArrowIcon />
    </Button>
    <div>1</div>
    <span>de</span>
    <div>5</div>
    <Button className="product-listing__pagination-button" variant="tertiary">
      <HorizontalArrowIcon direction="right" color="#FF3452" />
    </Button>
  </div>
)

export default ProductGalleryPaginator
