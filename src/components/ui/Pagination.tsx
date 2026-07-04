type PaginationProps = {
  page?: number
  totalPages?: number
  onPageChange?: (page: number) => void
}

const Pagination = ({ page = 1, totalPages = 1, onPageChange }: PaginationProps) => {
  return (
    <div>
      <button type="button" disabled={page <= 1} onClick={() => onPageChange?.(page - 1)}>
        Previous
      </button>
      <span>
        {page} / {totalPages}
      </span>
      <button type="button" disabled={page >= totalPages} onClick={() => onPageChange?.(page + 1)}>
        Next
      </button>
    </div>
  )
}

export default Pagination
