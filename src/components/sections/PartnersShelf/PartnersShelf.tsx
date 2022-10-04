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
    <ImageShelf
      title="Confiam na GoKursos"
      pretitle="Grandes Parceiros"
      autoPlay
      timeoutAutoPlay={3000}
      qtyDesk={4}
      qtyMobile={1}
    >
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
