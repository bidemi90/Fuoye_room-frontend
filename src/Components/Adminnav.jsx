import React from "react";
import { IoIosLogIn } from "react-icons/io";
import  applogo  from "../assets/APPLOGO.png";

const Adminnav = () => {
  return (
    <>
      <nav className=" d-flex justify-content-between align-items-center ">
        <div className=" mx-3 my-2">
          <img className="applogo" src={applogo} alt="" />
        </div>
        <div className=" mx-3 w-50 d-flex justify-content-between align-items-center my-2">
          <button className=" d-flex justify-content-evenly align-items-center buttonfornav p-1 fs-6 fw-semibold text-capitalize text-center px-4 py-2 rounded-3 mx-2">
            link
          </button>
          <button className=" d-flex justify-content-evenly align-items-center buttonfornav p-1 fs-6 fw-semibold text-capitalize text-center px-4 py-2 rounded-3 mx-2">
            link
          </button>
          <button className=" d-flex justify-content-evenly align-items-center buttonfornav p-1 fs-6 fw-semibold text-capitalize text-center px-4 py-2 rounded-3 mx-2">
            link
          </button>
          <button className=" d-flex justify-content-evenly align-items-center buttonfornav p-1 fs-6 fw-semibold text-capitalize text-center px-4 py-2 rounded-3 mx-2">
            link
          </button>
          <button className=" d-flex justify-content-evenly align-items-center buttonfornav p-1 fs-6 fw-semibold text-capitalize text-center px-4 py-2 rounded-3 mx-2">
            login <IoIosLogIn className=" mx-1" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Adminnav;
