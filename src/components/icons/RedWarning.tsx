interface RedWarningIconProps {
  width?: number
  height?: number
}

const RedWarningIcon = ({ width = 73, height = 73 }: RedWarningIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 178 178"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M89.0003 18.5417L7.41699 159.458H170.584L89.0003 18.5417Z"
      stroke="#FF3452"
      strokeWidth="8"
      strokeLinejoin="round"
    />
    <path
      d="M89 129.792V133.5"
      stroke="#FF3452"
      strokeWidth="8"
      strokeLinecap="round"
    />
    <path
      d="M89 70.4602L89.0308 107.542"
      stroke="#FF3452"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
)

export default RedWarningIcon
