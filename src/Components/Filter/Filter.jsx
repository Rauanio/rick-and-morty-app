import React from 'react'
import { Context } from '../../App'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filter = () => {
  const { setStatus, setGender, setSpecies, setPageNumber } = React.useContext(Context)
  const clear = () => {
    setPageNumber('')
    setStatus('')
    setGender('')
    setSpecies('')
    window.location.reload(false)
  }

  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-4">Filters</div>
      <div
        onClick={clear}
        style={{ cursor: 'pointer' }}
        className="text-center text-decoration-underline mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Gender />
        <Species />
        <Status />
      </div>
    </div>
  )
}

export default Filter
