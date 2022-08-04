import { SmallStarIcon } from 'src/components/icons/SmallStar'

import './rating-summary.scss'

interface RatingSummaryProps {
  rates: number[]
  totalStars?: number
}

export default function RatingSummary({
  totalStars = 5,
  rates,
}: RatingSummaryProps) {
  const totalRates = rates.length
  const ratesSum = rates.reduce((a, b) => a + b)

  // Examples
  const rateAvarage = ratesSum / totalRates // 2.9 avarage
  const fulfilledStars = Math.floor(rateAvarage) // 2 complete stars
  const notFulfilledStar = Math.ceil(rateAvarage) // the not fulfilled star (3)
  const notFulfilledStarPercentage =
    parseFloat((rateAvarage - fulfilledStars).toFixed(2)) * 100 // star not complete has value 0.9

  return (
    <div className="rating-summary">
      <div className="rating-summary__stars-container">
        {[...Array(totalStars)].map((_, i) => {
          const starIndex = i + 1
          const isFulfilled = starIndex <= fulfilledStars

          const fulfillPercentage = isFulfilled
            ? 100
            : starIndex === notFulfilledStar
            ? notFulfilledStarPercentage
            : 0

          return (
            <SmallStarIcon
              key={starIndex}
              color="#F3C220"
              isFulfilled={isFulfilled}
              fulfillPercentage={fulfillPercentage}
            />
          )
        })}
      </div>
      <span className="rating-summary__total-rates">{`(${totalRates})`}</span>
    </div>
  )
}
