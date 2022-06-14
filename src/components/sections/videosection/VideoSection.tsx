/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/media-has-caption */
import './styles.scss'

type VideoSectionType = {
  nodes: Array<{
    video: {
      file: {
        filename: string | null
        url: string
      }
    }
    buttonUrl: string
    buttonText: string | null
    content: string | null
    title: string | null
  }>
}

const VideoSection = ({ nodes }: VideoSectionType) => {
  const videoUrl = nodes[0].video.file.url
  const { buttonUrl } = nodes[0]
  const text = nodes[0].content
  const { buttonText } = nodes[0]
  const { title } = nodes[0]

  return (
    <div className="vd-section-container">
      <div className="vd-section-content">
        <div className="vd-section-video-container">
          <div className="vd-section-video-mold" />
          <video className="vd-section-video" src={videoUrl} controls />
        </div>
        <h2 className="vd-section-title">{title}</h2>
        <div className="vd-section-description">
          <p>{text}</p>
        </div>
        <div className="vd-section-button">
          <a href={buttonUrl}>
            <button>{buttonText}</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
