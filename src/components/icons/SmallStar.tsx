interface StarProps {
  isFulfilled: boolean
  color: string
  fulfillPercentage: number
}

export function SmallStarIcon({
  isFulfilled,
  color,
  fulfillPercentage,
}: StarProps) {
  const starColor = isFulfilled
    ? color
    : fulfillPercentage === 0
    ? '#ACACAC'
    : 'url(#grad1)'

  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
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
        d="M7.00004 0.333374L9.06004 4.72174L13.6667 5.42976L10.3334 8.84371L11.12 13.6667L7.00004 11.3884L2.88004 13.6667L3.66671 8.84371L0.333374 5.42976L4.94004 4.72174L7.00004 0.333374Z"
        fill={starColor}
      />
    </svg>
  )
}
