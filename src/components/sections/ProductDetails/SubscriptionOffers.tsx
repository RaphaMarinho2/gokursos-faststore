import Link from 'src/components/ui/Link'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'

// TODO: Refactor this when retrieving the data from the API
interface SubscriptionOffer {
  name: string
  price: number
  installmentCriteria: string
  link: string
}

interface SubscriptionOffersProps {
  firstOffer: SubscriptionOffer
  secondOffer: SubscriptionOffer
}

// TODO: Refactor this when retrieving the data from the API
export default function SubscriptionOffers({
  firstOffer,
  secondOffer,
}: SubscriptionOffersProps) {
  const firstOfferPrice = useFormattedPrice(firstOffer.price)
  const secondOfferPrice = useFormattedPrice(secondOffer.price)

  return (
    <article className="product-details__pricing">
      <h2 className="product-details__title">Assine nosso plano e economize</h2>
      <p className="product-details__subtitle">
        {`Com planos a partir de ${firstOfferPrice} você tem acesso a mais de 9.000 cursos em
        diversas categorias.`}
      </p>
      <div className="product-details__main-content">
        <div className="product-details__list">
          <div className="product-details__item">
            <span className="product-details__plan">{firstOffer.name}</span>
            <div className="product-details__price-container">
              <span className="product-details__price">{firstOfferPrice}</span>
              <span className="product-details__installment-criteria">
                {firstOffer.installmentCriteria}
              </span>
            </div>
            <Link
              className="product-details__plan-details"
              to={firstOffer.link}
            >
              Ver detalhes
            </Link>
          </div>
          <div className="product-details__item">
            <span className="product-details__plan">{secondOffer.name}</span>
            <div className="product-details__price-container">
              <span className="product-details__price">{secondOfferPrice}</span>
              <span className="product-details__installment-criteria">
                {secondOffer.installmentCriteria}
              </span>
            </div>
            <Link
              className="product-details__plan-details"
              to={secondOffer.link}
            >
              Ver detalhes
            </Link>
          </div>
        </div>
        <div className="product-details__see-more">
          <span className="product-details__plan">
            Conheça todos nossos planos de assinatura
          </span>
          <Link className="product-details__plan-details" to="/#">
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  )
}
