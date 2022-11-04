import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
  return (
    <div className="text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img src={loading} alt="Loading..." />
    </div>
  )
}

export default Spinner