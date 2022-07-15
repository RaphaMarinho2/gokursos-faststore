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
  withDivisorBottom?: boolean
  className?: string
}

const SimpleText = ({
  textReceived,
  withDivisor,
  className,
  withDivisorBottom,
}: SimpleTextProps) => {
  const store = 'gokursos'
  const text = textReceived?.nodes[textReceived.nodes.length - 1]?.text?.text

  return (
    <>
      <div
        className={`${store}__simple-text ${
          withDivisor ? 'section__divisor ' : ''
        }${className ? `${className}` : ''}`}
      >
        {text && <p>{text}</p>}
      </div>
      {withDivisorBottom && <div className="section__divisor" />}
    </>
  )
}

export default SimpleText
