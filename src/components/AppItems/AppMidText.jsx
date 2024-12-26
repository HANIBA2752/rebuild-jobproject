import React from 'react'
import AppCard from './AppCard'
import { Link } from 'react-router-dom'

function AppMidText() {
  return (
    <>
        <div className='flex items-center justify-around gap-55'>
            <div className='web-topic block'>
                <h1 className='topicText '>~position</h1><h1 className='topicText'>explorer</h1>
                <span className='subText block'>
                Position Explorer lets you explore job roles in IT and tech, <br />helping you plan your career path with key insights.
                </span>
                <span className='linkText'><Link to='/position/comeng'>searching for computer engineer roles</Link></span>
            </div>
            <AppCard/>
        </div>
    </>
  )
}

export default AppMidText
