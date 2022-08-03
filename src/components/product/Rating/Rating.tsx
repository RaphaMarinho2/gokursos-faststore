import { Star } from './assets/Star'

interface RatingProps {
  rates: number[]
  totalStars?: number
}

function Rating({ totalStars = 5, rates }: RatingProps) {
  const totalRates = rates.length
  const ratesSum = rates.reduce((a, b) => a + b)

  // Examples
  const rateAvarage = ratesSum / totalRates // 2.9 avarage
  const fulfilledStars = Math.floor(rateAvarage) // 2 complete stars
  const notFulfilledStar = Math.ceil(rateAvarage) // the not fulfilled star (3)
  const notFulfilledStarPercentage =
    parseFloat((rateAvarage - fulfilledStars).toFixed(2)) * 100 // star not complete has value 0.9

  return (
    <div className="rating-container">
      <div className="rating-infos">
        <strong>
          {rateAvarage}
          <span> /{totalStars}</span>
        </strong>
        <span className="rating-info-description">NOTA DA LOJA</span>
      </div>

      <div className="stars-container">
        {[...Array(totalStars)].map((_, i) => {
          const starIndex = i + 1
          const isFulfilled = starIndex <= fulfilledStars

          const fulfillPercentage = isFulfilled
            ? 100
            : starIndex === notFulfilledStar
            ? notFulfilledStarPercentage
            : 0

          return (
            <Star
              key={starIndex}
              color="#F3C220"
              isFulfilled={isFulfilled}
              fulfillPercentage={fulfillPercentage}
            />
          )
        })}
      </div>
      <span className="total-rates">Baseado em {totalRates} avaliações</span>
    </div>
  )
}

export default Rating
