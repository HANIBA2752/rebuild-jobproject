import React from 'react'
import AppCard from './AppCard'

function AppMidText() {
  return (
    <>
        <div className='flex items-center mt-96 justify-around gap-55'>
            <div className='web-topic block tracking-widest -mt-40'>
                <span className='topicText topic text-6xl font-bold mb-5'>JOB EXPLORER</span>
                <span className='topicText text-2xl'>Explore Your Future Roles</span>
                <span className='topicText linkText'>searching for computer engineer roles &lt;&lt; HERE</span>
            </div>
            <AppCard/>
        </div>
    </>
  )
}

export default AppMidText
