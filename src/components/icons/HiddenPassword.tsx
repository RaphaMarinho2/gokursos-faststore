interface HiddenPasswordIconProps {
  isHidden: boolean
}

const HiddenPasswordIcon = ({ isHidden }: HiddenPasswordIconProps) =>
  isHidden ? (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3545 8.33333C14.2096 8.12107 15.0942 8 16 8C23.3638 8 29.3333 16 29.3333 16C29.3333 16 27.8409 18 25.428 20M6.57187 12C4.15901 14 2.66663 16 2.66663 16C2.66663 16 8.63616 24 16 24C16.9132 24 17.805 23.8769 18.6666 23.6614L6.57187 12Z"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5428 13.7474C12.9987 14.3406 12.6666 15.1315 12.6666 15.9999C12.6666 17.8408 14.159 19.3332 16 19.3332C16.9084 19.3332 17.732 18.9698 18.3333 18.3804"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 28L4 4"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0001 24C23.3639 24 29.3334 16 29.3334 16C29.3334 16 23.3639 8 16.0001 8C8.63628 8 2.66675 16 2.66675 16C2.66675 16 8.63628 24 16.0001 24Z"
        stroke="#333333"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16.0001 19.3333C17.841 19.3333 19.3334 17.8409 19.3334 16C19.3334 14.1591 17.841 12.6667 16.0001 12.6667C14.1591 12.6667 12.6667 14.1591 12.6667 16C12.6667 17.8409 14.1591 19.3333 16.0001 19.3333Z"
        stroke="#333333"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )

export default HiddenPasswordIcon
