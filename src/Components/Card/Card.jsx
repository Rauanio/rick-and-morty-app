import React from 'react'
import {Link} from 'react-router-dom'
import styles from './cards.module.css'

const Card = ({ results, page }) => {
  let display

  if (results) {
    display = results.map((c) => {
      return (
        <Link to={`${page}${c.id}`} key={c.id} className="col-4 mb-4 position-relative">
          <div className={styles.card}>
            <img src={c.image} alt="" className={`${styles.img} img-fluid`} />
            <div style={{ padding: '10px' }} className="content">
              <div className="fs-5 fw-bold mb-4">{c.name}</div>
              <div className="">
                <div className="fs-6">
                  <b>Location</b> : {c.location.name}
                </div>
              </div>
            </div>
          </div>
          {(() => {
            if (c.status === 'Dead') {
              return (
                <div
                  className={`${styles.badge}  position-absolute badge bg-danger`}
                >
                  {c.status}
                </div>
              )
            } else if (c.status === 'Alive') {
              return (
                <div
                  className={`${styles.badge}  position-absolute badge bg-success`}
                >
                  {c.status}
                </div>
              )
            } else {
              return (
                <div
                  className={`${styles.badge}  position-absolute badge bg-secondary`}
                >
                  {c.status}
                </div>
              )
            }
          })()}
        </Link>
      )
    })
  } else {
    display = 'No character found'
  }
  return <>{display}</>
}

export default Card
