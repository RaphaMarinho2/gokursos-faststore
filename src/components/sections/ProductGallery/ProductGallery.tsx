import { usePagination, useSearch } from '@faststore/sdk'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { lazy, Suspense, useState } from 'react'
import Filter from 'src/components/search/Filter'
import Sort from 'src/components/search/Sort'
import FilterSkeleton from 'src/components/skeletons/FilterSkeleton'
import ProductGridSkeleton from 'src/components/skeletons/ProductGridSkeleton'
import SkeletonElement from 'src/components/skeletons/SkeletonElement'
import Button, { ButtonLink } from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import { mark } from 'src/sdk/tests/mark'
import type { ProductsProductCard } from 'src/components/product/ProductCard/ProductCard'
import productGalleryQuery2 from 'src/mocks/productGalleryQuery2.json'

import Section from '../Section'
import EmptyGallery from './EmptyGallery'
import { useProductsPrefetch } from './usePageProducts'
import './product-gallery.scss'
import { useGalleryQuery } from './useGalleryQuery'
import { useDelayedFacets } from './useDelayedFacets'

const GalleryPage = lazy(() => import('./ProductGalleryPage'))
const GalleryPageSkeleton = <ProductGridSkeleton loading />

type ForceSvg = {
  svg1?: JSX.Element
  svg2?: JSX.Element
}
interface Props {
  galleryTitle?: string | null
  title: string
  searchTerm?: string
  products?: ProductsProductCard[]
  productsCount?: number
  forceSvg?: ForceSvg
  hasFilter?: boolean
}

function ProductGallery({
  title,
  searchTerm,
  products,
  productsCount,
  galleryTitle,
  forceSvg,
  hasFilter = true,
}: Props) {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
  const { pages, addNextPage, addPrevPage, state: searchState } = useSearch()

  const { data } = useGalleryQuery()

  const facets = useDelayedFacets(data)

  const facetsWithPrice = productGalleryQuery2.data?.search?.facets

  const totalCount = data?.search.products.pageInfo.totalCount ?? 0
  const { next, prev } = usePagination(totalCount)

  useProductsPrefetch(prev ? prev.cursor : null)
  useProductsPrefetch(next ? next.cursor : null)

  if (data && productsCount === 0) {
    return (
      <Section
        data-testid="product-gallery"
        className="product-listing layout__content"
      >
        <EmptyGallery />
      </Section>
    )
  }

  return (
    <Section
      data-testid="product-gallery"
      className="product-listing layout__content-full"
    >
      {searchTerm && (
        <header className="product-listing__search-term layout__content">
          <h1>
            Showing results for: <span>{searchTerm}</span>
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
            <FilterSkeleton loading={facets?.length === 0}>
              <Filter
                isOpen={isFilterOpen}
                facets={facets}
                onDismiss={() => setIsFilterOpen(false)}
                forceSvg={forceSvg && forceSvg}
              />
            </FilterSkeleton>
            <FilterSkeleton loading={facetsWithPrice?.length === 0}>
              <Filter
                isOpen={isFilterOpen}
                facets={facetsWithPrice}
                onDismiss={() => setIsFilterOpen(false)}
                forceSvg={forceSvg && forceSvg}
              />
            </FilterSkeleton>
          </div>
        )}

        <div
          className="product-listing__results-count"
          data-count={productsCount}
        >
          <SkeletonElement shimmer type="text" loading={!data}>
            <h2 data-testid="total-product-count">
              <span>Total de</span>
              <span>{productsCount} produtos</span>
            </h2>
          </SkeletonElement>
        </div>

        <div className="product-listing__sort">
          <SkeletonElement shimmer type="text" loading={facets?.length === 0}>
            <Sort />
          </SkeletonElement>

          <SkeletonElement shimmer type="button" loading={facets?.length === 0}>
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
        </div>

        <div className="product-listing__results">
          {/* Add link to previous page. This helps on SEO */}
          {prev !== false && (
            <div className="product-listing__pagination product-listing__pagination--top">
              <GatsbySeo defer linkTags={[{ rel: 'prev', href: prev.link }]} />
              <ButtonLink
                onClick={(e) => {
                  e.currentTarget.blur()
                  e.preventDefault()
                  addPrevPage()
                }}
                to={prev.link}
                rel="prev"
                variant="secondary"
                iconPosition="left"
                icon={
                  <Icon name="ArrowLeft" width={16} height={16} weight="bold" />
                }
              >
                Previous Page
              </ButtonLink>
            </div>
          )}

          {/* Render ALL products */}
          {data ? (
            <Suspense fallback={GalleryPageSkeleton}>
              {pages.map((page) => (
                <>
                  {products && (
                    <GalleryPage
                      key={`gallery-page-${page}`}
                      showSponsoredProducts={false}
                      fallbackData={
                        page === searchState.page ? data : undefined
                      }
                      page={page}
                      title={title}
                      products={products}
                    />
                  )}
                </>
              ))}
            </Suspense>
          ) : (
            GalleryPageSkeleton
          )}

          {/* Add link to next page. This helps on SEO */}
          {next !== false && (
            <div className="product-listing__pagination product-listing__pagination--bottom">
              <GatsbySeo defer linkTags={[{ rel: 'next', href: next.link }]} />
              <ButtonLink
                data-testid="show-more"
                onClick={(e) => {
                  e.currentTarget.blur()
                  e.preventDefault()
                  addNextPage()
                }}
                to={next.link}
                rel="next"
                variant="secondary"
              >
                CARREGAR MAIS
              </ButtonLink>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}

ProductGallery.displayName = 'ProductGallery'
export default mark(ProductGallery)
