import { lazy, useState } from 'react'
import Sort from 'src/components/search/Sort'
import ProductGridSkeleton from 'src/components/skeletons/ProductGridSkeleton'
import SkeletonElement from 'src/components/skeletons/SkeletonElement'
import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import { mark } from 'src/sdk/tests/mark'
import useSearch from 'src/contexts/SearchContext/useSearch'
import Filters from 'src/components/search/PLPFilters'

import Section from '../Section'
import './product-gallery.scss'
import ProductGalleryPaginator from './ProductGalleryPaginator'

const GalleryPage = lazy(() => import('./ProductGalleryPage'))

type ForceSvg = {
  svg1?: JSX.Element
  svg2?: JSX.Element
}
interface Props {
  galleryTitle?: string | null
  title: string
  forceSvg?: ForceSvg
  hasFilter?: boolean
}

function ProductGallery({ title, galleryTitle, hasFilter = true }: Props) {
  const { products, productsCount, isLoading, slug, lastPage, searchParams } =
    useSearch()

  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)

  return (
    <Section
      data-testid="product-gallery"
      className="product-listing layout__content-full"
    >
      {searchParams.term && (
        <header className="product-listing__search-term">
          <h1>
            {isLoading ? (
              'Busca'
            ) : (
              <>
                Busca ({`${productsCount} produtos`}
                <br /> encontrados)
              </>
            )}
          </h1>
        </header>
      )}

      {galleryTitle && (
        <div className="product-listing__content-grid layout__content">
          <h1 className="gallery-title">{galleryTitle}</h1>
        </div>
      )}

      <div className="product-listing__content-grid layout__content">
        {hasFilter && (
          <div className="product-listing__filters">
            <Filters
              slug={slug}
              term={searchParams.term}
              selectedFacets={searchParams.selectedFacets}
              isFilterOpen={isFilterOpen}
              onDismiss={() => setIsFilterOpen(false)}
            />
          </div>
        )}

        <div className="product-listing__sort">
          <Sort />
          {hasFilter && (
            <SkeletonElement shimmer type="button" loading={isLoading}>
              <Button
                data-testid="open-filter-button"
                icon={<Icon name="FadersHorizontal" width={20} height={20} />}
                iconPosition="left"
                aria-label="Open Filters"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                Filtros
              </Button>
            </SkeletonElement>
          )}
        </div>

        <div className="product-listing__results">
          {/* Render ALL products */}
          <ProductGridSkeleton loading={isLoading}>
            <GalleryPage
              showSponsoredProducts={false}
              page={searchParams.page}
              title={title}
              products={products}
            />
          </ProductGridSkeleton>
          {/* Add link to next page. This helps on SEO */}
          {!isLoading && products?.length ? (
            <ProductGalleryPaginator
              currentPage={searchParams.page}
              lastPage={lastPage}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </Section>
  )
}

export default mark(ProductGallery)
