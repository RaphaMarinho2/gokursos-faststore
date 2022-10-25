import FaceIcon from './assets/FaceIcon'

import './product-not-found.scss'

interface ProductNotFoundProps {
  title: string
  subtitle: React.ReactNode
  showIcon?: boolean
}

function ProductNotFound({
  title,
  subtitle,
  showIcon = true,
}: ProductNotFoundProps) {
  return (
    <div className="not-found">
      {showIcon ? <FaceIcon /> : <></>}
      <span className="not-found__title">{title}</span>
      <div className="not-found__subtitle">{subtitle}</div>
    </div>
  )
}

export default ProductNotFound
