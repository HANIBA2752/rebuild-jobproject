import React from "react";
import "../components/Position/pos-box.css";
import "animate.css";
import SubNavbar from "../components/SubNavbar/SubNavbar";

function Position() {
  const data = [
    {
      id: 1,
      position: "Frontend Developer",
      trending: "Hot",
      skills: "HTML, CSS, JavaScript, React",
    },
    {
      id: 2,
      position: "Backend Developer",
      trending: "Growing",
      skills: "Node.js, Express.js, MySQL, MongoDB",
    },
    {
      id: 3,
      position: "DevOps Engineer",
      trending: "Popular",
      skills: "Docker, Kubernetes, Jenkins",
    },
    {
      id: 1,
      position: "Frontend Developer",
      trending: "Hot",
      skills: "HTML, CSS, JavaScript, React",
    },
    {
      id: 2,
      position: "Backend Developer",
      trending: "Growing",
      skills: "Node.js, Express.js, MySQL, MongoDB",
    },
    {
      id: 3,
      position: "DevOps Engineer",
      trending: "Popular",
      skills: "Docker, Kubernetes, Jenkins",
    },
    {
      id: 1,
      position: "Frontend Developer",
      trending: "Hot",
      skills: "HTML, CSS, JavaScript, React",
    },
    {
      id: 2,
      position: "Backend Developer",
      trending: "Growing",
      skills: "Node.js, Express.js, MySQL, MongoDB",
    },
    {
      id: 3,
      position: "DevOps Engineer",
      trending: "Popular",
      skills: "Docker, Kubernetes, Jenkins",
    },
    {
      id: 1,
      position: "Frontend Developer",
      trending: "Hot",
      skills: "HTML, CSS, JavaScript, React",
    },
    {
      id: 2,
      position: "Backend Developer",
      trending: "Growing",
      skills: "Node.js, Express.js, MySQL, MongoDB",
    },
    {
      id: 3,
      position: "DevOps Engineer",
      trending: "Popular",
      skills: "Docker, Kubernetes, Jenkins",
    },    {
      id: 1,
      position: "Frontend Developer",
      trending: "Hot",
      skills: "HTML, CSS, JavaScript, React",
    },
    {
      id: 2,
      position: "Backend Developer",
      trending: "Growing",
      skills: "Node.js, Express.js, MySQL, MongoDB",
    },
    {
      id: 3,
      position: "DevOps Engineer",
      trending: "Popular",
      skills: "Docker, Kubernetes, Jenkins",
    },
    {
      id: 1,
      position: "Frontend Developer",
      trending: "Hot",
      skills: "HTML, CSS, JavaScript, React",
    },
    {
      id: 2,
      position: "Backend Developer",
      trending: "Growing",
      skills: "Node.js, Express.js, MySQL, MongoDB",
    },
    {
      id: 3,
      position: "DevOps Engineer",
      trending: "Popular",
      skills: "Docker, Kubernetes, Jenkins",
    },
  ];

  return (
    <>
      <div><SubNavbar /></div>
      <div className="w-screen h-screen bg-neutral-800 flex flex-col md:flex-row">
        {/* Sidebar Filter */}
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

        {/* Main Table Section */}
        <div className="w-full p-4 pr-8 overflow-x-auto">
          <div className="flex justify-center">
            <div className="overflow-x-auto w-full">
              <table className="table-auto w-full bg-neutral-800 border border-neutral-600 border-collapse">
                <thead className="bg-neutral-900">
                  <tr>
                    <th
                      className="text-neutral-50 font-medium tracking-[5px] bg-neutral-800 py-2 px-6 text-left"
                      colSpan="3"
                    >
                      Computer Engineering
                    </th>
                  </tr>
                  <tr className="text-neutral-50">
                    <th className="border border-neutral-600 px-4 py-2 text-left font-light">No.</th>
                    <th className="border border-neutral-600 px-4 py-2 text-left font-light">Position</th>
                    <th className="border border-neutral-600 px-4 py-2 text-left font-light">Mostly Skills Requirement</th>
                    <th className="border border-neutral-600 px-4 py-2 text-center font-light">Trending</th>
                    <th className="border border-neutral-600 px-4 py-2 text-center font-light">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => {
                    let trendClass = "";
                    switch (row.trending) {
                      case "Hot":
                        trendClass = "border-neutral-600 bg-neutral-900";
                        break;
                      case "Popular":
                        trendClass = "border-neutral-600 bg-neutral-600";
                        break;
                      case "Growing":
                        trendClass = "border-neutral-600 bg-neutral-300 text-neutral-900 font-light";
                        break;
                    }

                    return (
                      <tr key={row.id} className="hover:bg-neutral-600 text-neutral-50">
                        <td className="border border-neutral-600 px-4 py-2 font-extralight">{index + 1}</td>
                        <td className="border border-neutral-600 px-4 py-2 font-extralight">{row.position}</td>
                        <td className="border border-neutral-600 px-4 py-2 font-extralight">{row.skills}</td>
                        <td className="border border-neutral-600 px-4 py-2 font-extralight text-center">
                          <span className={`${trendClass} rounded-2xl px-4 py-1 border`}>
                            {row.trending}
                          </span>
                        </td>
                        <td className="border border-neutral-600 px-4 py-2 text-center font-extralight">
                          <button className="bg-neutral-700 text-neutral-50 px-4 py-2 rounded-md hover:bg-neutral-800">
                            GO
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Position;
