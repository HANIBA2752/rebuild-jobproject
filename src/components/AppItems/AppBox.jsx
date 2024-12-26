import React from 'react';
import './AppBox.css';

function AppBox() {
  const text = "List of programming language ...";
  
  return (
    <div>
      <div className='appbox-topic'>
        {text.split('').map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
      <div className='appbox-container'>
        <div className='appbox'></div>
      </div>
    </div>
  );
}

export default AppBox;
