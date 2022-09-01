import { useSearch } from '@faststore/sdk'
import { navigate } from 'gatsby'
import ProductNotFound from 'src/components/common/ProductNotFound/ProductNotFound'
import type { ProductsProductCard } from 'src/components/product/ProductCard/ProductCard'
import ProductGrid from 'src/components/product/ProductGrid'
import Button from 'src/components/ui/Button'
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

  const urlParams = new URLSearchParams(window.location.search)
  const searchTerm = urlParams.get('q')

  if (!products?.length) {
    return (
      <ProductNotFound
        title="OPS!!!!!"
        subtitle={
          searchTerm ? (
            <EmptySearchLayout searchTerm={searchTerm} />
          ) : (
            'Infelizmente não conseguimos encontrar nenhum resultado.'
          )
        }
      />
    )
  }

  return <ProductGrid products={products} page={page} pageSize={itemsPerPage} />
}

function EmptySearchLayout({ searchTerm }: { searchTerm: string }) {
  const redirectToHome = () => navigate('/')

  return (
    <div className="search-empty">
      <div className="search-empty__main-text">
        Infelizmente, não encontramos nada parecido com{' '}
        <span className="search-empty__term">{searchTerm}</span>
      </div>
      <p className="search-empty__others">
        Dê uma olhada nas categorias mais populares e veja se encontra o que
        procura:
      </p>
      <Button
        className="search-empty__button"
        variant="secondary"
        onClick={redirectToHome}
      >
        Veja outros produtos
      </Button>
    </div>
  )
}

export default GalleryPage
