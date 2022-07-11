import './styles.scss'

type TextReceived = {
  nodes: Array<{
    text: {
      text: string | null
    } | null
  }>
}

type SimpleTextProps = {
  textReceived: TextReceived
  withDivisor?: boolean
  className?: string
}

const SimpleText = ({
  textReceived,
  withDivisor,
  className,
}: SimpleTextProps) => {
  const store = 'gokursos'
  const text = textReceived?.nodes[textReceived.nodes.length - 1]?.text?.text

  return (
    <div
      className={`${store}__simple-text ${
        withDivisor ? 'section__divisor ' : ''
      }${className ? `${className}` : ''}`}
    >
      {text && <p>{text}</p>}
    </div>
  )
}

export default SimpleText
