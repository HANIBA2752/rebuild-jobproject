import React from 'react'
import './Appcard.css'
import ComputerPic from '../../assets/ComputerCard.png'

function AppCard() {
  return (
    <>
      <div className="card-container">
        <div className='Appcard'>
          <img src={ComputerPic} alt="ComputerPic" className='card-pc' />
            <h1 className='card-topic'>
              Computer Engineer
            </h1>
            <h4 className='card-desc'>A computer engineer designs and develops computer systems, 
            combining hardware and software to create efficient, secure, and reliable technologies</h4>
            <div className='card-moredetails'>More details</div>
        </div>
      </div>
    </>
  )
}

export default AppCard
