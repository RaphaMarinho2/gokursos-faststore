import { sendAnalyticsEvent, useSession } from '@faststore/sdk'
import ProductTags from '@acctglobal/product-tags'
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
import ShareProduct from '@acctglobal/shareproduct'
import ShareIcon from 'src/components/icons/ShareIcon'
import FacebookShareIcon from 'src/components/icons/FacebookShare'
import TwitterShareIcon from 'src/components/icons/TwitterShareIcon'
import PinterestShareIcon from 'src/components/icons/PinterestShareIcon'
import PolygonIcon from 'src/components/icons/PolygonIcon'
import ProductQueryMock from 'src/mocks/productQueryMock.json'

import productQuestions from '../../../mocks/productQuestions.json'
import mockedSubscriptionOffers from '../../../mocks/subscriptionOffers.json'
import instalment from '../../../mocks/instalment.json'
import { Form as QuestionForm } from '../ProductCommonQuestions/FormFac'
import Section from '../Section'
import ProductRating from '../ProductRating'
import Instalments from '../Instalments'
import Workload from '../Workload'
import RatingSummary from '../RatingSummary'
import { InstalmentList } from './InstalmentList/InstalmentList'
import LatestQuestions from './LatestQuestions'
import SubscriptionOffers from './SubscriptionOffers'

interface Props {
  product: ProductDetailsFragment_ProductFragment
}

function ProductDetails({ product: staleProduct }: Props) {
  const { currency } = useSession()
  const [addQuantity] = useState(1)
  const priceVaritation =
    ProductQueryMock.data.search.products.edges[0]?.node.offers.offers[0]
      ?.priceVaritation

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

  const facebookShareIcon = () => {
    return <FacebookShareIcon />
  }

  const twitterShareIcon = () => {
    return <TwitterShareIcon />
  }

  const pinterestShareIcon = () => {
    return <PinterestShareIcon />
  }

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
            title={
              <div className="product-details__title-container">
                <h1 className="text__title-product">{variantName}</h1>
                <div className="share-icon">
                  <ShareProduct
                    additionalOverlay
                    shareWebSocials="Compartilhe:"
                    productURL="/"
                    shareLinks={[
                      {
                        name: 'Facebook',
                        url: '/',
                        SocialIcon: facebookShareIcon,
                      },
                      {
                        name: 'Twitter',
                        url: '/',
                        SocialIcon: twitterShareIcon,
                      },
                      {
                        name: 'Facebook',
                        url: '/',
                        SocialIcon: pinterestShareIcon,
                      },
                    ]}
                    ShareIcon={ShareIcon}
                  />
                  <div className="polygon-icon">
                    <PolygonIcon />
                  </div>
                </div>
              </div>
            }
            label={
              <>
                <ProductTags
                  tagCategoryLabel="Administração"
                  urlCategory="/administracao"
                />
                <RatingSummary rates={[1, 3, 5, 3, 2, 1, 1, 2, 4, 2]} />
                <Workload workload={60} />
              </>
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
              <div className="product-details__list-price-container">
                <Price
                  value={listPrice}
                  formatter={useFormattedPrice}
                  testId="list-price"
                  data-value={listPrice}
                  variant="listing"
                  classes="text__legend"
                  SRText="Original price:"
                />
                <DiscountBadge listPrice={listPrice} spotPrice={lowPrice} big />
              </div>
              <Price
                value={lowPrice}
                formatter={useFormattedPrice}
                testId="price"
                data-value={lowPrice}
                variant="spot"
                classes="text__lead"
                SRText="Sale Price:"
              />
              {instalment && (
                <Instalments
                  instalment={{
                    instalments: instalment.instalments,
                    value: instalment.value,
                    interestRate: instalment.interestRate,
                  }}
                />
              )}
              <InstalmentList priceVariation={priceVaritation} />
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
            <ProductRating />
            <div className="product-questions__container">
              <LatestQuestions productQuestions={productQuestions} />
              <QuestionForm />
            </div>
          </article>
          <SubscriptionOffers
            firstOffer={mockedSubscriptionOffers.firstOffer}
            secondOffer={mockedSubscriptionOffers.secondOffer}
          />
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
