import type { IGatsbyImageData } from 'gatsby-plugin-image'
import ImageShelf from 'src/components/common/ImageShelf'
import { Image } from 'src/components/ui/Image'
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

function PartnersShelf({ nodes }: Props) {
  return (
    <ImageShelf title="Você irá aprender" pretitle="Com quem">
      {nodes.map((node, index) => {
        const { name, imagem } = node

        return (
          <div key={index}>
            {imagem && (
              <Image
                className="partner-image"
                image={imagem.gatsbyImageData}
                alt={name ?? ''}
                loading="lazy"
              />
            )}
          </div>
        )
      })}
    </ImageShelf>
  )
}

export default PartnersShelf
