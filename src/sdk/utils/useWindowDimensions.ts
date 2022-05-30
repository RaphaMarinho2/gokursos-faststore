import { useState, useEffect, useCallback } from 'react'

export default function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined'
  // See breakpoints on styles/theme.scss
  const notebookBreakpoint = '1280'

  const getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight : null
    const isMobile = width ? width < parseInt(notebookBreakpoint, 10) : null

    return {
      width,
      height,
      isMobile,
    }
  }, [hasWindow, notebookBreakpoint])

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    if (!hasWindow) {
      return undefined
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasWindow, getWindowDimensions])

  return windowDimensions
}
