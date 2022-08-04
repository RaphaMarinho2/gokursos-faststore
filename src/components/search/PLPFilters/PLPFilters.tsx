import axios from 'axios'
import { useEffect, useState } from 'react'
import { Checkbox, Label } from '@faststore/ui'

import './plp-filters.scss'

interface PLPFiltersProps {
  slug: string
}

interface Filter {
  type: 'category' | 'price' | 'brand' | 'cargaHoraria'
  inputType: 'checkbox' | 'range'
  value: string
  label: string
}

type CategoryFilterType = Array<{ Name: string; Slug: string }>
type CargasHorariasFilterType = Array<{ Text: string }>

function PLPFilters({ slug }: PLPFiltersProps) {
  // const [selectedFilters, setSelectedFilters] = useState<Filter[]>([])
  const [allFilters, setAllFilters] = useState<Filter[]>([])
  const categories = [
    ...allFilters.filter((filter) => filter.type === 'category'),
  ]

  const cargasHorarias = [
    ...allFilters.filter((filter) => filter.type === 'cargaHoraria'),
  ]

  useEffect(() => {
    const handleFilterAttributes = async () => {
      setAllFilters([])

      const categoriesFetch = await axios
        .post<CategoryFilterType>('/api/getCategories', {
          departmentSlug: slug,
        })
        .then(({ data }) => {
          return data
        })

      categoriesFetch.forEach((category) => {
        setAllFilters((prevFilters) => [
          ...prevFilters,
          {
            type: 'category',
            inputType: 'checkbox',
            value: category.Slug,
            label: category.Name,
          },
        ])
      })

      const cargasHorariasFetch = await axios
        .post<CargasHorariasFilterType>('/api/getCargasHorarias')
        .then(({ data }) => {
          return data
        })

      cargasHorariasFetch.forEach((cargaHoraria) => {
        setAllFilters((prevFilters) => [
          ...prevFilters,
          {
            type: 'cargaHoraria',
            inputType: 'checkbox',
            value: cargaHoraria.Text,
            label: cargaHoraria.Text,
          },
        ])
      })
    }

    handleFilterAttributes()
  }, [slug])

  return (
    <div className="filter">
      <span className="filter__title">Filtros</span>
      <div className="facet">
        <span className="facet__title">Categorias</span>
        <div className="facet__facet">
          {categories.map((category, idx) => (
            <div key={idx}>
              <Checkbox
                id={category.value}
                // checked={item.selected}
                // onChange={() =>
                //   onFacetChange({ key, value: item.value })
                // }
                data-value={category.label}
              />
              <Label htmlFor={category.label} className="text__title-mini-alt">
                {category.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <div className="facet">
        <span className="facet__title">Cargas Horárias</span>
        <div className="facet__facet">
          {cargasHorarias.map((cargaHoraria, idx) => (
            <div key={idx}>
              <Checkbox
                id={cargaHoraria.value}
                // checked={item.selected}
                // onChange={() =>
                //   onFacetChange({ key, value: item.value })
                // }
                data-value={cargaHoraria.value}
              />
              <Label
                htmlFor={cargaHoraria.value}
                className="text__title-mini-alt"
              >
                {cargaHoraria.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PLPFilters
