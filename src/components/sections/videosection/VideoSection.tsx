/* eslint-disable jsx-a11y/media-has-caption */
import './styles.scss'

type VideoSectionType = {
  nodes: Array<{
    video: {
      file: {
        filename: string
        url: string
      }
    }
    buttonUrl: string
    buttonText: string
    content: string
    title: string
  }>
}

const VideoSection = ({ nodes }: VideoSectionType) => {
  const videoUrl = nodes[0].video.file.url
  const linkDoBotao = nodes[0].buttonUrl
  const text = nodes[0].content
  const textoDoBotao = nodes[0].buttonText
  const titulo = nodes[0].title

  return (
    <div className="vd-section-container">
      <div className="vd-section-content">
        <div className="vd-section-video-container">
          <div className="vd-section-video-mold" />
          <video className="vd-section-video" src={videoUrl} controls />
        </div>
        <h2 className="vd-section-title">{titulo}</h2>
        <div className="vd-section-description">
          <p>{text}</p>
        </div>
        <div className="vd-section-button">
          <a href={linkDoBotao}>
            <button>{textoDoBotao}</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
