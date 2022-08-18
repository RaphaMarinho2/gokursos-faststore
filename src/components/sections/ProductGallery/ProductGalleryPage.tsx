import { useSearch } from '@faststore/sdk'
import ProductNotFound from 'src/components/common/ProductNotFound/ProductNotFound'
import type { ProductsProductCard } from 'src/components/product/ProductCard/ProductCard'
import ProductGrid from 'src/components/product/ProductGrid'
import './product-gallery.scss'

/* If showSponsoredProducts is true, a ProductTiles will be displayed in between two blocks of ProductGrid on the page 0 */
interface Props {
  page: number
  fallbackData?: any
  title: string
  showSponsoredProducts?: boolean
  products: ProductsProductCard[]
}

function GalleryPage({ page, products }: Props) {
  const { itemsPerPage } = useSearch()

  if (!products.length) {
    return (
      <ProductNotFound
        title="OPS!!!!!"
        subtitle="Infelizmente não conseguimos encontrar nenhum resultado para os filtros selecionados."
      />
    )
  }

  return <ProductGrid products={products} page={page} pageSize={itemsPerPage} />
}

export default GalleryPage
