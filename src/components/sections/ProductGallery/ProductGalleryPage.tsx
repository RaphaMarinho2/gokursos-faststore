import { useSearch } from '@faststore/sdk'
import ProductGrid from 'src/components/product/ProductGrid'
import type { ProductsQueryQuery } from '@generated/graphql'
import './product-gallery.scss'

/* If showSponsoredProducts is true, a ProductTiles will be displayed in between two blocks of ProductGrid on the page 0 */
interface Props {
  page: number
  fallbackData?: ProductsQueryQuery
  title: string
  showSponsoredProducts?: boolean
  products?: any
}

function GalleryPage({ page, products }: Props) {
  const { itemsPerPage } = useSearch()

  if (!products.length) {
    return null
  }

  return (
    <>
      <ProductGrid products={products} page={page} pageSize={itemsPerPage} />
    </>
  )
}

export default GalleryPage
