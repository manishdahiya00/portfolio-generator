import React from "react";

export default function Stats() {
  return (
    <div className="text-center w-full container mx-auto mb-20">
      <div className=" flex flex-col justify-around my-20">
        <h2 className="text-4xl font-semibold mb-4">
          Portfolio Generator Stats
        </h2>
        <p className="opacity-80">
          See the power of our portfolio generator tool. Built for creators,
          developers, and professionals to showcase their work effortlessly.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="my-10 md:mb-2 mx-2">
          <h2 className="text-4xl font-bold mb-4">50,000+</h2>
          <p className="opacity-80">Portfolios generated in the last month</p>
        </div>
        <div className="my-10 md:mb-2 mx-2">
          <h2 className="text-4xl font-bold mb-4">100+</h2>
          <p className="opacity-80">Free and premium templates available</p>
        </div>
        <div className="my-10 md:mb-2 mx-2">
          <h2 className="text-4xl font-bold mb-4">1,200+</h2>
          <p className="opacity-80">New users joining monthly</p>
        </div>
      </div>
    </div>
  );
}
