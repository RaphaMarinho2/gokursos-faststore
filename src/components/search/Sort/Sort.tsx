import { useSearch } from '@faststore/sdk'
import Select from 'src/components/ui/Select'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

function Sort() {
  const {
    setSort,
    state: { sort },
  } = useSearch()

  const { isMobile } = useWindowDimensions()

  const OptionsMap = {
    price_desc: 'Maior Preço',
    price_asc: 'Menor Preço',
    orders_desc: 'Mais vendidos',
    name_asc: 'A-Z',
    name_desc: 'Z-A',
    release_desc: 'Lançamento',
    discount_desc: 'Desconto',
    score_desc: isMobile ? 'Ordenar por' : 'Selecione',
  }

  const keys = Object.keys(OptionsMap) as Array<keyof typeof OptionsMap>

  return (
    <Select
      id="sort-select"
      className="sort / text__title-mini-alt"
      options={OptionsMap}
      onChange={(e) => {
        setSort(keys[e.target.selectedIndex])
      }}
      value={sort}
      testId="search-sort"
    />
  )
}

export default Sort
