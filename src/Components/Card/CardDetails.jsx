import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {
  const { id } = useParams()
  const [fetchedData, setFetchedData] = useState([])
  let { name, image, location, gender, species, status } = fetchedData
  let api = `https://rickandmortyapi.com/api/character/${id}`
  console.log(fetchedData)

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json())
      setFetchedData(data)
    })()
  }, [api])

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt="" className="img-fluid" />
        {(() => {
          if (status === 'Dead') {
            return <div className="badge bg-danger">{status}</div>
          } else if (status === 'Alive') {
            return <div className="badge bg-success">{status}</div>
          } else {
            return <div className="badge bg-secondary">{status}</div>
          }
        })()}
        <div className="content">
          <div>
            <span>Gender : {gender}</span>
          </div>
          <div>
            <span>Location : {location?.name}</span>
          </div>
          <div>
            <span>Species : {species}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
