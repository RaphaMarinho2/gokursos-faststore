import { List as UIList } from '@faststore/ui'
import { forwardRef } from 'react'
import Link from 'src/components/ui/Link'
import type { HTMLAttributes } from 'react'

import SuggestionProductCard from '../SuggestionProductCard'

import './suggestions.scss'

export interface SuggestionsProps extends HTMLAttributes<HTMLDivElement> {
  testId?: string
  term: string
  products: any
}

const Suggestions = forwardRef<HTMLDivElement, SuggestionsProps>(
  function Suggestions(
    { testId = 'suggestions', term = '', products = [], ...otherProps },
    ref
  ) {
    return (
      <section
        ref={ref}
        data-testid={testId}
        data-store-suggestions
        className="suggestions"
        {...otherProps}
      >
        {products.length > 0 && (
          <div className="suggestions__section">
            <p className="suggestions__title">{`Busca por "${term}"`}</p>
            <UIList>
              {products.map((product: any, index: number) => {
                const productURL = `/${product.LinkId as string}/p`

                return (
                  <li key={index} className="suggestions__item">
                    <Link to={productURL} variant="display">
                      <SuggestionProductCard product={product} />
                    </Link>
                  </li>
                )
              })}
            </UIList>
          </div>
        )}
      </section>
    )
  }
)

export default Suggestions
