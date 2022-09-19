import { BreadcrumbJsonLd, ProductJsonLd } from 'gatsby-plugin-next-seo'
// import ProductDetails from 'src/components/sections/ProductDetails'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type {
  ProductPageQueryQuery,
  ServerProductPageQueryQuery,
  ProductPageQueryQueryVariables,
} from '@generated/graphql'
import 'src/styles/pages/pdp.scss'
import PDPProductShelf from 'src/components/sections/PDPProductShelf'
import browserProductQuery from 'src/mocks/browserProductQuery.json'

export type Props = PageProps<
  ProductPageQueryQuery,
  ProductPageQueryQueryVariables,
  unknown,
  ServerProductPageQueryQuery
> & { slug: string }

function Page() {
  const { product } = browserProductQuery.data

  const departmentName = 'Negócios'

  return (
    <>
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

      {/* <ProductDetails product={product} /> */}

      <PDPProductShelf
        pretitle=""
        title={`Mais vendidos de ${departmentName}`}
        productDepartment={departmentName}
      />
    </>
  )
}

Page.displayName = 'Page'

export default mark(Page)
