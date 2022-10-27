import { useAnalyticsEvent } from './useAnalyticsEvent'
import type { AnalyticsEvent } from './wrap'

export const AnalyticsHandler = () => {
  useAnalyticsEvent((event: AnalyticsEvent) => {
    // Cleans the ecommerce object before pushing a new one
    // This prevents the new data from getting merged with the previous one
    // which could lead do inaccurate and old data being sent with events
    //
    // source: https://developers.google.com/tag-manager/ecommerce-ga4?hl=pt-br#clearing_the_ecommerce_object

    if (typeof window.gtag === 'function') {
      window.gtag('event', event.name, event.params)
    }
  })

  return null
}

export default AnalyticsHandler
