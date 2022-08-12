import { Skeleton } from '@faststore/ui'

import './search-dropdown.scss'

const SearchDropdownSkeleton = () => (
  <div data-fs-search-input-loading>
    <ul className="suggestions-list-loading">
      <li className="suggestions-item-loading">
        <div className="suggestions-image-loading">
          <Skeleton />
        </div>
        <div className="suggestions-text-content-loading">
          <div className="suggestions-text-loading">
            <Skeleton />
          </div>
          <div className="suggestions-text-loading">
            <Skeleton />
          </div>
        </div>
      </li>
      <li className="suggestions-item-loading">
        <div className="suggestions-image-loading">
          <Skeleton />
        </div>
        <div className="suggestions-text-content-loading">
          <div className="suggestions-text-loading">
            <Skeleton />
          </div>
          <div className="suggestions-text-loading">
            <Skeleton />
          </div>
        </div>
      </li>
      <li className="suggestions-item-loading">
        <div className="suggestions-image-loading">
          <Skeleton />
        </div>
        <div className="suggestions-text-content-loading">
          <div className="suggestions-text-loading">
            <Skeleton />
          </div>
          <div className="suggestions-text-loading">
            <Skeleton />
          </div>
        </div>
      </li>
      <li className="suggestions-item-loading">
        <div className="suggestions-image-loading">
          <Skeleton />
        </div>
        <div className="suggestions-text-content-loading">
          <div className="suggestions-text-loading">
            <Skeleton />
          </div>
          <div className="suggestions-text-loading">
            <Skeleton />
          </div>
        </div>
      </li>
    </ul>
  </div>
)

export default SearchDropdownSkeleton
