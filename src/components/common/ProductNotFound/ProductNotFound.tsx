import FaceIcon from './assets/FaceIcon'

import './product-not-found.scss'

interface ProductNotFoundProps {
  title: string
  subtitle: React.ReactNode
}

function ProductNotFound({ title, subtitle }: ProductNotFoundProps) {
  return (
    <div className="not-found">
      <FaceIcon />
      <span className="not-found__title">{title}</span>
      <div className="not-found__subtitle">{subtitle}</div>
    </div>
  )
}

export default ProductNotFound
