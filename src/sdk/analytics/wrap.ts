import type { SelectItemEvent } from './events/select_item'
import type { SelectPromotionEvent } from './events/select_promotion'
import type { ViewItemEvent } from './events/view_item'
import type { ViewItemListEvent } from './events/view_item_list'
import type { ViewPromotionEvent } from './events/view_promotion'

/**
 * All these events are based on the official GA4 docs. https://developers.google.com/gtagjs/reference/ga4-events
 */
export type AnalyticsEvent =
  | SelectItemEvent
  | SelectPromotionEvent
  | ViewItemEvent
  | ViewItemListEvent
  | ViewPromotionEvent

export interface UnknownEvent {
  name: string
  params: unknown
}

export type WrappedAnalyticsEventParams<T extends UnknownEvent> = Omit<
  T,
  'name'
> & {
  name: string
}

export interface WrappedAnalyticsEvent<T extends UnknownEvent> {
  name: 'AnalyticsEvent'
  params: WrappedAnalyticsEventParams<T>
}

export const STORE_EVENT_PREFIX = 'store:'
export const ANALYTICS_EVENT_TYPE = 'AnalyticsEvent'

export const wrap = <T extends UnknownEvent>(
  event: T
): WrappedAnalyticsEvent<T> =>
  ({
    name: ANALYTICS_EVENT_TYPE,
    params: {
      ...event,
      name: `${STORE_EVENT_PREFIX}${event.name}`,
    },
  } as WrappedAnalyticsEvent<T>)

export const unwrap = <T extends UnknownEvent>(
  event: WrappedAnalyticsEvent<T>
): T => {
  return {
    ...event.params,
    name: event.params.name.slice(
      STORE_EVENT_PREFIX.length,
      event.params.name.length
    ),
  } as T
}
