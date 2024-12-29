import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

function AppMidText() {
  return (
    <div className='AppMidText-container'>
      <div>
        <div className="web-topic topic-animate">
          <h1 className="topicText">~position</h1>
          <h1 className="topicText">explorer</h1>
          <div className="subText mt-4">
            Position Explorer lets you explore job roles in IT and tech,
            helping you plan your career path with key <span className='text-[#1f1f1f] font-bold underline decoration-neutral-20  0/40'>insights.</span>
          </div>
          <div className="linkText mt-4">
            <Link to="/position/comeng">searching for computer engineer roles</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppMidText;
