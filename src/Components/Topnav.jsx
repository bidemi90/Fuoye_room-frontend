import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import applogo from "../assets/APPLOGO.png";

import { LuArrowRightFromLine } from "react-icons/lu";
import { FaHistory } from "react-icons/fa";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { RiDashboardFill } from "react-icons/ri";
import { BsPersonBoundingBox } from "react-icons/bs";
import profiimg from "../assets/proimg.png";

import { IoMenu } from "react-icons/io5";
import {
  featchinguser,
  featchinguserfailed,
  featchinguserSuccessful,
  fetchUpdatedUserData,
} from "./Redux/userdata";

const Topnav = () => {
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

  const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
    (state) => state.userdata
  );

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
              <p className=" mb-0 fs-6 mx-3 text-uppercase fw-bold ">
                {!userdata || (Array.isArray(userdata) && userdata.length === 0)
                  ? "loading..."
                  : userdata?.ifusermatricnumber?.matric_number}
              </p>
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
                    to="currentroom"
                    className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2  w-75"
                  >
                    current room <FaHouseChimneyUser className=" mx-3" />
                  </Link>
                  <Link className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2  w-75">
                    booking history <FaHistory className=" mx-3" />
                  </Link>
                  <Link className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2  w-75">
                    profile <BsPersonBoundingBox className=" mx-3" />
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

export default Topnav;
