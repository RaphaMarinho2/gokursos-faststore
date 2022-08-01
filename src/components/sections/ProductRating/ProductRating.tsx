import Rating from 'src/components/product/Rating'

import { rates } from './ratesMock.json'
import './product-rating.scss'

function ProductRating() {
  return (
    <div className="product-rating-container">
      <p className="product-rating-title">
        Pergunte e veja opiniões de quem já comprou
      </p>
      <p className="product-rating-subtitle">
        A Trustvox certifica que a nota média da loja é:
      </p>
      <Rating rates={rates} />
      <span className="product-rating-description">
        Esta loja se preocupa tanto com você consumidor que contratou uma
        empresa independente para auditar as avaliações da loja. Legal, né? :)
      </span>
    </div>
  )
}

export default ProductRating
