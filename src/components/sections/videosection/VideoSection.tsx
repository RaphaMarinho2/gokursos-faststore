/* eslint-disable jsx-a11y/media-has-caption */
import './styles.scss'

type VideoSectionType = {
  nodes: Array<{
    video: {
      file: {
        fileName: string | null
        url: string | null
      } | null
    } | null
    buttonUrl: string | null
    buttonText: string | null
    content: string | null
    title: string | null
  }>
}

const VideoSection = ({ nodes }: VideoSectionType) => {
  if (!nodes || nodes.length < 1) {
    return null
  }

  const videoUrl = nodes[0]?.video?.file?.url
  const linkDoBotao = nodes[0].buttonUrl
  const text = nodes[0].content
  const textoDoBotao = nodes[0].buttonText
  const titulo = nodes[0].title

  return (
    <div className="vd-section-container">
      <div className="vd-section-content">
        <div className="vd-section-video-container">
          <div className="vd-section-video-mold" />
          {videoUrl && (
            <video className="vd-section-video" src={videoUrl} controls />
          )}
        </div>
        <h2 className="vd-section-title">{titulo}</h2>
        <div className="vd-section-description">
          <p>{text}</p>
        </div>
        <div className="vd-section-button">
          {linkDoBotao && (
            <a href={linkDoBotao}>
              <button>{textoDoBotao}</button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoSection
