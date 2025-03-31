import React from "react";
import { Link } from "react-router-dom";
import { LuArrowRightFromLine } from "react-icons/lu";
import { FaHistory } from "react-icons/fa";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { RiDashboardFill } from "react-icons/ri";
import { BsPersonBoundingBox } from "react-icons/bs";

import {
  featchinguser,
  featchinguserfailed,
  featchinguserSuccessful,
  fetchUpdatedUserData,
} from "./Redux/userdata";



import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const Sidenav = () => {

  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
    (state) => state.userdata
  );



  const handlelogout=()=>{
    navigate("/login");

      dispatch(featchinguserfailed(null));


  }
  return (
    <>
      <nav className=" sidenav  d-flex justify-content-between flex-column align-items-center ">
        <div className=" w-75">
          <Link to="" className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2 mt-4  w-75">
            dashboard <RiDashboardFill className=" mx-3"/>
          </Link>
          <Link to="currentroom" className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2 mt-4  w-75">
            current room <FaHouseChimneyUser className=" mx-3"/>
          </Link>
          <Link  to="booking_history" className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2 mt-4  w-75">
            booking history <FaHistory className=" mx-3"/>
          </Link>
          <Link to="profile" className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2 mt-4  w-75">
            profile  <BsPersonBoundingBox className=" mx-3"/>
          </Link>
        </div>
        <div className=" w-75">
          <button className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2  w-75 "  onClick={handlelogout} >
            log out <LuArrowRightFromLine className=" mx-3"/>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidenav;
