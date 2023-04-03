import React from "react";

const GameCardShrimming = () => {
  return (
    <div className="flex flex-col gap-2 bg-secondary rounded-2xl">
      <div className="bg-gray-500 h-52 lg:h-36 xl:h-52 2xl:h-64 w-full rounded-t-2xl animate-pulse"></div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-row justify-between">
          <div className="w-24 h-4 bg-gray-500 animate-pulse"></div>
          <div className="w-6 h-5 bg-gray-500 animate-pulse"></div>
        </div>
        <div className="w-full h-6 bg-gray-500 animate-pulse"></div>
      </div>
    </div>
  );
};

export default GameCardShrimming;
