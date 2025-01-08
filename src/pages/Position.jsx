import React from "react";
import "../components/Position/pos-box.css";
import "animate.css";
import { prePos } from "../components/data/pre-pos.js";
import Filter from "../components/Position/Filter.jsx";
import MainTable from "../components/Position/MainTable.jsx";

function Position() {
  return (
    <>
      <div className="w-screen h-screen bg-neutral-800 flex flex-col md:flex-row pt-[49px]">
        {/* Sidebar Filter */}
        <Filter />

        {/* Main Table Section */}
        <MainTable data={prePos} />
      </div>
    </>
  );
}

export default Position;
