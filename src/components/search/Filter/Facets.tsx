import { Label as UILabel, List as UIList } from '@faststore/ui'
import Accordion, { AccordionItem } from 'src/components/ui/Accordion'
import { Badge } from 'src/components/ui/Badge'
import Checkbox from 'src/components/ui/Checkbox'
import MultiRangeSlider from 'src/components/sections/MulRangeSlider'
import type {
  IStoreSelectedFacet,
  Filter_FacetsFragment,
} from '@generated/graphql'

type ForceSvg = {
  svg1?: JSX.Element
  svg2?: JSX.Element
}

interface FacetsProps {
  testId: string
  facets: Filter_FacetsFragment[]
  indicesExpanded: Set<number>
  onFacetChange: (item: IStoreSelectedFacet) => void
  onAccordionChange: (index: number) => void
  forceSvg?: ForceSvg
}

const priceByApi = {
  min: 1,
  max: 1000,
}

function Facets({
  testId,
  facets,
  indicesExpanded,
  onFacetChange,
  onAccordionChange,
  forceSvg,
}: FacetsProps) {
  const facetsBolean = facets.filter((facet) => facet.type === 'BOOLEAN')
  const facetsRange = facets.filter((facet) => facet.type === 'RANGE')

  return (
    <div className="filter" data-store-filter data-testid={testId}>
      <h2 className="text__title-mini-alt">Filtros</h2>
      {facets.length && (
        <>
          <Accordion
            expandedIndices={indicesExpanded}
            onChange={onAccordionChange}
          >
            {facetsBolean.map(({ label, values, key }, index) => (
              <AccordionItem
                key={`${label}-${index}`}
                prefixId={testId}
                testId={`${testId}-accordion`}
                isExpanded={indicesExpanded.has(index)}
                buttonLabel={label}
                forceSvg={forceSvg && forceSvg}
              >
                <UIList>
                  {values.map((item) => {
                    const id = `${testId}-${label}-${item.label}`

                    return (
                      <li key={id} className="filter__item">
                        <Checkbox
                          id={id}
                          checked={item.selected}
                          onChange={() =>
                            onFacetChange({ key, value: item.value })
                          }
                          data-testid={`${testId}-accordion-panel-checkbox`}
                          data-value={item.value}
                          data-quantity={item.quantity}
                        />
                        <UILabel htmlFor={id} className="text__title-mini-alt">
                          {item.label} <Badge>{item.quantity}</Badge>
                        </UILabel>
                      </li>
                    )
                  })}
                </UIList>
              </AccordionItem>
            ))}
            {facetsRange.map(({ label, values }, index) => (
              <AccordionItem
                key={`${label}-${index}`}
                prefixId={testId}
                testId={`${testId}-accordion`}
                isExpanded={indicesExpanded.has(index + 3)}
                buttonLabel={label}
                forceSvg={forceSvg}
              >
                <UIList>
                  {values.map((item) => {
                    const id = `${testId}-${label}-${item.label}`

                    return (
                      <li key={id} className="filter__item range-item">
                        <MultiRangeSlider
                          min={priceByApi.min}
                          max={priceByApi.max}
                          onChange={({ min, max }) =>
                            console.info(`min = ${min}, max = ${max}`)
                          }
                        />
                      </li>
                    )
                  })}
                </UIList>
              </AccordionItem>
            ))}
          </Accordion>
          {/* <Accordion
            expandedIndices={indicesExpanded}
            onChange={onAccordionChange}
          >

          </Accordion> */}
        </>
      )}
    </div>
  )
}

export default Facets
