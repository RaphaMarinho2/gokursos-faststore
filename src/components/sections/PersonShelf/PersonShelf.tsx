import './styles.scss'
import Carousel from 'src/components/common/Carousel'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import { Image } from 'src/components/ui/Image'

type PersonShelfType = {
  nodes: Array<{
    name?: string | null
    curso?: string | null
    imagem: {
      gatsbyImageData: IGatsbyImageData
    } | null
  }>
  withDivisor?: boolean
  classNameShelf?: string
  qtyMobile?: number
  qtyTablet?: number
  qtyDesk?: number
  hasArrows?: boolean
  title?: string
  pretitle?: string
  navigationAutomatic?: boolean
  timeoutNavigationAutomatic?: number
}

const PersonShelf = ({
  nodes,
  withDivisor,
  classNameShelf,
  qtyMobile,
  qtyTablet,
  qtyDesk,
  hasArrows,
  title,
  pretitle,
  navigationAutomatic,
  timeoutNavigationAutomatic,
}: PersonShelfType) => {
  const { isMobile, isTablet } = useWindowDimensions()
  const mobileShelfQty = qtyMobile ?? 2
  const tabletShelfQty = qtyTablet ?? 4
  const deskShelfQty = qtyDesk ?? 5
  const autoPlay = !!navigationAutomatic
  const itemHasArrows = hasArrows

  const shelfItemQuantity = isMobile
    ? mobileShelfQty
    : isTablet
    ? tabletShelfQty
    : deskShelfQty

  const styleArrowMobile = {
    height: 30,
    margin: 0,
    padding: 0,
    width: 28,
  }

  const styleArrowDesktop = {
    height: 34,
    margin: 0,
    padding: 0,
    width: 32,
  }

  const sizeArrowCarousel = isTablet ? styleArrowMobile : styleArrowDesktop

  return (
    <div
      className={`component-shelf-container layout__section
      ${classNameShelf ?? ''}
      ${withDivisor ? 'section__divisor' : ''}`}
    >
      {pretitle && <h4 className="pretitle">{pretitle}</h4>}
      {title && <h3 className="title">{title}</h3>}
      <Carousel
        hasAutomaticNavigation={autoPlay}
        timeoutNavigationAutomatic={timeoutNavigationAutomatic}
        arrow={{
          isVisible: itemHasArrows,
          iconColor: '#004E98',
          style: {
            ...sizeArrowCarousel,
            background: '#FFFFFF',
            boxShadow: '2px 1px 15px rgba(0, 0, 0, 0.15)',
          },
        }}
        qtyItems={shelfItemQuantity}
        gapItems={0}
      >
        {nodes.map((node, index) => {
          const { name, curso, imagem } = node

          return (
            <div key={index} className="component-shelf__content">
              {imagem && (
                <Image
                  className="person-image"
                  image={imagem.gatsbyImageData}
                  alt={name ?? ''}
                  loading="lazy"
                />
              )}
              <h3>{name}</h3>
              <p>{curso}</p>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default PersonShelf
