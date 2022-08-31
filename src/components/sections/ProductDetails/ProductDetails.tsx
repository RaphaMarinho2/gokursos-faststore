// import { sendAnalyticsEvent, useSession } from '@faststore/sdk'
import ProductTags from '@acctglobal/product-tags'
// import { graphql } from 'gatsby'
// import { useEffect, useState } from 'react'
import { DiscountBadge } from 'src/components/ui/Badge'
import Breadcrumb from 'src/components/ui/Breadcrumb'
// import { ButtonBuy } from 'src/components/ui/Button'
import { Image } from 'src/components/ui/Image'
import Price from 'src/components/ui/Price'
import ProductTitle from 'src/components/ui/ProductTitle'
// import { useBuyButton } from 'src/sdk/cart/useBuyButton'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
// import { useProduct } from 'src/sdk/product/useProduct'
// import type { ProductDetailsFragment_ProductFragment } from '@generated/graphql'
// import type { CurrencyCode, ViewItemEvent } from '@faststore/sdk'
// import type { AnalyticsItem } from 'src/sdk/analytics/types'
import ProductDescription from '@acctglobal/productdescription'
import ShareProduct from '@acctglobal/shareproduct'
import ShareIcon from 'src/components/icons/ShareIcon'
import FacebookShareIcon from 'src/components/icons/FacebookShare'
import TwitterShareIcon from 'src/components/icons/TwitterShareIcon'
import PinterestShareIcon from 'src/components/icons/PinterestShareIcon'
import PolygonIcon from 'src/components/icons/PolygonIcon'
import ProductQueryMock from 'src/mocks/productQueryMock.json'
import productQueryDetails from 'src/mocks/productQueryDetails.json'

// import productQuestions from '../../../mocks/productQuestions.json'
import mockedSubscriptionOffers from '../../../mocks/subscriptionOffers.json'
import instalment from '../../../mocks/instalment.json'
// import { Form as QuestionForm } from '../ProductCommonQuestions/FormFac'
import Section from '../Section'
// import ProductRating from '../ProductRating'
import Instalments from '../Instalments'
import Workload from '../Workload'
import RatingSummary from '../RatingSummary'
import { InstalmentList } from './InstalmentList/InstalmentList'
// import LatestQuestions from './LatestQuestions'
import SubscriptionOffers from './SubscriptionOffers'
import { VideoAndText } from './videoAndtextDetails'
import { ProductInfo } from '../../../pages/[slug]/p'

interface Props {
  product: ProductInfo | any
}



function ProductDetails(product: Props) {
  // const { currency } = useSession()
  // const [addQuantity] = useState(1)
  console.log("ProductInfo", product)
  const priceVaritation =
    ProductQueryMock.data.search.products.edges[0]?.node.offers.offers[0]
      ?.priceVaritation


  // Stale while revalidate the product for fetching the new price etc
  // const { data } = useProduct(staleProduct.id, {
  //   product: staleProduct,
  // })


  // if (!data) {
  //   throw new Error('NotFound')
  // }

  const {
    product: {
      productName,
      description,
      specification,
      productImages,
      priceOnData,
      breadCrumb,
      category
    }
  } = product



  const parseHtml = (text: string) => {
    return new DOMParser().parseFromString(text, "text/html");
  }


  const tabSpecification = [
    {
      name: 'Sobre o curso',
      description: description

    },
    {
      name: 'Conteúdo do curso',
      description: parseHtml(specification.Conteudo).documentElement.innerHTML
    },
    {
      name: 'Objetivos',
      description: specification.Objetivos
    },
    {
      name: 'Certificados',
      description:
        'O certificado emitido pelo GoKursos será conferido após a conclusão de 75% da carga-horária do curso e da obtenção de nota mínima sete na média das avaliações. Para os cursos sem avaliação, será conferido o certificado por participação. ',
    },
  ]

  // const {
  //   id,
  //   sku,
  //   gtin,
  //   name: variantName,
  //   brand,
  //   isVariantOf,
  //   image: productImages,
  //   offers: {
  //     lowPrice,
  //     offers: [{ price, listPrice, seller }],
  //   },
  // } = staleProduct

  // const buyProps = useBuyButton({
  //   id,
  //   price,
  //   listPrice,
  //   seller,
  //   quantity: addQuantity,
  //   itemOffered: {
  //     sku,
  //     name: variantName,
  //     gtin,
  //     image: productImages,
  //     brand,
  //     isVariantOf,
  //   },
  // })

  const facebookShareIcon = () => {
    return <FacebookShareIcon />
  }

  const twitterShareIcon = () => {
    return <TwitterShareIcon />
  }

  const pinterestShareIcon = () => {
    return <PinterestShareIcon />
  }

  // useEffect(() => {
  //   sendAnalyticsEvent<ViewItemEvent<AnalyticsItem>>({
  //     name: 'view_item',
  //     params: {
  //       currency: currency.code as CurrencyCode,
  //       value: price,
  //       items: [
  //         {
  //           item_id: isVariantOf.productGroupID,
  //           item_name: isVariantOf.name,
  //           item_brand: brand.name,
  //           item_variant: sku,
  //           price,
  //           discount: listPrice - price,
  //           currency: currency.code as CurrencyCode,
  //           item_variant_name: variantName,
  //           product_reference_id: gtin,
  //         },
  //       ],
  //     },
  //   })
  // }, [
  //   isVariantOf.productGroupID,
  //   isVariantOf.name,
  //   brand.name,
  //   sku,
  //   price,
  //   listPrice,
  //   currency.code,
  //   variantName,
  //   gtin,
  // ])

  return (
    <Section className="product-details layout__content layout__section column">
      <Breadcrumb
        breadcrumbList={breadCrumb}
      />

      <section className="product-details__body">
        <header className="product-details__title">
          <ProductTitle
            title={
              <div className="product-details__title-container">
                <h1 className="text__title-product">{productName}</h1>
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
                {
                  category.Name &&
                  category.Name !== undefined &&
                  <ProductTags
                    tagCategoryLabel={category.Name}
                    urlCategory={`/${category.Slug}`}
                  />
                }
                {/* <RatingSummary rates={[1, 3, 5, 3, 2, 1, 1, 2, 4, 2]} /> */}
                {specification.CargaHoraria.Text && <Workload workload={specification.CargaHoraria.Text} />}
              </>
            }
          />
        </header>

        <section className="product-details__image">
          {productImages ?
            <Image
              preload
              loading="eager"
              src={productImages}
              alt={productName}
              width={360}
              height={270}
              sizes="(max-width: 768px) 25vw, 50vw"
            /> : <h4 className='image-not-found'>
              imagem insdisponível
            </h4>}
        </section>

        <section className="product-details__settings">
          <section className="product-details__values">
            <div className="product-details__prices">
              <div className="product-details__list-price-container">
                {priceOnData.ListPrice && <Price
                  value={priceOnData.ListPrice}
                  formatter={useFormattedPrice}
                  testId="list-price"
                  data-value={priceOnData.ListPrice}
                  variant="listing"
                  classes="text__legend"
                  SRText="Original price:"
                />
                }
                {priceOnData.ListPrice && <DiscountBadge listPrice={priceOnData.ListPrice} spotPrice={priceOnData.BasePrice} big />}
              </div>
              <Price
                value={priceOnData.BasePrice}
                formatter={useFormattedPrice}
                testId="price"
                data-value={priceOnData.BasePrice}
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
          {/* <ButtonBuy {...buyProps}>Adicionar ao carrinho</ButtonBuy> */}
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
            {typeof window !== 'undefined' && (
              <ProductDescription
                loadMore="Load More"
                descriptionTabs={tabSpecification}
                maxHeight={1000}
              />
            )}

            {/* <ProductRating /> */}
            {/* <div className="product-questions__container">
              <LatestQuestions productQuestions={productQuestions} />
              <QuestionForm />
            </div> */}
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
        </section>
      </section>
    </Section>
  )
}

// export const fragment = graphql`
//   fragment ProductDetailsFragment_product on StoreProduct {
//     id: productID
//     sku
//     name
//     gtin
//     description

//     isVariantOf {
//       productGroupID
//       name
//     }

//     image {
//       url
//       alternateName
//     }

//     brand {
//       name
//     }

//     offers {
//       lowPrice
//       offers {
//         availability
//         price
//         listPrice
//         seller {
//           identifier
//         }
//       }
//     }

//     breadcrumbList {
//       itemListElement {
//         item
//         name
//         position
//       }
//     }
//   }
// `

export default ProductDetails
