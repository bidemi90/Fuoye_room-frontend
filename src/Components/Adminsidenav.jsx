import React from "react";
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


const Adminsidenav = () => {
  return (
    <>
      <nav className=" sidenav  d-flex justify-content-between flex-column align-items-center ">
        <div className=" w-75">
          <Link to="" className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2 mt-  w-75">
            dashboard <RiDashboardFill className=" mx-3"/>
          </Link>
          <Link to="alluser" className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2 mt-  w-75">
           all user <FaUsers className=" mx-3"/>
          </Link>
          <Link to="room_management" className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2 mt-  w-75">
            rooms  <BsFillHouseGearFill className=" mx-3"/>
          </Link>
        
          <Link className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2 mt-  w-75">
            payment  <RiSecurePaymentFill className=" mx-3"/>
          </Link>
          <Link className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2 mt-  w-75">
          statistics  <VscGitPullRequestGoToChanges className=" mx-3"/>
          </Link>
        </div>
        <div className=" w-75">
          <Link className=" w-100 d-flex justify-content-center align-items-center Linkforsidenav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 my-2 mt-  w-75">
            log out <LuArrowRightFromLine className=" mx-3"/>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Adminsidenav;