import type { IGatsbyImageData } from 'gatsby-plugin-image'
import { Image } from 'src/components/ui/Image'
import ImageShelf from 'src/components/common/ImageShelf'

import './styles.scss'

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
    <ImageShelf title="Confiam na GoKursos" pretitle="Grandes Parceiros">
      {nodes.map((node, index) => {
        const { name, curso, imagem } = node

        return (
          <div key={index} className="person-content">
            {imagem && (
              <Image
                className="person-image"
                image={imagem.gatsbyImageData}
                alt={name ?? ''}
                loading="lazy"
              />
            )}
            <div>
              <h3>{name}</h3>
              <p>{curso}</p>
            </div>
          </div>
        )
      })}
    </ImageShelf>
  )
}

export default PersonShelf
