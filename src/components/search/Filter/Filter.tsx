import { useSearch } from '@faststore/sdk'
import { graphql } from 'gatsby'
import Button, { ButtonIcon } from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import SlideOver from 'src/components/ui/SlideOver'
import { useModal } from 'src/sdk/ui/modal/Provider'

import Facets from './Facets'
import { useFilter } from './useFilter'
import './filter.scss'

type ForceSvg = {
  svg1?: JSX.Element
  svg2?: JSX.Element
}

interface Props {
  facets: any
  /*
   * Control whether the filter modal is open. (mobile only)
   */
  isOpen?: boolean
  /**
   * This function is called whenever the user hits "Escape", clicks outside
   * the filter modal or clicks in close button. (mobile only)
   */
  onDismiss?: () => void
  /**
   * ID to find this component in testing tools (e.g.: cypress,
   * testing-library, and jest).
   */
  testId?: string

  forceSvg?: ForceSvg
}

function Filter({
  facets: allFacets,
  onDismiss,
  isOpen = false,
  testId = 'store-filter',
  forceSvg,
}: Props) {
  const {
    setFacets,
    toggleFacet,
    state: { selectedFacets },
  } = useSearch()

  const { onModalClose } = useModal()
  const { facets, selected, expanded, dispatch } = useFilter(allFacets)

  return (
    <>
      <div className="hidden-mobile">
        <Facets
          facets={facets}
          testId={`desktop-${testId}`}
          indicesExpanded={expanded}
          onFacetChange={toggleFacet}
          onAccordionChange={(index) =>
            dispatch({ type: 'toggleExpanded', payload: index })
          }
          forceSvg={forceSvg ?? undefined}
        />
      </div>

      <SlideOver
        isOpen={isOpen}
        onDismiss={onDismiss}
        size="partial"
        direction="rightSide"
        className="filter-modal__content"
      >
        <div className="filter-modal__body">
          <header className="filter-modal__header">
            <h2 className="text__lead">FILTRO</h2>
            <ButtonIcon
              data-testid="filter-modal-button-close"
              aria-label="Close Filters"
              icon={<Icon name="X" width={32} height={32} />}
              onClick={() => {
                dispatch({
                  type: 'selectFacets',
                  payload: selectedFacets,
                })

                onModalClose()
              }}
            />
          </header>
          <Facets
            facets={facets}
            testId={`desktop-${testId}`}
            indicesExpanded={expanded}
            onFacetChange={toggleFacet}
            onAccordionChange={(index) =>
              dispatch({ type: 'toggleExpanded', payload: index })
            }
            forceSvg={forceSvg ?? undefined}
          />
        </div>
        <footer className="filter-modal__footer">
          <Button
            className="clear-button"
            onClick={() => dispatch({ type: 'selectFacets', payload: [] })}
          >
            Limpar
          </Button>
          <Button
            className="apply-button"
            data-testid="filter-modal-button-apply"
            onClick={() => {
              setFacets(selected)
              onModalClose()
            }}
          >
            Aplicar
          </Button>
        </footer>
      </SlideOver>
    </>
  )
}

export const fragment = graphql`
  fragment Filter_facets on StoreFacet {
    key
    label
    type
    values {
      label
      value
      selected
      quantity
    }
  }
`

export default Filter
