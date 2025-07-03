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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlelogout = () => {
    navigate("/login");

    dispatch(featchinguserfailed(null));
  };

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
              <Link
                to="profile"
                className=" mb-0 fs-6 mx-3 text-uppercase fw-bold text-decoration-none text-light"
              >
                {!userdata || (Array.isArray(userdata) && userdata.length === 0)
                  ? "loading..."
                  : userdata?.ifusermatricnumber?.matric_number}
              </Link>
              
                <img
                  className="  profileimginusernavimg"
                  src={
                    userdata.ifusermatricnumber.profileImage !== ""
                      ? userdata.ifusermatricnumber.profileImage
                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAMFBMVEXk5ueutLeor7Lf4ePn6eqrsbW5vsHIzM7a3d60ur3BxsjR1NbN0dPX2tzr7O29wsX2DjRMAAADaUlEQVR4nO2bW3LkIAwADYi3be5/25iZZB4bxyDZgqkt+ivZn+0SQgahTNNgMBgMBoPBYDAYDAaDwWCaAGBSG/mn3i53AFQMxt8xdpm6ewE466XU4getpZlVVy9YjHgKPcRE6Ke1KclfRnct2UkLprATpWe05g5W4PzfShmZVHOneGh0D1ZjK5j/yKZ3lpZLCPZ46R7Bcu2sKuN0i1Uzp1gXpxvN8qpeSQjTyMkgAiV0aJFWMGOctnrVpLZXJ/k3DRYQAi5Q2wJGdqkFqZThXj98oHKouK2wGZVhzqra78s/oXK8VobgxF2rHMVpY+WUipSU2goo5/pBoqTUtn6cZ+OV5sScVLTV4y0Kjhgp4fmOVajT3TuMUshTyxPG8kmr5xnGmnBCiu8C8b9JMS7fRyY6vSQwSi0fWDwn9YmfGaBKBUap1dOctGU8JVC3H29LaCGePHnvWKT104lVCgIpUMwXd1JR4KxSGcr+Y917NwhFXTIrTYQ7coNeHjhsVnFnVGZFtTyZL6IPFM7Js/YRfgBcWWduAz2sEN082e55prrPwV+iXii89T3i1NKp8tWhzWsDzqpxnDKlO6AW7J3q38BymFjSdHlvP3pu12LuYHRjdUHuaWlhew5xgApe6Fex7RffLUoPrWmxRkipM1KKNLv+IzjfuBjnuOTv3GcYAawvQN8Rqvy/K7dEG5L5Po4ak4KdF9dpvAtWtdhkvL5l02ue538RPoWoYG0oBpOKQUh9WNJz3pvZqSYRg9VZL3bL017B8iFyxwsmZ2uFniFLC2MpBYh7024VWt4yVQpQ9jiLDr1kYGhaHw+71WiJdHGTaosSMpP2kOnKWwTMlWfyAvq63ic4T+2//ta66L4M9iqju1Y6Xx+Kk5N4q9NTJhDP7bl9rZOZZS/Lple2S8UJJ+IYQhEt6ImF7EShoJasq1P8DeIjBGecMoRYAbeT0Ohsh8Cy797AdmjpT9gItEEtIL4vTULiPoTEx0YsGpHslLlJGr5eqs3iZRCN2tTKSVTPMNGnDwjoVPcgQX1SJ1pVherE7AhJqq6t3Wzr3amq67hHqvPImtMxceiVjimn+koaWT5DTaq3zahMcf2A8ucC5yhXdfqEG51UWrx23+InvphSLb97PxQz3cv2FN++VQeKyzcYDAaDwaA9XxcLKh2A6JUdAAAAAElFTkSuQmCC"
                  }
                  alt=""
                />
            </div>

            <div className=" flotdropinnav d-flex d-xl-none">
              <button className="buttonfornav flotbutton mx-3 rounded-2 px-4 py-2">
                <IoMenu className=" fs-3" />
              </button>
              <div className=" flotnavposition">
                <div className=" w-100 position-relative">
                  <Link
                    to=""
                    className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2 mt-3  w-75"
                  >
                    dashboard <RiDashboardFill className=" mx-3" />
                  </Link>
                  <Link
                    to="currentroom"
                    className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2 mt-3  w-75"
                  >
                    current room <FaHouseChimneyUser className=" mx-3" />
                  </Link>
                  <Link
                    to="booking_history"
                    className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2 mt-3  w-75"
                  >
                    booking history <FaHistory className=" mx-3" />
                  </Link>
                  <Link
                    to="profile"
                    className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2 mt-3  w-75"
                  >
                    profile <BsPersonBoundingBox className=" mx-3" />
                  </Link>
                </div>
                <div className=" w-100">
                  <button
                    className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2 mt-3 mb-5  w-75"
                    onClick={handlelogout}
                  >
                    log out <LuArrowRightFromLine className=" mx-3" />
                  </button>
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
