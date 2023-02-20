import React from 'react'
import { Context } from '../../../App'
import FilterBtn from '../FilterBtn'

const Gender = () => {
  const { setGender, setPageNumber } = React.useContext(Context)
  let genders = ['Male', 'Female', 'Genderles', 'Unknown']
  
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Gender
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show "
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-wrap gap-2 ">
            {genders.map((items, index) => (
              <FilterBtn
                task={setGender}
                setPageNumber={setPageNumber}
                key={index}
                index={index}
                items={items}
                name="genders"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gender
