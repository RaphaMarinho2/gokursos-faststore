import ProductDescription from '@acctglobal/productdescription'
import productQueryDetails from 'src/mocks/productQueryDetails.json'
import mockedSubscriptionOffers from 'src/mocks/subscriptionOffers.json'

import ProductBrand from '../ProductBrand'
import SubscriptionOffers from '../ProductDetails/SubscriptionOffers'
import type { ProductData } from '../ProductDetails/typings'
import { VideoAndText } from '../ProductDetails/videoAndtextDetails'

interface Props {
  product: ProductData
}

function BelowPDP({ product }: Props) {
  const { Description, Especificacao } = product

  const tabSpecification = [
    {
      name: 'Sobre o curso',
      description: Description ?? '',
    },
    {
      name: 'Conteúdo do curso',
      description: Especificacao?.Conteudo ?? '',
    },
    {
      name: 'Objetivos',
      description: Especificacao?.Objetivos ?? '',
    },
    {
      name: 'Certificados',
      description: Especificacao?.TipoCurso?.DescriptionCertificate ?? '',
    },
  ]

  return (
    <>
      <article className="product-details__description">
        {typeof window !== 'undefined' && (
          <div className="divisor-product-details">
            <ProductDescription
              descriptionTabs={tabSpecification}
              maxHeight={100}
            />
            <ProductBrand NameOfBrand={product.Brand.Name} />
          </div>
        )}
      </article>
      <div className="product-details__content-right">
        <article className="product-details__description">
          <VideoAndText ProductQueryDetails={productQueryDetails} />
        </article>
        <SubscriptionOffers
          firstOffer={mockedSubscriptionOffers.firstOffer}
          secondOffer={mockedSubscriptionOffers.secondOffer}
        />
      </div>
    </>
  )
}

export default BelowPDP
