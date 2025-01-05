import React, { useState } from "react";
import "./AppBox.css";

function AppBox() {
  const image = "https://via.placeholder.com/50";

  return (
    <section className="section2 flex flex-col items-center justify-center">
      <div className="px-4 max-w-screen">
        <div className="mt-10">
          <div>
            <div className="appbox2-topic">
              Embedded Technologies (Hardware Part)
            </div>
            <div className="appbox2-container px-4">
              <div className="appbox2">
                <div className="appbox2-content">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <div key={index} className="grid-item">
                      <img src={image} alt={`Grid item ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="appbox-topic mt-20">
              Programming | Scripting | Markup Languages (Software Part)
            </div>
            <div className="appbox-container px-4">
              <div className="appbox">
                <div className="appbox-content">
                  {Array.from({ length: 49 }).map((_, index) => (
                    <div key={index} className="grid-item">
                      <img src={image} alt={`Grid item ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppBox;
