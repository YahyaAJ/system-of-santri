import React from "react";
import "./style.css";
import Santri from "../Component/Santri";
import filter from "../assets/sliders-solid.svg";
import plus from "../assets/plus-solid.svg";
import InputSantri from "../Component/InputSantri";
import { useState } from "react";

const DataSantri = () => {
  const [modal, setModal] = useState();

  const toogle = () => {
    setModal(!modal);
  };

  const inputSantri = modal ? <InputSantri toogle={toogle} /> : null;

  return (
    <div className="flex pt-[10vh] h-screen">
      {inputSantri}
      <div className="h-screen " />
      <div className="w-full px-[5%] pt-10 ">
        <div className="flex items-center justify-between px-20">
          <h1 className="text-5xl font-bold">Data Santri</h1>
          <div className="flex items-center gap-3">
            <input
              placeholder="Type here"
              className="input"
              name="text"
              type="text"
            />
            <img src={filter} className="w-6 self-end" />
          </div>
        </div>
        <div className="relative mt-8 px-8 py-5 font-bold text-xl text-white bg-[#008C74] flex justify-center text-center">
          <p className="basis-1/5">nama</p>
          <p className="basis-1/5">divisi</p>
          <p className="basis-1/5">Masa Santri</p>
          <p className="basis-1/5">angkatan</p>
          <p className="basis-1/5">status</p>
          <div className="absolute right-5"></div>
        </div>
        <div className="grid gap-3 my-3">
          <button onClick={toogle}>
            <div className="flex text-center font-medium justify-center border-x-2 border-y-[1px] border-y-[rgba(0,0,0,0.03)] bg-[rgba(0,0,0,0.015)] border-[#008C74] px-8 hover:scale-[1.003] hover:bg-[rgba(0,0,0,0.030)]">
              <img
                src={plus}
                className="w-10 rounded-xl bg-[#008C74] m-3 p-2"
              />
            </div>
          </button>
          {Santri.map((data, index) => {
            return (
              <div
                key={index}
                className="flex text-center items-center font-medium justify-between border-x-2 border-y-[1px] border-y-[rgba(0,0,0,0.03)] border-[#008C74] bg-[rgba(0,0,0,0.015)]  py-5 px-8 hover:scale-[1.003] hover:bg-[rgba(0,0,0,0.030)]"
              >
                <p className="basis-1/5">{data.nama}</p>
                <p className="basis-1/5">{data.divisi}</p>
                <p className="basis-1/5">{data.masaSantri}</p>
                <div className="basis-1/5">
                  <p>{data.angkatan}</p>
                  <span className="text-xs font-light">{data.tahun}</span>
                </div>
                <p className="basis-1/5">{data.amanah}</p>
              </div>
            );
          })}
        </div>
        <div className="bg-[#008C74] w-full h-10 border-x-2 border-[#008C74] " />
        <div className="bg-[#008C74] mt-1 border-b-4 border-[#008C74] " />
        <br />
      </div>
    </div>
  );
};
export default DataSantri;
