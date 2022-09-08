interface Props {
  onClick: () => void
  style: Record<string, unknown>
}

const ArrowRight = ({ onClick, style }: Props) => (
  <>
    <button style={style} onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_9796_136825)">
          <path
            d="M15 6L9 12L15 18"
            stroke="black"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_9796_136825">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  </>
)

export default ArrowRight
