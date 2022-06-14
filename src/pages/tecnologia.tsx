import ServerCollectionPageQuery from 'src/mocks/ServerCollectionPageQuery.json'
import ScrollToTopButton from 'src/components/sections/ScrollToTopButton'
import ProductGallery from 'src/components/sections/ProductGallery'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import { mark } from 'src/sdk/tests/mark'
import { SearchProvider, parseSearchState } from '@faststore/sdk'
import { applySearchState } from 'src/sdk/search/state'
import { ITEMS_PER_PAGE } from 'src/constants'
import { useEffect, useState } from 'react'

function Page() {
  const collection = ServerCollectionPageQuery

  const title = collection?.seo.title ?? ''

  const [href, setHref] = useState<string>(
    'https://deploy-preview-26--gokursos.netlify.app/tecnologia/'
  )

  useEffect(() => {
    setHref(window.location.href)
  }, [])

  const maybeState = parseSearchState(new URL(href))

  const searchParams = {
    page: maybeState?.page,
    base: maybeState?.base,
    selectedFacets: maybeState ? maybeState.selectedFacets : [],
    term: maybeState?.term ?? null,
    sort: maybeState?.sort ?? 'score_desc',
  }

  return (
    <>
      <SearchProvider
        onChange={applySearchState}
        itemsPerPage={ITEMS_PER_PAGE}
        {...searchParams}
      >
        <Breadcrumb
          breadcrumbList={collection?.breadcrumbList.itemListElement}
          name={title}
        />

        <ProductGallery title={title} />

        <ScrollToTopButton />
      </SearchProvider>
    </>
  )
}

Page.displayName = 'Page'
export default mark(Page)
