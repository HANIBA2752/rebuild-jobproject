import React from 'react';
import { useLocation } from 'react-router-dom';
import { posDetail } from '../components/data/pos-detail';  // import pos-detail.js
import '../components/Pos-Detail/detail.css';
import "animate.css";

function PosDetail() {
  const location = useLocation();  // ใช้ useLocation เพื่อดึงข้อมูลที่ส่งมา
  const { id } = location.state || {};  // รับ id จาก state

  if (!id) {
    return <div>ไม่พบข้อมูลของตำแหน่งงานนี้</div>;  // ถ้าไม่มี id แสดงข้อความนี้
  }

  const position = posDetail.find((item) => item.id === id);  // ค้นหาข้อมูลจาก pos-detail.js โดยใช้ id

  if (!position) {
    return <div>ไม่พบข้อมูลของตำแหน่งงานนี้</div>;  // ถ้าไม่พบข้อมูลแสดงข้อความนี้
  }

  // กำหนดคลาสสำหรับ trending
  let trendClass = "";
  switch (position.trending) {
    case "Hot":
      trendClass = "border-red-200 bg-red-100 text-red-800";
      break;
    case "Popular":
      trendClass = "border-yellow-200 bg-yellow-100 text-yellow-800";
      break;
    case "Growing":
      trendClass = "border-green-200 bg-green-100 text-green-800 font-light";
      break;
    default:
      trendClass = "border-neutral-200 bg-neutral-100 text-neutral-800";
  }

  return (
    <div className="posDetail-container">
      {/* Header Section */}
      <div className="posDetail-header">
        <h1 className="posDetail-title animate__animated animate__zoomIn">{position.position}</h1>
        {/* ใช้ trendClass และ w-auto เพื่อให้กล่องพอดีกับข้อความ */}
        <p className={`posDetail-trending  border px-4 py-2 rounded-full inline-block ${trendClass}`}>
          {position.trending}
        </p>
      </div>

      {/* Job Details */}
      <div className="posDetail-content posDetail-title animate__animated animate__zoomIn">
        <h2>Job Description</h2>
        <p>{position.description}</p>
        
        <h3>Skills</h3>
        <p>{position.skills}</p>

        <h3>What You Do</h3>
        <p>{position.do}</p>
      </div>
    </div>
  );
}

export default PosDetail;
