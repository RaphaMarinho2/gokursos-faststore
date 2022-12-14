import { useCallback, useEffect, useState, useRef } from 'react'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import debounce from 'lodash.debounce'

import './styles.scss'

type TypeMultiRangeSlider = {
  min: number
  max: number
  onChange: ({ min, max }: { min: number; max: number }) => void
}

type PropsElement = Record<string, Record<string, unknown>>

const RangeChangeType = (current: never) => {
  return current as unknown as PropsElement
}

const MultiRangeSlider = ({ min, max, onChange }: TypeMultiRangeSlider) => {
  const [debouncedMinVal, setDebouncedMinVal] = useState(min)
  const [debouncedMaxVal, setDebouncedMaxVal] = useState(max)

  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef(null)
  const changeMaxValueRef = useRef(
    debounce((value: number) => {
      setDebouncedMaxVal(value)
      onChange({ min: debouncedMinVal, max: value })
    }, 500)
  )

  const changeMinValueRef = useRef(
    debounce((value: number) => {
      setDebouncedMinVal(value)
      onChange({ min: value, max: debouncedMaxVal })
    }, 500)
  )

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)

    if (range?.current) {
      const rangeModify = RangeChangeType(range?.current)

      if (rangeModify?.style) {
        rangeModify.style.left = `${minPercent}%`
        rangeModify.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)

    if (range.current) {
      const rangeModify = RangeChangeType(range?.current)

      if (rangeModify?.style) {
        rangeModify.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent])

  return (
    <div className="container mult-range">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1)

          setMinVal(value)
          changeMinValueRef.current(value)
          minValRef.current = value
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 ? 5 : undefined }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1)

          setMaxVal(value)
          changeMaxValueRef.current(value)
          maxValRef.current = value
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value" />
        <div className="slider__right-value">
          {useFormattedPrice(minVal)} ??? {useFormattedPrice(maxVal)}
        </div>
      </div>
    </div>
  )
}

export default MultiRangeSlider
