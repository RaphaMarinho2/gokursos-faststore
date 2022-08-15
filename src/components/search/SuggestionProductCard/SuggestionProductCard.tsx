import { Card, CardContent, CardImage } from '@faststore/ui'
import SuggestionImageFallback from 'src/components/icons/SuggestionImageFallback'
import { Image } from 'src/components/ui/Image'

import './suggestion-product-card.scss'

interface SuggestionProductCardProps {
  product: any
}

function SuggestionProductCard({ product }: SuggestionProductCardProps) {
  const { Name: name, ProductImageURL: imageURL } = product

  return (
    <Card
      className="suggestion-product-card"
      data-testid="suggestion-product-card"
    >
      <CardContent>
        <CardImage>
          <Image
            src={imageURL}
            alt={name}
            width={56}
            height={56}
            fallbackImage={<SuggestionImageFallback />}
          />
        </CardImage>
        <div data-suggestion-product-card-summary>
          <p className="text__title-mini" data-suggestion-product-card-title>
            {name}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default SuggestionProductCard
