import React, { useState, useEffect } from "react";
import applogo from "../assets/APPLOGO.png";

import { Link } from "react-router-dom";
import { LuArrowRightFromLine } from "react-icons/lu";
import { FaHistory } from "react-icons/fa";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { RiDashboardFill } from "react-icons/ri";
import { BsPersonBoundingBox } from "react-icons/bs";

import { FaUsers } from "react-icons/fa";
import { BsFillHouseGearFill } from "react-icons/bs";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import profiimg from "../assets/proimg.png"

const Admintopnav = () => {
  const [currentTime, setCurrentTime] = useState("");

  // Function to update the time
  const updateTime = () => {
    const time = new Date().toLocaleTimeString(); // Get current time in local format
    setCurrentTime(time);
  };

  // Use useEffect to set an interval to update the time every second
  useEffect(() => {
    const timer = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      <nav className=" d-flex justify-content-between align-items-center usernav">
        <div className=" mx-2 ">
          <img className="applogo" src={applogo} alt="App Logo" />
        </div>
        <div className=" mx-2 d-flex justify-content-between align-items-center w-75 ">
          <p className=" mb-0 fs-6 fw-bold text-capitalize">
            {currentTime} {/* Display current time */}
          </p>
          <div className=" d-flex justify-content-evenly align-items-center">
            <div className=" d-none d-xl-flex align-items-center ">
              <button className="d-flex justify-content-evenly align-items-center Linkfornav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 rounded-3 mx-2 fw-bold">
                admin profile <BsPersonBoundingBox className=" mx-2" />
              </button>
              <button className="  profileimginusernav d-flex justify-content-center align-items-center">
                <img
                  className="  profileimginusernavimg"
                  src={profiimg}
                  alt=""
                />
              </button>
            </div>

            <div className=" flotdropinnav d-flex d-xl-none">
              <button className="buttonfornav flotbutton mx-3 rounded-2 px-4 py-2">
                <IoMenu className=" fs-3" />
              </button>
              <div className=" flotnavposition">
                <div className=" w-100 position-relative">
                  <Link
                    to=""
                    className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2  w-75"
                  >
                    dashboard <RiDashboardFill className=" mx-3" />
                  </Link>
                  <Link
                    to="alluser"
                    className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2  w-75"
                  >
                    all user <FaUsers className=" mx-3" />
                  </Link>
                  <Link to="room_management" className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2  w-75">
                    rooms <BsFillHouseGearFill className=" mx-3" />
                  </Link>
                  <Link className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2  w-75">
                    request <VscGitPullRequestGoToChanges className=" mx-3" />
                  </Link>
                  <Link className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2  w-75">
                    payment <RiSecurePaymentFill className=" mx-3" />
                  </Link>
                  <Link className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2  w-75">
                    admin profile <BsPersonBoundingBox className=" mx-3" />
                  </Link>
                </div>
                <div className=" w-100">
                  <Link className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2  w-75">
                    log out <LuArrowRightFromLine className=" mx-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Admintopnav;
