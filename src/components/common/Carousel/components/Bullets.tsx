interface Props {
  index: number
  onClick: () => void
  style: Record<string, unknown>
  className: string
}
const Bullets = ({ index, onClick, style, className }: Props) => {
  return (
    <button className={className} key={index} style={style} onClick={onClick}>
      {' '}
    </button>
  )
}

export default Bullets
