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
import Prices from 'src/components/ui/Price'
import ProductTitle from 'src/components/ui/ProductTitle'
import productQueryDetails from 'src/mocks/productQueryDetails.json'
import IconClose from 'src/components/icons/IconClose'
import { useBuyButton } from 'src/sdk/cart/useBuyButton'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'

import ProductBrand from '../ProductBrand'
import mockedSubscriptionOffers from '../../../mocks/subscriptionOffers.json'
import Section from '../Section'
import Instalments from '../Instalments'
import Workload from '../Workload'
import { InstalmentList } from './InstalmentList/InstalmentList'
import SubscriptionOffers from './SubscriptionOffers'
import { VideoAndText } from './videoAndtextDetails'
import type { ProductData } from './typings'

interface Props {
  product: ProductData
}

function ProductDetails({ product }: Props) {
  const [addQuantity] = useState(1)

  const {
    ID,
    Name,
    Description,
    Especificacao,
    ProductImageURL,
    Price,
    BreadCrumbs,
    Category,
    Installments,
    Brand,
  } = product

  const priceVaritation = Installments

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

  const buyProps = useBuyButton({
    id: ID,
    price: Price?.BasePrice,
    listPrice: Price?.ListPrice,
    seller: {
      identifier: Brand?.Name,
    },
    quantity: addQuantity,
    itemOffered: {
      sku: '',
      name: Name,
      gtin: '',
      image: [
        {
          url: ProductImageURL,
          alternateName: Name,
        },
      ],
      brand: { name: '' },
      isVariantOf: { productGroupID: '', name: Name },
    },
  })

  const iconClose = () => {
    return <IconClose />
  }

  const facebookShareIcon = () => {
    return <FacebookShareIcon />
  }

  const twitterShareIcon = () => {
    return <TwitterShareIcon />
  }

  const pinterestShareIcon = () => {
    return <PinterestShareIcon />
  }

  const pdpLink = typeof window !== 'undefined' && window.location.href

  return (
    <Section className="product-details layout__content layout__section column">
      <Breadcrumb
        breadcrumbList={BreadCrumbs?.map((item: any) => {
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
                <h1 className="text__title-product">{Name}</h1>
                <div className="share-icon">
                  <ShareProduct
                    additionalOverlay
                    shareWebSocials="Compartilhe:"
                    productURL="/"
                    CloseIcon={iconClose}
                    shareLinks={[
                      {
                        name: 'Facebook',
                        url: `https://www.facebook.com/sharer/sharer.php?u=${pdpLink}`,
                        SocialIcon: facebookShareIcon,
                      },
                      {
                        name: 'Twitter',
                        url: `https://twitter.com/intent/tweet?url=${pdpLink}`,
                        SocialIcon: twitterShareIcon,
                      },
                      {
                        name: 'Pinterest',
                        url: `https://www.pinterest.com/pin/create/button/?url=${pdpLink}`,
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
                {Category?.Name && Category?.Name !== undefined && (
                  <ProductTags
                    tagCategoryLabel={Category?.Name}
                    urlCategory={`/${Category?.Slug}`}
                  />
                )}
                {/* <RatingSummary rates={[1, 3, 5, 3, 2, 1, 1, 2, 4, 2]} /> */}
                {Especificacao?.CargaHoraria?.Text && (
                  <Workload workload={Especificacao?.CargaHoraria?.Text} />
                )}
              </>
            }
          />
        </header>

        <section className="product-details__image">
          {product?.ProductImageURL ? (
            <img
              loading="eager"
              src={product?.ProductImageURL}
              alt={product?.Name}
              sizes="(max-width: 768px) 25vw, 50vw"
            />
          ) : (
            <h4 className="image-not-found">imagem indisponível</h4>
          )}
        </section>

        <section className="product-details__settings">
          <section className="product-details__values">
            <div className="product-details__prices">
              {Price?.ListPrice && (
                <div className="product-details__list-price-container">
                  <Prices
                    value={Price?.ListPrice}
                    formatter={useFormattedPrice}
                    testId="list-price"
                    data-value={Price?.ListPrice}
                    variant="listing"
                    classes="text__legend"
                    SRText="Original price:"
                  />
                  <DiscountBadge
                    listPrice={Price?.ListPrice}
                    spotPrice={Price?.BasePrice}
                    big
                  />
                </div>
              )}
              <Prices
                value={Price?.BasePrice}
                formatter={useFormattedPrice}
                testId="price"
                data-value={Price?.BasePrice}
                variant="spot"
                classes="text__lead"
                SRText="Sale Price:"
              />
              {Installments && (
                <>
                  <Instalments
                    instalment={priceVaritation.map((installments: any) => {
                      return {
                        installment: installments?.Parcela,
                        priceValue: installments?.Valor,
                        text: installments?.Text,
                      }
                    })}
                  />
                  <InstalmentList
                    priceVariation={priceVaritation.map((installments: any) => {
                      return {
                        installment: installments?.Parcela,
                        priceValue: installments?.Valor,
                      }
                    })}
                  />
                </>
              )}
            </div>
          </section>
          <ButtonBuy {...buyProps}>Adicionar ao carrinho</ButtonBuy>
        </section>

        <section className="product-details__content">
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
            {/* <ProductRating /> */}
            {/* <div className="product-questions__container">
              <LatestQuestions productQuestions={productQuestions} />
              <QuestionForm />
            </div> */}
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
