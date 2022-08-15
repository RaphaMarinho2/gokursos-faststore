import { useState } from 'react'

interface LoadMoreProps {
  setMaxHeight: (height: string) => void
  loadMoreText?: string
}

const LoadMore = ({ loadMoreText, setMaxHeight }: LoadMoreProps) => {
  const [isShowMore, setIsShowMore] = useState(true)

  const handleClick = () => {
    setIsShowMore(false)
    setMaxHeight('100%')
  }

  if (!isShowMore) {
    return <></>
  }

  return (
    <div className="load-more-btn">
      <button onClick={handleClick}>{loadMoreText ?? 'Carregar mais'}</button>
    </div>
  )
}

export default LoadMore
