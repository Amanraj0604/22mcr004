import React from 'react'

const details = () => {
  return (
    <div>
        <div className="container">
            <h3>Today's Train Details</h3>
            <h5>Train no</h5>
            <input type="text" placeholder='train no'/>
            <h5>Train Name</h5>
            <input type="text" placeholder='Train Name' />
            <h5>Depacture Time</h5>
            <input type="text" placeholder='Depavture Time'/>
            <h5>Delay Time</h5>
            <input type="text" placeholder='delay Time' />
        </div>
    </div>
  )
}

export default details
