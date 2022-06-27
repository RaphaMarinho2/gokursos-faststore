import { useSearch } from '@faststore/sdk'
import ProductGrid from 'src/components/product/ProductGrid'
import Sentinel from 'src/sdk/search/Sentinel'
import type { ProductsQueryQuery } from '@generated/graphql'
import productGalleryQuery from 'src/mocks/productGalleryQuery.json'

import ProductTiles from '../ProductTiles'
// import { useProducts } from './usePageProducts'
import './product-gallery.scss'

/* If showSponsoredProducts is true, a ProductTiles will be displayed in between two blocks of ProductGrid on the page 0 */
interface Props {
  page: number
  fallbackData?: ProductsQueryQuery
  title: string
  showSponsoredProducts?: boolean
}

function GalleryPage({
  page,
  title,
  // fallbackData,
  showSponsoredProducts = true,
}: Props) {
  // const products = useProducts(page, fallbackData)

  const products = productGalleryQuery?.data?.search?.products?.edges

  const { itemsPerPage } = useSearch()

  if (products == null) {
    return null
  }

  const productsSponsored = showSponsoredProducts
    ? products.slice(0, 2)
    : undefined

  const middleItemIndex = Math.ceil(itemsPerPage / 2)

  const shouldDisplaySponsoredProducts =
    page === 0 && productsSponsored && productsSponsored.length > 1

  return (
    <>
      <Sentinel
        products={products}
        page={page}
        pageSize={itemsPerPage}
        title={title}
      />
      {shouldDisplaySponsoredProducts ? (
        <>
          <ProductGrid
            products={products.slice(0, middleItemIndex)}
            page={page}
            pageSize={middleItemIndex}
          />
          <div className="product-listing__results-sponsored">
            <h3>Sponsored</h3>
            {/*
              TODO: Refactor this bit of code

              Sections should be self contained and should not import other sections.
              We should remove/refactor this section from here
            */}
            <ProductTiles
              selectedFacets={[{ key: 'productClusterIds', value: '141' }]}
              title=""
            />
          </div>
          <ProductGrid
            products={products.slice(middleItemIndex, itemsPerPage)}
            page={page}
            pageSize={middleItemIndex}
          />
        </>
      ) : (
        <ProductGrid products={products} page={page} pageSize={itemsPerPage} />
      )}
    </>
  )
}

export default GalleryPage
