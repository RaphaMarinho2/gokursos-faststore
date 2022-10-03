import './styles.scss'
import useWindowDimensions from 'src/sdk/utils/useWindowDimensions'

type BannerMediumType = {
  nodes: Array<{
    link: string | null
    imagemBannerMedium: {
      url: string | null
    } | null
  }>
}

const BannerMedium = ({ nodes }: BannerMediumType) => {
  const { isMobile } = useWindowDimensions()

  if (isMobile === true) {
    const url1 = nodes[nodes.length - 1].imagemBannerMedium?.url
    // eslint-disable-next-line prefer-destructuring
    const link1 = nodes[nodes.length - 1].link

    return (
      <div className="container-imagem-banner-medium">
        {link1 && url1 && (
          <a href={link1}>
            <img src={url1} alt="teste" className="imagem-banner-medium" />
          </a>
        )}
      </div>
    )
  }

  const url = nodes[0].imagemBannerMedium?.url
  const [{ link }] = nodes

  return (
    <div className="container-imagem-banner-medium layout__content">
      {link && url && (
        <a href={link}>
          <img src={url} alt="teste" className="imagem-banner-medium" />
        </a>
      )}
    </div>
  )
}

export default BannerMedium
