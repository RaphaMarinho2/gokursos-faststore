/* eslint-disable jsx-a11y/media-has-caption */
import Section from '../Section'
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
    miniText: string | null
  }>
}

const VideoSection = ({ nodes }: VideoSectionType) => {
  if (!nodes || nodes.length < 1) {
    return null
  }

  const videoUrl = nodes[0]?.video?.file?.url

  const [{ buttonUrl, buttonText, title, content, miniText }] = nodes

  return (
    <Section className="vd-section-container">
      <div className="vd-section-content">
        <div className="vd-section-video-container">
          <div className="vd-section-video-mold" />
          {videoUrl && (
            <video
              className="vd-section-video"
              src={videoUrl}
              controls
              playsInline
            />
          )}
        </div>
        <h2 className="vd-section-title">{title}</h2>
        <div className="vd-section-description">
          <p>{content}</p>
          <p>{miniText}</p>
        </div>
        <div className="vd-section-button">
          {buttonUrl && (
            <a href={buttonUrl}>
              <button>{buttonText}</button>
            </a>
          )}
        </div>
      </div>
    </Section>
  )
}

export default VideoSection
