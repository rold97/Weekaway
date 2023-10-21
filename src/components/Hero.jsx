import React from "react";

const Hero = () => {
  return (
    <div id="home" className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&q=80&w=1033&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="background beach"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto ">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            perspiciatis dolor ex praesentium blanditiis placeat dolores quod
            ipsum sit minus explicabo assumenda, cumque maxime natus rem fuga
            perferendis neque libero!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
