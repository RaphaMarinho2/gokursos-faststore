import { sendAnalyticsEvent, useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import { useEffect, useState } from 'react'
import { DiscountBadge } from 'src/components/ui/Badge'
import Breadcrumb from 'src/components/ui/Breadcrumb'
import { ButtonBuy } from 'src/components/ui/Button'
import { Image } from 'src/components/ui/Image'
import Price from 'src/components/ui/Price'
import ProductTitle from 'src/components/ui/ProductTitle'
import { useBuyButton } from 'src/sdk/cart/useBuyButton'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import { useProduct } from 'src/sdk/product/useProduct'
import type { ProductDetailsFragment_ProductFragment } from '@generated/graphql'
import type { CurrencyCode, ViewItemEvent } from '@faststore/sdk'
import type { AnalyticsItem } from 'src/sdk/analytics/types'

import productQuestions from '../../../mocks/productQuestions.json'
import mockedSubscriptionOffers from '../../../mocks/subscriptionOffers.json'
import { Form as QuestionForm } from '../ProductCommonQuestions/FormFac'
import Section from '../Section'
import LatestQuestions from './LatestQuestions'
import SubscriptionOffers from './SubscriptionOffers'

interface Props {
  product: ProductDetailsFragment_ProductFragment
}

function ProductDetails({ product: staleProduct }: Props) {
  const { currency } = useSession()
  const [addQuantity] = useState(1)

  // Stale while revalidate the product for fetching the new price etc
  const { data } = useProduct(staleProduct.id, {
    product: staleProduct,
  })

  if (!data) {
    throw new Error('NotFound')
  }

  const {
    id,
    sku,
    gtin,
    name: variantName,
    brand,
    isVariantOf,
    description,
    image: productImages,
    offers: {
      lowPrice,
      offers: [{ price, listPrice, seller }],
    },
  } = staleProduct

  const buyProps = useBuyButton({
    id,
    price,
    listPrice,
    seller,
    quantity: addQuantity,
    itemOffered: {
      sku,
      name: variantName,
      gtin,
      image: productImages,
      brand,
      isVariantOf,
    },
  })

  useEffect(() => {
    sendAnalyticsEvent<ViewItemEvent<AnalyticsItem>>({
      name: 'view_item',
      params: {
        currency: currency.code as CurrencyCode,
        value: price,
        items: [
          {
            item_id: isVariantOf.productGroupID,
            item_name: isVariantOf.name,
            item_brand: brand.name,
            item_variant: sku,
            price,
            discount: listPrice - price,
            currency: currency.code as CurrencyCode,
            item_variant_name: variantName,
            product_reference_id: gtin,
          },
        ],
      },
    })
  }, [
    isVariantOf.productGroupID,
    isVariantOf.name,
    brand.name,
    sku,
    price,
    listPrice,
    currency.code,
    variantName,
    gtin,
  ])

  return (
    <Section className="product-details layout__content layout__section column">
      <Breadcrumb
        breadcrumbList={staleProduct.breadcrumbList.itemListElement}
      />

      <section className="product-details__body">
        <header className="product-details__title">
          <ProductTitle
            title={<h1 className="text__title-product">{variantName}</h1>}
            label={
              <DiscountBadge listPrice={listPrice} spotPrice={lowPrice} big />
            }
          />
        </header>

        <section className="product-details__image">
          <Image
            preload
            loading="eager"
            src={productImages[0].url}
            alt={productImages[0].alternateName}
            width={360}
            height={270}
            sizes="(max-width: 768px) 25vw, 50vw"
          />
        </section>

        <section className="product-details__settings">
          <section className="product-details__values">
            <div className="product-details__prices">
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
                value={lowPrice}
                formatter={useFormattedPrice}
                testId="price"
                data-value={lowPrice}
                variant="spot"
                classes="text__lead"
                SRText="Sale Price:"
              />
            </div>
            {/* <div className="prices">
              <p className="price__old text__legend">{formattedListPrice}</p>
              <p className="price__new">{isValidating ? '' : formattedPrice}</p>
            </div> */}
          </section>
          {/* NOTE: A loading skeleton had to be used to avoid a Lighthouse's
              non-composited animation violation due to the button transitioning its
              background color when changing from its initial disabled to active state.
              See full explanation on commit https://git.io/JyXV5. */}
          <ButtonBuy {...buyProps}>Adicionar ao carrinho</ButtonBuy>
          {/* {isValidating ? (
            <AddToCartLoadingSkeleton />
          ) : (
            <ButtonBuy disabled={buyDisabled} {...buyProps}>
              Add to Cart
            </ButtonBuy>
          )}
          {!availability && (
            <OutOfStock
              onSubmit={(email) => {
                console.info(email)
              }}
            />
          )} */}
        </section>

        <section className="product-details__content">
          <article className="product-details__description">
            <h2 className="text__title-subsection">Description</h2>
            <p className="text__body">{description}</p>
          </article>
          <SubscriptionOffers
            firstOffer={mockedSubscriptionOffers.firstOffer}
            secondOffer={mockedSubscriptionOffers.secondOffer}
          />
        </section>

        <section className="product-questions__container">
          <LatestQuestions productQuestions={productQuestions} />
          <QuestionForm />
        </section>
      </section>
    </Section>
  )
}

export const fragment = graphql`
  fragment ProductDetailsFragment_product on StoreProduct {
    id: productID
    sku
    name
    gtin
    description

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
        seller {
          identifier
        }
      }
    }

    breadcrumbList {
      itemListElement {
        item
        name
        position
      }
    }
  }
`

export default ProductDetails
