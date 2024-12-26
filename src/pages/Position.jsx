import React from 'react';
import '../components/Position/pos-box.css';

function Position() {
  return (
    <div>
      <section className='pos-section1 h-[1000px] w-full'>
        <div className='pos-container'>
          <h1 className="pos-h1">
            <div className="pos-topic">
              <span className="pos-name">
                TOPIC : <span>COMPUTER ENGINEERING</span>
              </span>
            </div>
          </h1>
          {/* <section className="pos-box">
            <ul className="pos-u">
              {Array(9).fill().map((_, index) => (
                <li key={index} className="pos-li text-white">
                  <div className="text-sm">
                    JOB {index} : <h3 className='inline-block'>Software Engineering</h3>
                    <div>Salary : 50000$</div>
                  </div>
                  <button className="pos-btn">GO</button>
                </li>
              ))}
            </ul>
          </section> */}
        </div>
      </section>
    </div>
    
  );
}

export default Position;
