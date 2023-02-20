import React from 'react'
import { Context } from '../../../App'
import FilterBtn from '../FilterBtn'

const Species = () => {
  const { setSpecies, setPageNumber } = React.useContext(Context)
  let species = [
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet',
  ]

  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Species
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body  d-flex flex-wrap gap-2">
            {species.map((items, index) => (
              <FilterBtn
                setPageNumber={setPageNumber}
                task={setSpecies}
                key={index}
                index={index}
                items={items}
                name="species"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Species
