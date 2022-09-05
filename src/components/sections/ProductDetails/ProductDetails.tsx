import ProductTags from '@acctglobal/product-tags'
import ProductDescription from '@acctglobal/productdescription'
import ShareProduct from '@acctglobal/shareproduct'
import { useState } from 'react'
import FacebookShareIcon from 'src/components/icons/FacebookShare'
import PinterestShareIcon from 'src/components/icons/PinterestShareIcon'
import PolygonIcon from 'src/components/icons/PolygonIcon'
import ShareIcon from 'src/components/icons/ShareIcon'
import TwitterShareIcon from 'src/components/icons/TwitterShareIcon'
import { DiscountBadge } from 'src/components/ui/Badge'
import Breadcrumb from 'src/components/ui/Breadcrumb'
import { ButtonBuy } from 'src/components/ui/Button'
import Price from 'src/components/ui/Price'
import ProductTitle from 'src/components/ui/ProductTitle'
import productQueryDetails from 'src/mocks/productQueryDetails.json'
import { useBuyButton } from 'src/sdk/cart/useBuyButton'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import type { ProductInfo } from 'src/pages/[slug]/p'

import mockedSubscriptionOffers from '../../../mocks/subscriptionOffers.json'
import Section from '../Section'
import Instalments from '../Instalments'
import Workload from '../Workload'
import { InstalmentList } from './InstalmentList/InstalmentList'
import SubscriptionOffers from './SubscriptionOffers'
import { VideoAndText } from './videoAndtextDetails'

interface Props {
  product: ProductInfo | any
}

function ProductDetails(product: Props) {
  const [addQuantity] = useState(1)

  const {
    product: {
      productId,
      productName,
      description,
      specification,
      productImages,
      priceOnData,
      breadCrumb,
      category,
      installments,
      brand,
    },
  } = product

  const priceVaritation = installments

  const tabSpecification = [
    {
      name: description ? 'Sobre o curso' : '',
      description: description ?? '',
    },
    {
      name: specification?.Conteudo ? 'Conteúdo do curso' : '',
      description: specification?.Conteudo ?? '',
    },
    {
      name: specification?.Objetivos ? 'Objetivos' : '',
      description: specification?.Objetivos ?? '',
    },
    {
      name: specification?.TipoCurso?.DescriptionCertificate
        ? 'Certificados'
        : '',
      description: specification?.TipoCurso?.DescriptionCertificate ?? '',
    },
  ]

  const buyProps = useBuyButton({
    id: productId,
    price: priceOnData?.BasePrice,
    listPrice: priceOnData?.ListPrice,
    seller: brand.Name,
    quantity: addQuantity,
    itemOffered: {
      sku: '',
      name: productName,
      gtin: '',
      image: productImages,
      brand: { name: '' },
      isVariantOf: { productGroupID: '', name: productName },
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

  return (
    <Section className="product-details layout__content layout__section column">
      <Breadcrumb
        breadcrumbList={breadCrumb?.map((item: any) => {
          return {
            item: item.Url,
            name: item.Titulo,
          }
        })}
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
                        url: `https://www.facebook.com/sharer/sharer.php?u=${
                          typeof window !== 'undefined' && window.location.href
                        }`,
                        SocialIcon: facebookShareIcon,
                      },
                      {
                        name: 'Twitter',
                        url: `https://twitter.com/intent/tweet?url=${
                          typeof window !== 'undefined' && window.location.href
                        }`,
                        SocialIcon: twitterShareIcon,
                      },
                      {
                        name: 'Pinterest',
                        url: `https://www.pinterest.com/pin/create/button/?url=${
                          typeof window !== 'undefined' && window.location.href
                        }`,
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
                {category?.Name && category?.Name !== undefined && (
                  <ProductTags
                    tagCategoryLabel={category?.Name}
                    urlCategory={`/${category.Slug}`}
                  />
                )}
                {/* <RatingSummary rates={[1, 3, 5, 3, 2, 1, 1, 2, 4, 2]} /> */}
                {specification?.CargaHoraria.Text && (
                  <Workload workload={specification?.CargaHoraria.Text} />
                )}
              </>
            }
          />
        </header>

        <section className="product-details__image">
          {product.product?.productImages ? (
            <img
              loading="eager"
              src={product.product?.productImages}
              alt={product.product?.productName}
              sizes="(max-width: 768px) 25vw, 50vw"
            />
          ) : (
            <h4 className="image-not-found">imagem indisponível</h4>
          )}
        </section>

        <section className="product-details__settings">
          <section className="product-details__values">
            <div className="product-details__prices">
              <div className="product-details__list-price-container">
                {priceOnData?.ListPrice && (
                  <Price
                    value={priceOnData?.ListPrice}
                    formatter={useFormattedPrice}
                    testId="list-price"
                    data-value={priceOnData?.ListPrice}
                    variant="listing"
                    classes="text__legend"
                    SRText="Original price:"
                  />
                )}
                {priceOnData?.ListPrice && (
                  <DiscountBadge
                    listPrice={priceOnData?.ListPrice}
                    spotPrice={priceOnData?.BasePrice}
                    big
                  />
                )}
              </div>
              <Price
                value={priceOnData?.BasePrice}
                formatter={useFormattedPrice}
                testId="price"
                data-value={priceOnData?.BasePrice}
                variant="spot"
                classes="text__lead"
                SRText="Sale Price:"
              />
              {installments && (
                <>
                  <Instalments instalment={priceVaritation} />
                  <InstalmentList priceVariation={priceVaritation} />
                </>
              )}
            </div>
          </section>
          <ButtonBuy {...buyProps}>Adicionar ao carrinho</ButtonBuy>
        </section>

        <section className="product-details__content">
          <article className="product-details__description">
            {typeof window !== 'undefined' && (
              <ProductDescription
                loadMore="Load More"
                descriptionTabs={tabSpecification}
                maxHeight={100}
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

export default ProductDetails
