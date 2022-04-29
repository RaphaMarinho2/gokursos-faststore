import { useSession } from '@faststore/sdk'
import { gql } from '@vtex/graphql-utils'
import { graphql } from 'gatsby'
import {
  BreadcrumbJsonLd,
  GatsbySeo,
  ProductJsonLd,
} from 'gatsby-plugin-next-seo'
import ProductDetails from 'src/components/sections/ProductDetails'
import ProductShelf from 'src/components/sections/ProductShelf'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type {
  ProductPageQueryQuery,
  ServerProductPageQueryQuery,
  ProductPageQueryQueryVariables,
} from '@generated/graphql'
import { ITEMS_PER_SECTION } from 'src/constants'
import { useBuyButton } from 'src/sdk/cart/useBuyButton'

import 'src/styles/pages/pdp.scss'

export type Props = PageProps<
  ProductPageQueryQuery,
  ProductPageQueryQueryVariables,
  unknown,
  ServerProductPageQueryQuery
> & { slug: string }

function Page(props: Props) {
  const { locale, currency } = useSession()
  const {
    data: { site },
    serverData: { product },
    location: { host },
    slug,
  } = props

  const title = product?.seo.title ?? site?.siteMetadata?.title ?? ''
  const description =
    product?.seo.description ?? site?.siteMetadata?.description ?? ''

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
          images: product.image.map((img) => ({
            url: img.url,
            alt: img.alternateName,
          })),
        }}
        metaTags={[
          {
            property: 'product:price:amount',
            content: product.offers.lowPrice?.toString() ?? undefined,
          },
          {
            property: 'product:price:currency',
            content: currency.code,
          },
        ]}
      />
      <BreadcrumbJsonLd
        itemListElements={product.breadcrumbList.itemListElement ?? []}
      />
      <ProductJsonLd
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

      <ProductDetails product={product} />

      <ProductShelf
        first={ITEMS_PER_SECTION}
        term={product.brand.name}
        title="You might also like"
        withDivisor
      />

      <ProductShelf
        first={ITEMS_PER_SECTION}
        term={product.brand.name}
        title="You might also like"
        withDivisor
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

export const querySSR = gql`
  query ServerProductPageQuery($id: String!) {
    product(locator: [{ key: "id", value: $id }]) {
      id: productID
      slug

      seo {
        title
        description
      }

      brand {
        name
      }

      slug
      sku
      gtin
      name
      description

      breadcrumbList {
        itemListElement {
          item
          name
          position
        }
      }

      image {
        url
        alternateName
      }

      offers {
        lowPrice
        highPrice
        priceCurrency
        offers {
          availability
          price
          priceValidUntil
          priceCurrency
          itemCondition
          seller {
            identifier
          }
        }
      }

      ...ProductDetailsFragment_product
    }
  }
`

export const getServerData = async ({
  params: { slug },
}: {
  params: Record<string, string>
}) => {
  try {
    const id = slug.split('-').pop()

    console.info('slug')

    const { execute } = await import('src/server/index')
    const { data } = await execute({
      operationName: querySSR,
      variables: { id },
    })

    if (data === null) {
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
      props: data ?? {},
      headers: {
        'cache-control': 'public, max-age=0, stale-while-revalidate=31536000',
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