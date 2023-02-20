import React from 'react'

const Pagination = ({ pageNubmer, setPageNumber }) => {
  const next = () => {
    setPageNumber((p) => p + 1)
  }

  const prev = () => {
    if (pageNubmer === 1) return
    setPageNumber((p) => p - 1)
  }

  return (
    <div className="container d-flex justify-content-center gap-5">
      <button onClick={prev} className="btn btn-primary">
        Prev
      </button>
      <button onClick={next} className="btn btn-primary">
        Next
      </button>
    </div>
  )
}

export default Pagination
