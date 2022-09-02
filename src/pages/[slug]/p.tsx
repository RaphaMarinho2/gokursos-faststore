import { useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import {
  // BreadcrumbJsonLd,
  GatsbySeo,
  // ProductJsonLd,
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

export interface ProductInfo {
  productData: {
    productId?: number
    productName?: string
    description?: string
    specification?: string
    productImages?: string
    priceOnData?: string
    breadCrumb?: string
    category?: string
    department?: string | any
    installments?: string
    brand?: string
  }
}

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
              url: '',
              alt: '',
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
      {/* <BreadcrumbJsonLd
        itemListElements={product.breadcrumbList.itemListElement ?? []}
      /> */}
      {/* <ProductJsonLd
        name={product.name}
        description={product.description}
        brand={product.brand.name}
        sku={product.sku}
        gtin={product.gtin}
        images={product.image.map((img) => img.url)} // Somehow, Google does not understand this valid Schema.org schema, so we need to do conversions
        offersType="AggregateOffer"
        offers={{
          ...product.offers,
          price: product.offers.offers[0].price.toString(),
        }}
      /> */}

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
        title={`Mais vendidos de ${productData?.department.Name}`}
        productDepartment={productData?.department.Name}
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

export const getServerData = async ({
  params: { slug },
}: {
  params: Record<string, string>
}) => {
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

    return {
      status: 200,
      props: {
        productData: {
          productId: response.data.value[0]?.ID,
          productName: response.data.value[0]?.Name,
          description: response.data.value[0]?.Description,
          specification: response.data.value[0]?.Especificacao,
          productImages: response.data.value[0]?.ProductImageURL,
          priceOnData: response.data.value[0]?.Price,
          breadCrumb: response.data.value[0]?.BreadCrumbs,
          category: response.data.value[0]?.Category,
          department: response.data.value[0]?.Department,
          installments: response.data.value[0]?.Installments,
          brand: response.data.value[0]?.Brand,
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
