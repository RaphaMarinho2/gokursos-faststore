import type { Gtag } from './gtag.js/index.d'

declare global {
  interface Window {
    gtag: Gtag
  }
}
