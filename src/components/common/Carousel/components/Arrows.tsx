interface Props {
  onClick: () => void
  style: Record<string, unknown>
  position: string
  iconColor: string
}

const Arrows = ({ onClick, style, position, iconColor }: Props) => {
  return (
    <button style={style} onClick={onClick}>
      {position === 'prev' ? (
        <svg
          width="7"
          height="10"
          viewBox="0 0 7 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 1L1.5 5L5.5 9"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="7"
          height="10"
          viewBox="0 0 7 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 1L5.5 5L1.5 9"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}

export default Arrows
