import { List as UIList } from '@faststore/ui'
import { forwardRef } from 'react'
// import Button from 'src/components/ui/Button'
import Link from 'src/components/ui/Link'
import type { HTMLAttributes } from 'react'

import SuggestionProductCard from '../SuggestionProductCard'

import './suggestions.scss'

// const MAX_SUGGESTIONS = 10
// const MAX_SUGGESTIONS_WITH_PRODUCTS = 5

// const SUGGESTIONS = ['Sony MX', 'Sony MV-100 Headphone', 'Sony M2000 Earbuds']

// function formatSearchTerm(
//   indexSubstring: number,
//   searchTerm: string,
//   suggestion: string
// ) {
//   if (indexSubstring === 0) {
//     return searchTerm
//       .split('')
//       .map((char, idx) =>
//         idx === 0 && suggestion.indexOf(char.toUpperCase()) === 0
//           ? char.toUpperCase()
//           : char.toLowerCase()
//       )
//       .join('')
//   }

//   return searchTerm.toLowerCase()
// }

// function handleSuggestions(suggestion: string, searchTerm: string) {
//   const suggestionSubstring = suggestion
//     .toLowerCase()
//     .split(searchTerm.toLowerCase())

//   return (
//     <p>
//       {suggestionSubstring.map((substring, indexSubstring) => (
//         <>
//           {substring.length > 0 && (
//             <b className="suggestions__item-bold">
//               {indexSubstring === 0
//                 ? substring.charAt(0).toUpperCase() + substring.slice(1)
//                 : substring}
//             </b>
//           )}
//           {indexSubstring !== suggestionSubstring.length - 1 &&
//             formatSearchTerm(indexSubstring, searchTerm, suggestion)}
//         </>
//       ))}
//     </p>
//   )
// }

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
    // const suggestions =
    //   SUGGESTED_PRODUCTS.length > 0
    //     ? SUGGESTIONS.slice(0, MAX_SUGGESTIONS_WITH_PRODUCTS)
    //     : SUGGESTIONS.slice(0, MAX_SUGGESTIONS)

    return (
      <section
        ref={ref}
        data-testid={testId}
        data-store-suggestions
        className="suggestions"
        {...otherProps}
      >
        {/* {suggestions.length > 0 && (
          <UIList data-suggestions-list className="suggestions__section">
            {suggestions?.map((suggestion, index) => (
              <li key={index} className="suggestions__item">
                <Button onClick={() => null}>
                  {handleSuggestions(suggestion, term)}
                </Button>
              </li>
            ))}
          </UIList>
        )} */}

        {products.length > 0 && (
          <div className="suggestions__section">
            <p className="suggestions__title">{`Busca por "${term}"`}</p>
            <UIList>
              {products.map((product: any, index: number) => (
                <li key={index} className="suggestions__item">
                  <Link to={`/${product.LinkId}/p`} variant="display">
                    <SuggestionProductCard product={product} />
                  </Link>
                </li>
              ))}
            </UIList>
          </div>
        )}
      </section>
    )
  }
)

export default Suggestions
