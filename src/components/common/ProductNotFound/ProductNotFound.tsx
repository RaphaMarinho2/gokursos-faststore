import FaceIcon from './assets/FaceIcon'

import './product-not-found.scss'

interface ProductNotFoundProps {
  title: string
  subtitle: string
}

function ProductNotFound({ title, subtitle }: ProductNotFoundProps) {
  return (
    <div className="not-found">
      <FaceIcon />
      <span className="not-found__title">{title}</span>
      <p className="not-found__subtitle">{subtitle}</p>
    </div>
  )
}

export default ProductNotFound
