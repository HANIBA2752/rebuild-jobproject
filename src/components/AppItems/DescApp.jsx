import React, { useEffect } from 'react';
import './DescApp.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function DescApp() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="desc-container">
      <div className="desc-bg">
        <span>Unlock your potential, explore endless career possibilities</span>
      </div>
      <div className="animate-border"></div>
    </div>
  );
}

export default DescApp;
