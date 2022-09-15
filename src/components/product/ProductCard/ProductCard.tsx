import {
  Card as UICard,
  CardActions as UICardActions,
  CardContent as UICardContent,
  CardImage as UICardImage,
} from '@faststore/ui'
import { Link } from 'gatsby'
import { memo } from 'react'
import Price from 'src/components/ui/Price'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import { useProductLink } from 'src/sdk/product/useProductLink'
import { useBuyButton } from 'src/sdk/cart/useBuyButton'
import './product-card.scss'

type Variant = 'wide' | 'default'

export interface ProductsProductCard {
  ID: string
  Name: string
  Category: {
    Name: string
    Slug: string
  }
  Especificacao: {
    CargaHoraria: {
      Text: string
    }
  }
  Price: {
    BasePrice: number
    CommisionedPrice: number
    ListPrice: number
    isSale: boolean
  }
  ProductImageURL: string
  LinkId: string
}

export interface ProductCardProps {
  product: ProductsProductCard
  index: number
  bordered?: boolean
  variant?: Variant
  aspectRatio?: number
}

function ProductCard({
  product,
  index,
  variant = 'default',
  bordered = false,
  ...otherProps
}: ProductCardProps) {
  const { Name: name, ProductImageURL: img } = product

  const price = product.Price?.BasePrice
  const listPrice = product.Price?.ListPrice
  const categoryName = product.Category?.Name

  const linkProps = useProductLink({ product, index })

  const buyProps = useBuyButton({
    id: product.ID,
    price,
    listPrice,
    seller: { identifier: '' },
    quantity: 1,
    itemOffered: {
      sku: '',
      name,
      gtin: '',
      image: [
        {
          alternateName: name,
          url: img,
        },
      ],
      brand: { name: '' },
      isVariantOf: { productGroupID: '', name },
    },
  })

  return (
    <UICard
      data-fs-product-card
      data-fs-product-card-variant={variant}
      data-fs-product-card-bordered={bordered}
      data-fs-product-card-actionabled
      {...otherProps}
    >
      {img !== '' ? (
        <UICardImage>
          <img
            src={img}
            alt={name}
            sizes="(max-width: 768px) 25vw, 30vw"
            loading="lazy"
          />
        </UICardImage>
      ) : (
        <div className="product-image__skeleton" />
      )}

      <UICardContent data-fs-product-card-content>
        <div data-fs-product-card-heading>
          <h4 data-fs-product-card-category>{categoryName}</h4>
          <h3 data-fs-product-card-title>
            <Link {...linkProps} title={name}>
              {name}
            </Link>
          </h3>

          <div data-fs-product-card-prices>
            {price && (
              <>
                {listPrice && listPrice > price && (
                  <Price
                    value={listPrice}
                    formatter={useFormattedPrice}
                    testId="list-price"
                    data-value={listPrice}
                    variant="listing"
                    classes="text__legend"
                    SRText="Original price:"
                  />
                )}
                <Price
                  value={price}
                  formatter={useFormattedPrice}
                  testId="price"
                  data-value={price}
                  variant="spot"
                  classes="text__body"
                  SRText="Sale Price:"
                />
              </>
            )}
          </div>
        </div>
        <UICardActions data-fs-product-card-actions>
          <button {...buyProps}>Quero começar</button>
        </UICardActions>
      </UICardContent>
    </UICard>
  )
}

export default memo(ProductCard)
