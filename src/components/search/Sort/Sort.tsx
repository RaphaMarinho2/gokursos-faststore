import Select from 'src/components/ui/Select'
import useSearch from 'src/contexts/SearchContext/useSearch'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

function Sort() {
  const { setSort, sort } = useSearch()

  const { isTablet } = useWindowDimensions()

  const OptionsMap = {
    'Price/BasePrice asc': 'Menor Preço',
    'Price/BasePrice desc': 'Maior Preço',
    'Rank/Score desc': 'Mais vendidos',
    'Name asc': 'A-Z',
    'Name desc': 'Z-A',
    'ReleaseDate desc': 'Data de Lançamento',
  }

  const keys = Object.keys(OptionsMap) as Array<keyof typeof OptionsMap>

  return (
    <Select
      id="sort-select"
      className="sort / text__title-mini-alt"
      labelText={!isTablet ? 'Ordenar por' : ''}
      placeholder={isTablet ? 'Ordenar por' : 'Selecione'}
      options={OptionsMap}
      onChange={(e) => {
        setSort(keys[e.target.selectedIndex - 1])
      }}
      value={sort}
      testId="search-sort"
    />
  )
}

export default Sort
