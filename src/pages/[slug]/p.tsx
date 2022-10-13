import { useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import {
  BreadcrumbJsonLd,
  GatsbySeo,
  ProductJsonLd,
} from 'gatsby-plugin-next-seo'
import ProductDetails from 'src/components/sections/ProductDetails'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type {
  ProductPageQueryQuery,
  ProductPageQueryQueryVariables,
} from '@generated/graphql'
import 'src/styles/pages/pdp.scss'
import axios from 'axios'
import PDPProductShelf from 'src/components/sections/PDPProductShelf'
import type { ProductInfo } from 'src/components/sections/ProductDetails/typings'

export type Props = PageProps<
  ProductPageQueryQuery,
  ProductPageQueryQueryVariables,
  unknown,
  ProductInfo
> & { slug: string }

function Page(props: Props) {
  const { locale, currency } = useSession()
  const {
    data: { site },
    serverData: { productData },
    location: { host },
    slug,
  } = props

  const title = site?.siteMetadata?.title ?? ''
  const description = site?.siteMetadata?.description ?? ''

  const canonical =
    host !== undefined ? `https://${host}/${slug}/p` : `/${slug}/p`

  return (
    <>
      {/* SEO */}
      <GatsbySeo
        title={title}
        description={description}
        canonical={canonical}
        language={locale}
        openGraph={{
          type: 'og:product',
          url: `${site?.siteMetadata?.siteUrl}${slug}`,
          title,
          description,
          images: [
            {
              url: productData?.ProductImageURL,
              alt: productData.Name,
            },
          ],
        }}
        metaTags={[
          {
            property: 'product:price:amount',
            content: '' ?? undefined,
          },
          {
            property: 'product:price:currency',
            content: currency.code,
          },
        ]}
      />
      <BreadcrumbJsonLd
        itemListElements={productData?.BreadCrumbs?.map((item: any) => {
          return {
            item: item.Url,
            name: item.Titulo,
            position: item.Tipo,
          }
        })}
      />
      <ProductJsonLd
        name={productData.Name}
        description={productData?.Description}
        brand={productData.Brand?.Name}
        sku=""
        gtin=""
        images={productData.ProductImageURL} // Somehow, Google does not understand this valid Schema.org schema, so we need to do conversions
        offersType="AggregateOffer"
        offers={{
          ...productData?.Price,
          price: productData?.Price?.BasePrice,
          priceCurrency: 'BRA',
        }}
      />

      {/*
        WARNING: Do not import or render components from any
        other folder than '../components/sections' in here.

        This is necessary to keep the integration with the CMS
        easy and consistent, enabling the change and reorder
        of elements on this page.

        If needed, wrap your component in a <Section /> component
        (not the HTML tag) before rendering it here.
      */}

      <ProductDetails product={productData} />

      <PDPProductShelf
        pretitle=""
        title={`Mais vendidos de ${productData?.Department.Name}`}
        productDepartment={productData?.Department.Name}
      />
    </>
  )
}

export const querySSG = graphql`
  query ProductPageQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
        siteUrl
      }
    }
  }
`

export const getServerData = async ({ pageContext }: Props) => {
  const { slug } = pageContext

  try {
    const response =
      await axios.get(`${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=Installments,Brand,
    Department, Category, Price, Especificacao, Especificacao/CargaHoraria, Especificacao/DisponibilidadeDias,
    Especificacao/TipoCurso, BreadCrumbs&$filter=LinkId eq '${slug}'&$top=1&$select=_Id, Name,
    ProductImageURL,ID,IsActive, Description, DescriptionShort, isKit, Department, Category, Price/ListPrice, Price/BasePrice,
    Price/isSale, Price/SalePercentage, Especificacao/Conteudo, Especificacao/Objetivos,
    Especificacao/CargaHoraria/Text,Especificacao/DisponibilidadeDias/Text, Especificacao/TipoCurso/Text, Especificacao/TipoCurso/TextGodigitalEdu,
    Especificacao/TipoCurso/DescriptionCertificate, Brand/Name, BreadCrumbs/Titulo, BreadCrumbs/Url, BreadCrumbs/Tipo, Installments/Valor, Installments/Parcela,
    Installments/Text,LinkId`)

    if (!response.data.value.length) {
      const originalUrl = `/${slug}/p`

      return {
        status: 301,
        props: {},
        headers: {
          'cache-control': 'public, max-age=0, stale-while-revalidate=31536000',
          location: `/404/?from=${encodeURIComponent(originalUrl)}`,
        },
      }
    }

    return {
      status: 200,
      props: {
        productData: {
          ID: response.data.value[0]?._Id,
          Name: response.data.value[0]?.Name,
          Description: response.data.value[0]?.Description,
          Especificacao: response.data.value[0]?.Especificacao,
          ProductImageURL: response.data.value[0]?.ProductImageURL,
          Price: response.data.value[0]?.Price,
          BreadCrumbs: response.data.value[0]?.BreadCrumbs,
          Category: response.data.value[0]?.Category,
          Department: response.data.value[0]?.Department,
          Installments: response.data.value[0]?.Installments,
          Brand: response.data.value[0]?.Brand,
        },
      },
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
      },
    }
  } catch (err) {
    console.error(err)

    return {
      status: 500,
      props: {},
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
      },
    }
  }
}

Page.displayName = 'Page'

export default mark(Page)
