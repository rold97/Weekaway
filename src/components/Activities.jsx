import React from "react";

const Activities = () => {
  return (
    <div className="m-auto w-full md:flex mt-[-15%] justify-center">
      <div className="relative p-4 md:w-[300px] lg:w-[400px] xl:w-[550px]">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="sea villa"
          className="w-full h-full object-cover relative border-[6px] border-white shadow-xl"
        />
      </div>
      <div className="relative p-4 md:w-[300px] lg:w-[400px] xl:w-[550px]">
        <h3 className="absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold text-center">
          Cruise Trips
        </h3>
        <img
          src="https://images.unsplash.com/photo-1548574505-12caf0050b5b?auto=format&fit=crop&q=80&w=1033&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="cruise ship"
          className="w-full h-full object-cover relative border-[6px] border-white shadow-xl"
        />
      </div>
      <div className="relative p-4 md:w-[300px] lg:w-[400px] xl:w-[550px]">
        <h3 className="absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold ">
          Activities
        </h3>
        <img
          src="https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="diving"
          className="w-full h-full object-cover relative border-[6px] border-white shadow-xl"
        />
      </div>
    </div>
  );
};

export default Activities;
