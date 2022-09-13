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
import { useBuyButton } from 'src/sdk/cart/useBuyButton'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'

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
    // Installments,
    Brand,
  } = product

  const Installments = [
    {
      ID: 113434415614394571,
      Valor: 233.33333333,
      Parcela: 3,
      Text: '3x de R$ 233,33 sem juros',
    },
    {
      ID: 113434415614394572,
      Valor: 175.0,
      Parcela: 4,
      Text: '4x de R$ 175,00 sem juros',
    },
    {
      ID: 113434415614394573,
      Valor: 140.0,
      Parcela: 5,
      Text: '5x de R$ 140,00 sem juros',
    },
    {
      ID: 113434415614394574,
      Valor: 116.66666667,
      Parcela: 6,
      Text: '6x de R$ 116,67 sem juros',
    },
    {
      ID: 113434415614394575,
      Valor: 100.0,
      Parcela: 7,
      Text: '7x de R$ 100,00 sem juros',
    },
    {
      ID: 113434415614394576,
      Valor: 87.5,
      Parcela: 8,
      Text: '8x de R$ 87,50 sem juros',
    },
    {
      ID: 113434415614394577,
      Valor: 77.77777778,
      Parcela: 9,
      Text: '9x de R$ 77,78 sem juros',
    },
    {
      ID: 113434415614394578,
      Valor: 70.0,
      Parcela: 10,
      Text: '10x de R$ 70,00 sem juros',
    },
    {
      ID: 113434415614394579,
      Valor: 63.63636364,
      Parcela: 11,
      Text: '11x de R$ 63,64 sem juros',
    },
    {
      ID: 113434415614394580,
      Valor: 58.33333333,
      Parcela: 12,
      Text: '12x de R$ 58,33 sem juros',
    },
    {
      ID: 113434415614394569,
      Valor: 700.0,
      Parcela: 1,
      Text: 'Pagamento à vista - R$ 700,00 sem juros',
    },
    {
      ID: 113434415614394570,
      Valor: 350.0,
      Parcela: 2,
      Text: '2x de R$ 350,00 sem juros',
    },
  ]

  const priceVaritation = Installments

  const tabSpecification = [
    {
      name: Description ? 'Sobre o curso' : '',
      description: Description ?? '',
    },
    {
      name: Especificacao?.Conteudo ? 'Conteúdo do curso' : '',
      description: Especificacao?.Conteudo ?? '',
    },
    {
      name: Especificacao?.Objetivos ? 'Objetivos' : '',
      description: Especificacao?.Objetivos ?? '',
    },
    {
      name: Especificacao?.TipoCurso?.DescriptionCertificate
        ? 'Certificados'
        : '',
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
      image: ProductImageURL,
      brand: { name: '' },
      isVariantOf: { productGroupID: '', name: Name },
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
                {Especificacao?.CargaHoraria.Text && (
                  <Workload workload={Especificacao?.CargaHoraria.Text} />
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
