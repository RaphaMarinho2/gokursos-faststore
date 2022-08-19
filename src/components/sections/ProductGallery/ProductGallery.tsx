import { usePagination, useSearch as useFSSearch } from '@faststore/sdk'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { lazy, useState } from 'react'
import Sort from 'src/components/search/Sort'
import ProductGridSkeleton from 'src/components/skeletons/ProductGridSkeleton'
import SkeletonElement from 'src/components/skeletons/SkeletonElement'
import Button, { ButtonLink } from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import { mark } from 'src/sdk/tests/mark'
import useSearch from 'src/contexts/SearchContext/useSearch'
import Filters from 'src/components/search/PLPFilters'

import Section from '../Section'
import { useProductsPrefetch } from './usePageProducts'
import './product-gallery.scss'
import { useGalleryQuery } from './useGalleryQuery'
import { useDelayedFacets } from './useDelayedFacets'

const GalleryPage = lazy(() => import('./ProductGalleryPage'))

type ForceSvg = {
  svg1?: JSX.Element
  svg2?: JSX.Element
}
interface Props {
  galleryTitle?: string | null
  title: string
  searchTerm?: string
  forceSvg?: ForceSvg
  hasFilter?: boolean
}

function ProductGallery({
  title,
  searchTerm,
  galleryTitle,
  hasFilter = true,
}: Props) {
  const { products, productsCount, isLoading, slug } = useSearch()

  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
  const { pages, addNextPage, addPrevPage, state: searchState } = useFSSearch()

  const { data } = useGalleryQuery()

  const facets = useDelayedFacets(data)

  const totalCount = data?.search.products.pageInfo.totalCount ?? 0
  const { next, prev } = usePagination(totalCount)

  useProductsPrefetch(prev ? prev.cursor : null)
  useProductsPrefetch(next ? next.cursor : null)

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
            <Filters
              slug={slug}
              isFilterOpen={isFilterOpen}
              onDismiss={() => setIsFilterOpen(false)}
            />
          </div>
        )}

        <div
          className="product-listing__results-count"
          data-count={productsCount.actualCount}
        >
          <SkeletonElement shimmer type="text" loading={!data || isLoading}>
            <h2 data-testid="total-product-count">
              <span>Monstrando</span>
              <span>
                {productsCount.actualCount !== productsCount.total &&
                  `${productsCount.actualCount} de `}
                {productsCount.total} produtos
              </span>
            </h2>
          </SkeletonElement>
        </div>

        <div className="product-listing__sort">
          <SkeletonElement shimmer type="text" loading={facets?.length === 0}>
            <Sort />
          </SkeletonElement>

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
          <ProductGridSkeleton loading={!products || isLoading}>
            {pages.map((page) => (
              <>
                {products?.length && (
                  <GalleryPage
                    key={`gallery-page-${page}`}
                    showSponsoredProducts={false}
                    fallbackData={
                      page === searchState.page ? products : undefined
                    }
                    page={page}
                    title={title}
                    products={products}
                  />
                )}
              </>
            ))}
          </ProductGridSkeleton>
          {/* Add link to next page. This helps on SEO */}
          {next !== false && products && products.length ? (
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
          ) : (
            <></>
          )}
        </div>
      </div>
    </Section>
  )
}

export default mark(ProductGallery)
