import React from "react";

function Filter() {
  return (
    <div className="w-full md:w-[20%] bg-neutral-900 p-4 md:h-auto flex flex-col space-y-4">
      <h2 className="text-neutral-50 font-semibold mb-4">Filters</h2>

      {/* Sort Filter */}
      <div className="flex flex-col space-y-2">
        <h3 className="text-neutral-400 text-sm font-medium">Sort by</h3>
        <select
          name="sortFilter"
          id="sortFilter"
          className="w-full mt-1 p-2 bg-neutral-800 text-neutral-50 rounded"
        >
          <option>Sort by</option>
          <option>A-Z</option>
          <option>Z-A</option>
          <option>Highest Salary</option>
          <option>Lowest Salary</option>
        </select>
      </div>

      {/* Position Filter */}
      <div className="flex flex-col space-y-2">
        <h3 className="text-neutral-400 text-sm font-medium">Position</h3>
        <select
          name="positionFilter"
          id="positionFilter"
          className="w-full mt-1 p-2 bg-neutral-800 text-neutral-50 rounded"
        >
          <option>All Positions</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>DevOps Engineer</option>
        </select>
      </div>

      {/* Trending Filter */}
      <div className="flex flex-col space-y-2">
        <h3 className="text-neutral-400 text-sm font-medium">Trending</h3>
        <select
          name="trendingFilter"
          id="trendingFilter"
          className="w-full mt-1 p-2 bg-neutral-800 text-neutral-50 rounded"
        >
          <option>All Trends</option>
          <option>Hot</option>
          <option>Popular</option>
          <option>Growing</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
