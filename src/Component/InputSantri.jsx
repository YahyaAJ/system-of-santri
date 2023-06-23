import React from "react";
import close from "../assets/xmark-solid.svg";
import "./compstyle.css";

function InputSantri(props) {
  return (
    <div className="flex justify-center items-center fixed z-[5] h-screen w-full bg-[rgba(0,0,0,0.5)]">
      <div className="relative px-8 pt-5 3xl:px-12 3xl:pt-8 4xl:pt-10 3xl:pb-6 bg-white rounded-lg min-w-[35%] min-h-[60vh ">
        <div className="flex justify-between w-full ">
          <h1 className="font-bold text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-[3.5rem]">Input Santri</h1>
          <button className="absolut right-6 top-4 w-5 4xl:w-8" onClick={props.toogle}>
            <img src={close} />
          </button>
        </div>
        <form className="w-full">
          {/* nama */}
          <div className="mt-5 flex">
            <div className="grid gap-3 3xl:gap-4 4xl:gap-6 w-full mr-5 2xl:text-xl 3xl:text-2xl 4xl:text-[2rem] ">
              <label className="">Nama</label>
              <label className="">Divisi</label>
              <label className="">Masa Santri</label>
              <label className="">Angkatan</label>
              <label className="">Tahun</label>
              <label className="">Status</label>
            </div>
            <div className="grid gap-3 3xl:gap-4 4xl:gap-6 2xl:text-xl 3xl:text-2xl 4xl:text-[2rem] w-full ">
              <input className="outline-none bg-white border border-black rounded-sm py-1 px-3" />
              <select className="outline-none bg-white border border-black rounded-sm py-1 px-3">
                <option>Front-End</option>
                <option>Back-End</option>
                <option>Mobile</option>
              </select>

              <select className="outline-none bg-white border border-black rounded-sm py-1 px-3">
                <option>Santri Belajar</option>
                <option>Santri Berkarya</option>
                <option>Alumni</option>
              </select>
              <input className="outline-none bg-white border border-black rounded-sm py-1 px-3" />
              <input className="outline-none bg-white border border-black rounded-sm py-1 px-3" />
              <select className="outline-none bg-white border border-black rounded-sm py-1 px-3">
                <option>Santri Belajar</option>
                <option>Santri Berkarya</option>
                <option>Alumni</option>
              </select>
            </div>
          </div>
          <button className="w-full mb-5 mt-3 2xl:mt-4 3xl:mt-5 4xl:mt-8 py-3 3xl:py-5 4xl:py-7 2xl:text-2xl 3xl:text-[2rem] 4xl:text-[2.5rem] bg-[#008C74] font-semibold text-white rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputSantri;
