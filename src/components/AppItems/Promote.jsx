import React from "react";

const Promote = () => {
  return (
    <section className="advice flex flex-wrap justify-around items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-neutral-900 text-white p-4 shadow-lg w-full">
        <div className="flex flex-col justify-center items-center bg-neutral-800 p-3 rounded-lg">
          <h2 className="text-sm md:text-lg font-bold tracking-[5px]">
            Jobsdb
          </h2>
          {/* <p className="text-xs md:text-sm text-neutral-400">Your gateway to the best computer engineering jobs!</p> */}
        </div>
        <div className="flex flex-col justify-center items-center bg-neutral-800 p-3 rounded-lg">
          <h2 className="text-sm md:text-lg font-bold tracking-[5px]">
            JobThai
          </h2>
          {/* <p className="text-xs md:text-sm text-neutral-400">Your gateway to the best computer engineering jobs!</p> */}
        </div>
        <div className="flex flex-col justify-center items-center bg-neutral-800 p-3 rounded-lg">
          <h2 className="text-sm md:text-lg font-bold tracking-[5px]">JobTH</h2>
          {/* <p className="text-xs md:text-sm text-neutral-400">Your gateway to the best computer engineering jobs!</p> */}
        </div>
        <div className="flex flex-col justify-center items-center bg-neutral-800 p-3 rounded-lg">
          <h2 className="text-sm md:text-lg font-bold tracking-[5px]">
            JobBkk
          </h2>
          {/* <p className="text-xs md:text-sm text-neutral-400">Your gateway to the best computer engineering jobs!</p> */}
        </div>
        <div className="flex flex-col justify-center items-center bg-neutral-800 p-3 rounded-lg">
          <h2 className="text-sm md:text-lg font-bold tracking-[5px]">
            JobTopGun
          </h2>
          {/* <p className="text-xs md:text-sm text-neutral-400">Your gateway to the best computer engineering jobs!</p> */}
        </div>
      </div>
    </section>
  );
};

export default Promote;
