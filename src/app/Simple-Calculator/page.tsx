import React from "react";

const SimpleCalculator = () => {
  return (
    <div>
      <div className="flex flex-col mt-[40px] justify-center items-center">
        <div>
          <div className="bg-white w-fit h-fit p-5 rounded-xl border shadow-md">
            <div className="flex flex-col gap-3 text-5xl font-bold justify-center items-center">
              344
              <div className="bg-black p-[0.3px] w-[300px]"></div>
              <hr />
            </div>
            <div className="grid grid-cols-1 gap-[20px] text-2xl mt-2 text-zinc-500">
              <div className="flex flex-row gap-2">
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  AC
                </div>
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  /
                </div>
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  %{" "}
                </div>
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  ÷
                </div>
              </div>
              <div className="flex flex-row gap-3.5">
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  7
                </div>
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  8
                </div>
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  9
                </div>
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  X
                </div>
              </div>
              <div className="flex flex-row gap-3.5">
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  4
                </div>
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  5
                </div>
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  6
                </div>
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  {" "}
                  -
                </div>
              </div>
              <div className="flex flex-row gap-3.5">
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  1
                </div>
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  2
                </div>
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  1
                </div>
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  +
                </div>
              </div>
              <div className="flex flex-row gap-3.5">
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg hover:font-bold">
                  0
                </div>
                <div className="bg-transparent hover:bg-purple-500 hover:text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg font-bold">
                  .
                </div>
                <div className="bg-purple-600 hover:bg-purple-500 text-white px-7 py-3 transition-all duration-300 cursor-pointer rounded-lg font-bold w-full text-center text-3xl">
                  =
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCalculator;
