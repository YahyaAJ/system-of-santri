import React from "react";
import { NavLink } from "react-router-dom";
import Curriculum from "../Curriculum/Curriculum";
import NavSprint from "../NavSprint";
const Sprint3 = () => {
  return (
    <div className="h-screen pt-[15vh] pb-[5vh] w-full">
      <div className="px-[5%]">
        <div className="flex w-full gap-5">
          <div className="px-[5%] pt-[7%] mt-[5%] h-[200vh] basis-[70%] border border-black">
           part 3
          </div>
          <div className="grid fixed right-[5%] mt-[4.5%] w-[25%] gap-2">
            {Curriculum.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center py-3 pl-4 pr-2 w-full gap-3 border border-l-[5px] border-[rgba(0,0,0,0.15)] border-l-[#008C74] hover:bg-[#008C74] hover:text-white duration-200 "
                >
                  <p>{data.id}</p>
                  <img src={data.image} className="w-[35%]" />
                  <p className="text-sm">{data.materi}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sprint3;
