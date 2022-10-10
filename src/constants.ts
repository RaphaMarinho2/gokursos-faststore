const desktop =
  typeof window !== 'undefined' ? window.innerWidth > 1440 : undefined

export const ITEMS_PER_PAGE = 12
export const ITEMS_PER_SECTION = 5
export const ITEMS_PER_PAGE_COURSES = desktop ? 10 : 8
export const windowGlobal = typeof window !== 'undefined' ? window : undefined
export const SUGGESTION_IMG_WIDTH = 56
export const SUGGESTION_IMG_HEIGHT = 56
