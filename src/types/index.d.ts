import type { Gtag } from './gtag.js/index.d'

export {}

declare global {
  interface Window {
    gtag: Gtag
  }
}
