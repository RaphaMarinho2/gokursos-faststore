interface StarProps {
  isFulfilled: boolean
  color: string
  fulfillPercentage: number
}

export function Star({ isFulfilled, color, fulfillPercentage }: StarProps) {
  const starColor = isFulfilled
    ? color
    : fulfillPercentage === 0
    ? '#ACACAC'
    : 'url(#grad1)'

  return (
    <i className="star-icon">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {!isFulfilled && fulfillPercentage !== 0 && (
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
              <stop
                offset={`${fulfillPercentage}%`}
                style={{ stopColor: color, stopOpacity: 1 }}
              />
              <stop
                offset={`${fulfillPercentage}%`}
                style={{ stopColor: '#ACACAC', stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: '#ACACAC', stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        )}
        <path
          d="M10.0001 0L13.0901 6.58255L20.0001 7.64459L15.0001 12.7655L16.1801 20L10.0001 16.5825L3.82006 20L5.00006 12.7655L6.10352e-05 7.64459L6.91006 6.58255L10.0001 0Z"
          fill={starColor}
        />
      </svg>
    </i>
  )
}
