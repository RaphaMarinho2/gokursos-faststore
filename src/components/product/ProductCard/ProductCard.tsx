import {
  Card as UICard,
  CardActions as UICardActions,
  CardContent as UICardContent,
  CardImage as UICardImage,
} from '@faststore/ui'
import { graphql, Link } from 'gatsby'
import { memo } from 'react'
import { Badge } from 'src/components/ui/Badge'
import { Image } from 'src/components/ui/Image'
import Price from 'src/components/ui/Price'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import { useProductLink } from 'src/sdk/product/useProductLink'
import type { ReactNode } from 'react'
import type { ProductSummary_ProductFragment } from '@generated/graphql'

type Variant = 'wide' | 'default'

export interface ProductCardProps {
  product: ProductSummary_ProductFragment
  index: number
  bordered?: boolean
  variant?: Variant
  aspectRatio?: number
  ButtonBuy?: ReactNode
}

function ProductCard({
  product,
  index,
  variant = 'default',
  bordered = false,
  aspectRatio = 1,
  ButtonBuy,
  ...otherProps
}: ProductCardProps) {
  const {
    sku,
    isVariantOf: { name },
    image: [img],
    offers: {
      lowPrice: spotPrice,
      offers: [{ listPrice, availability }],
    },
  } = product

  console.info('ProductCard', ButtonBuy)

  const linkProps = useProductLink({ product, selectedOffer: 0, index })
  const outOfStock = availability !== 'https://schema.org/InStock'

  return (
    <UICard
      data-fs-product-card
      data-fs-product-card-variant={variant}
      data-fs-product-card-bordered={bordered}
      data-fs-product-card-actionabled={!!ButtonBuy}
      data-fs-product-card-sku={sku}
      {...otherProps}
    >
      <UICardImage>
        <Image
          src={img.url}
          alt={img.alternateName}
          width={360}
          height={360 / aspectRatio}
          sizes="(max-width: 768px) 25vw, 30vw"
          loading="lazy"
        />
      </UICardImage>

      <UICardContent data-fs-product-card-content>
        <div data-fs-product-card-heading>
          <h3 data-fs-product-card-title>
            <Link {...linkProps} title={name}>
              {name}
            </Link>
          </h3>
          <div data-fs-product-card-prices>
            <Price
              value={listPrice}
              formatter={useFormattedPrice}
              testId="list-price"
              data-value={listPrice}
              variant="listing"
              classes="text__legend"
              SRText="Original price:"
            />
            <Price
              value={spotPrice}
              formatter={useFormattedPrice}
              testId="price"
              data-value={spotPrice}
              variant="spot"
              classes="text__body"
              SRText="Sale Price:"
            />
          </div>
        </div>

        {outOfStock && <Badge>Out of stock</Badge>}
        {!!ButtonBuy && (
          <UICardActions data-fs-product-card-actions>
            {ButtonBuy}
          </UICardActions>
        )}
      </UICardContent>
    </UICard>
  )
}

export const fragment = graphql`
  fragment ProductSummary_product on StoreProduct {
    id: productID
    slug
    sku
    brand {
      brandName: name
    }
    name
    gtin

    isVariantOf {
      productGroupID
      name
    }

    image {
      url
      alternateName
    }

    brand {
      name
    }

    offers {
      lowPrice
      offers {
        availability
        price
        listPrice
        quantity
        seller {
          identifier
        }
      }
    }
  }
`

export default memo(ProductCard)
