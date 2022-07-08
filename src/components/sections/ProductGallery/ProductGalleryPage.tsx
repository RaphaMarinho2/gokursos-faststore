import { useSearch } from '@faststore/sdk'
import ProductGrid from 'src/components/product/ProductGrid'
import type { ProductsQueryQuery } from '@generated/graphql'
// import { useProducts } from './usePageProducts'
import './product-gallery.scss'

/* If showSponsoredProducts is true, a ProductTiles will be displayed in between two blocks of ProductGrid on the page 0 */
interface Props {
  page: number
  fallbackData?: ProductsQueryQuery
  title: string
  showSponsoredProducts?: boolean
  products?: any
}

function GalleryPage({
  page,
  // title,
  // fallbackData,
  // showSponsoredProducts = true,
  products,
}: Props) {
  // const products = useProducts(page, fallbackData)

  // const products = productGalleryQuery?.data?.search?.products?.edges

  const { itemsPerPage } = useSearch()

  if (!products.length) {
    return null
  }

  // const productsSponsored = showSponsoredProducts
  //   ? products.slice(0, 2)
  //   : undefined

  // const middleItemIndex = Math.ceil(itemsPerPage / 2)

  // const shouldDisplaySponsoredProducts =
  //   page === 0 && productsSponsored && productsSponsored.length > 1

  return (
    <>
      {/* <Sentinel
        products={products}
        page={page}
        pageSize={itemsPerPage}
        title={title}
      /> */}
      <ProductGrid products={products} page={page} pageSize={itemsPerPage} />
    </>
  )
}

export default GalleryPage
