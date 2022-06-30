import './styles.scss'
import Carousel from '@acctglobal/carousel-universal'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

type PersonShelfType = {
  nodes: Array<{
    name?: string
    curso?: string
    imagem: {
      url: string
    }
  }>
  withDivisor?: boolean
  classNameShelf?: string
  qtyMobile?: number
  qtyTablet?: number
  qtyDesk?: number
}

const PersonShelf = ({
  nodes,
  withDivisor,
  classNameShelf,
  qtyMobile,
  qtyTablet,
  qtyDesk,
}: PersonShelfType) => {
  const { isMobile, isTablet } = useWindowDimensions()
  const mobileShelfQty = qtyMobile ?? 2
  const tabletShelfQty = qtyTablet ?? 4
  const deskShelfQty = qtyDesk ?? 5

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
      <Carousel
        arrow={{
          isVisible: true,
          iconColor: '#004E98',
          style: sizeArrowCarousel,
        }}
        qtyItems={shelfItemQuantity}
        gapItems={0}
      >
        {nodes.map((node, index) => {
          const { name, curso, imagem } = node

          return (
            <div key={index} className="component-shelf__content">
              <img src={imagem?.url} alt={name} />
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
