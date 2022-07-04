import { useEffect } from 'react'

/**
 * @description Hook that triggers a callback function on the page scroll.
 * @version 1.0.0
 */
export function useScroll(callback: () => void): void {
  useEffect(() => {
    window?.addEventListener('scroll', callback)

    return () => {
      window?.removeEventListener('scroll', callback)
    }
  }, [callback])
}
