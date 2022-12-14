import type { IGatsbyImageData } from 'gatsby-plugin-image'
import { Image } from 'src/components/ui/Image'
import ImageShelf from 'src/components/common/ImageShelf'

import './styles.scss'
import Section from '../Section'

interface Props {
  nodes: Array<{
    name?: string | null
    curso?: string | null
    imagem: {
      gatsbyImageData: IGatsbyImageData
    } | null
  }>
}

const PersonShelf = ({ nodes }: Props) => {
  return (
    <Section>
      <ImageShelf
        title="Você irá aprender"
        pretitle="Com quem"
        hasArrows
        qtyDesk={5}
        qtyMobile={2}
      >
        {nodes.map((node, index) => {
          const { name, curso, imagem } = node

          return (
            <div key={index} className="person-content">
              {imagem?.gatsbyImageData && (
                <Image
                  className="person-image"
                  image={imagem.gatsbyImageData}
                  alt={name ?? ''}
                  loading="lazy"
                />
              )}
              <div className="person-description">
                <h3>{name}</h3>
                <p>{curso}</p>
              </div>
            </div>
          )
        })}
      </ImageShelf>
    </Section>
  )
}

export default PersonShelf
