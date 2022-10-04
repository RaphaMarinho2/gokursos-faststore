import './pagination.scss'

import HorizontalArrowIcon from '../icons/HorizontalArrow'

interface PaginationProps {
  setCurrentPage: (currentPage: number) => void
  pages: number
  currentPage: number
}

export const Pagination = ({
  setCurrentPage,
  currentPage,
  pages,
}: PaginationProps) => {
  const lastPage = pages <= currentPage + 1

  return (
    <div className="content-pagination">
      <button
        data-fs-button
        className="pagination__button"
        onClick={() => {
          setCurrentPage(currentPage - 1)
        }}
        disabled={currentPage === 0}
      >
        <HorizontalArrowIcon
          color={currentPage === 0 ? undefined : '#FF3452'}
        />
      </button>

      <button
        data-fs-button
        value={currentPage + 1}
        className="pagination__current-page"
        onClick={(e: any) => {
          setCurrentPage(Number(e.target.value))
        }}
        disabled={lastPage}
      >
        {currentPage + 1}
      </button>
      <h5 className="ofTo">de</h5>
      <button
        value={pages - 1}
        className="pagination__last-page"
        onClick={(e: any) => {
          setCurrentPage(Number(e.target.value))
        }}
        disabled={lastPage}
      >
        {pages}
      </button>
      <button
        data-fs-button
        className="pagination__button"
        onClick={() => {
          setCurrentPage(currentPage + 1)
        }}
        disabled={lastPage}
      >
        <HorizontalArrowIcon
          direction="right"
          color={lastPage ? undefined : '#FF3452'}
        />
      </button>
    </div>
  )
}
