interface SuggestionImageFallbackProps {
  width?: number
  height?: number
}

const SuggestionImageFallback = ({
  width = 77,
  height = 62,
}: SuggestionImageFallbackProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={`${width}`} height={`${height}`} fill="#DDDDDD" />
  </svg>
)

export default SuggestionImageFallback
