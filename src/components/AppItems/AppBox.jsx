import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // AOS styles
import './AppBox.css';

function AppBox() {

  const image = 'https://via.placeholder.com/50';  // Placeholder image

  useEffect(() => {
    AOS.init();  // Initialize AOS
  }, []);

  return (
    <div>
      <div className='appbox-topic' data-aos='fade-up' data-aos-duration='1000'>
        Programming | Scripting | Markup Languages
      </div>
      <div className='appbox-container'>
        <div className='appbox'>
        <div className="appbox-content">
          {Array.from({ length: 49 }).map((_, index) => (
            <div key={index} className='grid-item'>
              <img src={image} alt={`Grid item ${index + 1}`} data-aos='fade-up' data-aos-duration='1000'/>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default AppBox;
