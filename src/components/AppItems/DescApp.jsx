import React, { useEffect } from 'react'
import './DescApp.css'
import AOS from 'aos';
import 'aos/dist/aos.css';  // AOS styles

function DescApp() {
  useEffect(() => {
      AOS.init();  // Initialize AOS
  }, []);

  return (
    
    <div >
        <div className='desc-container'>
          <span className='desc-bg'>
              <span data-aos="fade-up" data-aos-duration="1000">Unlock your potential, explore endless career possibilities</span>
          </span>
          <div className='animate-border'></div>
          </div>        
    </div>
  )
}

export default DescApp
