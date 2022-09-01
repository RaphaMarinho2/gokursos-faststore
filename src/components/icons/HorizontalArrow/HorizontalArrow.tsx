import './horizontal-arrow.scss'

interface HorizontalArrowIconProps {
  color?: string
  direction?: 'left' | 'right'
}

const HorizontalArrowIcon = ({
  color = '#DDDDDD',
  direction = 'left',
}: HorizontalArrowIconProps) => {
  const arrowDirection = direction === 'right' ? 'horizontal-arrow__right' : ''

  return (
    <div className={`horizontal-arrow__container ${arrowDirection}`}>
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 1L1 7L7 13"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default HorizontalArrowIcon
