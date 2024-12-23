import React from 'react';
import '../components/Position/pos-box.css';

function Position() {
  return (
    <div>
      <div className='pos-container'>
        <h1 className="pos-h1">
          <div className="pos-topic">
            <span className="pos-name">
              TOPIC : <span>COMPUTER ENGINEERING</span>
            </span>
          </div>
        </h1>
        <section className="pos-box">
          <ul className="pos-ul bg-slate-800 h-full rounded-md">
            {Array(9).fill().map((_, index) => (
              <li key={index} className="pos-li">
                <div className="text-sm">
                  JOB {index} : <h3 className='inline-block'>Software Engineering</h3>
                  <div>Salary : 50000$</div>
                </div>
                <button className="pos-btn">GO</button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
    
  );
}

export default Position;
