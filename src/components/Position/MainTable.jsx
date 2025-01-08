import React from "react";
import { prePos } from "../data/pre-pos";

const DataTable = ({ data }) => {
  return data.map((row, index) => {
    let trendClass = "";
    switch (row.trending) {
      case "Hot":
        trendClass = "border-neutral-600 bg-neutral-900";
        break;
      case "Popular":
        trendClass = "border-neutral-600 bg-neutral-600";
        break;
      case "Growing":
        trendClass =
          "border-neutral-600 bg-neutral-300 text-neutral-900 font-light";
        break;
      default:
        trendClass = "";
    }

    return (
      <tr key={row.id + index} className="hover:bg-neutral-600 text-neutral-50">
        <td className="border border-neutral-600 px-4 py-2 font-extralight">
          {index + 1}
        </td>
        <td className="border border-neutral-600 px-4 py-2 font-extralight">
          {row.position}
        </td>
        <td className="border border-neutral-600 px-4 py-2 font-extralight">
          {row.skills}
        </td>
        <td className="border border-neutral-600 px-4 py-2 text-center font-extralight">
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
  });
};

const MainTable = () => {
  return (
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
                <th className="border border-neutral-600 px-4 py-2 text-left font-light">
                  No.
                </th>
                <th className="border border-neutral-600 px-4 py-2 text-left font-light">
                  Position
                </th>
                <th className="border border-neutral-600 px-4 py-2 text-left font-light">
                  Mostly Skills Requirement
                </th>
                <th className="border border-neutral-600 px-4 py-2 text-center font-light">
                  Trending
                </th>
                <th className="border border-neutral-600 px-4 py-2 text-center font-light">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <DataTable data={prePos} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainTable;
