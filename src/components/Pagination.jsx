function Pagination({
  page,
  setPage,
  pageCount
}) {
  return (
    <div className="pagination">

      <button
        disabled={page === 0}
        onClick={() =>
          setPage(page - 1)
        }
      >
        ← Назад
      </button>

      <span>
        {page + 1} / {pageCount}
      </span>

      <button
        disabled={
          page === pageCount - 1
        }
        onClick={() =>
          setPage(page + 1)
        }
      >
        Вперед →
      </button>

    </div>
  );
}

export default Pagination;