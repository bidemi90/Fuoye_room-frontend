import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import { IoIosBed } from "react-icons/io";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import {
  featchinguser,
  featchinguserfailed,
  featchinguserSuccessful,
  fetchUpdatedUserData,
} from "./Redux/userdata";

const Dashboardhome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
    (state) => state.userdata
  );

  // dispatch(fetchUpdatedUserData(userdata.ifusermatricnumber.email))

  return (
    <>
      <h1 className=" fw-semibold fs-2 text-capitalize">overview</h1>
      <div className=" d-flex flex-wrap justify-content-evenly align-items-center">
        <div className=" col-4 my-2">
          <div className=" col-11 m-auto newboxholderdash text-light">
            <p className=" fs-5 fw-bold text-capitalize m-0 mb-3">
              Applications
            </p>
            <p className=" fs-4 fw-mediumx">1</p>
          </div>
        </div>
        <div className=" col-4 my-2">
          <div className=" col-11 m-auto newboxholderdash text-light">
            <p className=" fs-5 fw-bold text-capitalize m-0 mb-3">payments</p>
            <p className=" fs-4 fw-mediumx">1</p>
          </div>
        </div>
        <div className=" col-4 my-2">
          <div className=" col-11 m-auto newboxholderdash text-light">
            <p className=" fs-5 fw-bold text-capitalize m-0 mb-3">messages</p>
            <p className=" fs-4 fw-mediumx">1</p>
          </div>
        </div>
      </div>

      <section>
        <p className=" fs-6 fw-bold text-uppercase ">room category</p>
        <div className="  ">
          <p class=" fs-6 m-0 text-capitalize fw-semibold">school hostel</p>
          <div className=" d-flex flex-wrap">
            <Link
              to="/dashboard/schoolmalehostel"
              className=" categorytypedivnew my-2 mx-1 d-flex justify-content-evenly align-items-center p-2 px-4 rounded-5"
            >
              <FaMale className=" me-2 " />
              <p className="   fw-bold text-capitalize m-0  text-center">
                male hostel
              </p>
            </Link>
            <Link
              to="/dashboard/schoolfemalehostel"
              className=" categorytypedivnew my-2 mx-1 d-flex justify-content-evenly align-items-center p-2 px-4 rounded-5"
            >
              <FaFemale className=" me-2 " />
              <p className="   fw-bold text-capitalize m-0  text-center">
                female hostel
              </p>
            </Link>
          </div>
          <p className=" fs-6 m-0 text-capitalize fw-semibold">
            private hostel
          </p>

          <div className="d-flex flex-wrap">
            <Link
              to="/dashboard/privatemalehostel"
              className=" categorytypedivnew my-2 mx-1 d-flex justify-content-evenly align-items-center p-2 px-4 rounded-5"
            >
              <FaMale className=" me-2 " />
              <p className="   fw-bold text-capitalize m-0  text-center">
                male only hostel
              </p>
            </Link>

            <Link
              to="/dashboard/privatefemalehostel"
              className=" categorytypedivnew my-2 mx-1 d-flex justify-content-evenly align-items-center p-2 px-4 rounded-5"
            >
              <FaFemale className=" me-2 " />
              <p className="   fw-bold text-capitalize m-0  text-center">
                female only hostel
              </p>
            </Link>

            <Link
              to="/dashboard/Mixedhostel"
              className=" categorytypedivnew my-2 mx-1 d-flex justify-content-evenly align-items-center p-2 px-4 rounded-5"
            >
              <BiMaleFemale className=" me-2 " />
              <p className="   fw-bold text-capitalize m-0  text-center">
                mixed hostel
              </p>
            </Link>

            <Link
              to="/dashboard/Coupleshostel"
              className=" categorytypedivnew my-2 mx-1 d-flex justify-content-evenly align-items-center p-2 px-4 rounded-5"
            >
              <IoIosBed className=" me-2 " />
              <p className="   fw-bold text-capitalize m-0  text-center">
                couples hostel
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboardhome;
