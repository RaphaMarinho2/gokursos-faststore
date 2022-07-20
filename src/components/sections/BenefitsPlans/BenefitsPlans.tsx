import './style.scss'

interface BenefitsPlansProps {
  title?: string
  subtitle?: string
  className?: string
  nodes: Array<{
    image?: {
      url: string | null
    } | null
    text: {
      text: string | null
    } | null
    exchangeImageInText: string | null
  }>
}

interface BenefitsPlansModifiedProps {
  map(
    arg0: (benefits: any, index: number) => JSX.Element
  ): import('react').ReactNode
  title?: string
  subtitle: string
  className?: string
  nodes: Array<{
    image?: {
      url: string | undefined
    } | null
    text: {
      text: string | null
    } | null
    exchangeImageInText: string | null
  }>
}

const BenefitsPlans = ({
  title,
  nodes,
  className,
  subtitle,
}: BenefitsPlansProps) => {
  const nodesModified = nodes as unknown as BenefitsPlansModifiedProps

  return (
    <section
      className={`benefits-plans${
        className ? `--${className}` : ''
      } layout__content`}
    >
      <h2
        className={`benefits-plans__title${className ? `--${className}` : ''}`}
      >
        {title}
      </h2>
      <h3
        className={`benefits-plans__subtitle${
          className ? `--${className}` : ''
        }`}
      >
        {subtitle}
      </h3>
      <div
        className={`benefits-plans__container${
          className ? `--${className}` : ''
        }`}
      >
        {nodesModified.map((benefits, index) => (
          <div
            key={index}
            className={`benefits-plans__container-item${
              className ? `--${className}` : ''
            }`}
          >
            {benefits.image?.url ? (
              <div
                className={`benefits-plans__container-image${
                  className ? `--${className}` : ''
                }`}
              >
                <img
                  className={`benefits-plans__image${
                    className ? `--${className}` : ''
                  }`}
                  src={benefits.image?.url}
                  alt=""
                />
              </div>
            ) : (
              <div
                className={`benefits-plans__container-exchange${
                  className ? `--${className}` : ''
                }`}
              >
                <h3>{benefits?.exchangeImageInText}</h3>
              </div>
            )}

            <p
              className={`benefits-plans__text${
                className ? `--${className}` : ''
              }`}
            >
              {benefits.text?.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BenefitsPlans
