import React, { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";
import Topnav from "./Topnav";
import Sidenav from "./Sidenav";

import axios from "axios";

import {
  featchinguser,
  featchinguserfailed,
  featchinguserSuccessful,
  fetchUpdatedUserData,
} from "./Redux/userdata";

import {
  fetchUpdatedAllschoolmalehosteldata,
  fetchingAllschoolmalehostelFailed,
  fetchingAllschoolmalehostelSuccessful,
  fetchingAllschoolmalehostel,
} from "./Redux/Allschoolmalehostel";

import {
  fetchUpdatedAllschoolfemalehosteldata,
  fetchingAllschoolfemalehostelFailed,
  fetchingAllschoolfemalehostelSuccessful,
  fetchingAllschoolfemalehostel,
} from "./Redux/Allschoolfemalehostel";

import {
  fetchUpdatedAllprivatemalehosteldata,
  fetchingAllprivatemalehostel,
  fetchingAllprivatemalehostelFailed,
  fetchingAllprivatemalehostelSuccessful,
} from "./Redux/Allprivatemalehostel";

import {
  fetchUpdatedAllprivatefemalehosteldata,
  fetchingAllprivatefemalehostel,
  fetchingAllprivatefemalehostelFailed,
  fetchingAllprivatefemalehostelSuccessful,
} from "./Redux/Allprivatefemalehostel";

import {
  fetchUpdatedAllmixedhosteldata,
  fetchingAllmixedhostel,
  fetchingAllmixedhostelFailed,
  fetchingAllmixedhostelSuccessful,
} from "./Redux/Allmixedhostel";

import {
  fetchUpdatedAllcoupleshosteldata,
  fetchingAllcoupleshostel,
  fetchingAllcoupleshostelFailed,
  fetchingAllcoupleshostelSuccessful,
} from "./Redux/Allcoupleshostel";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
    (state) => state.userdata
  );

  const {
    isFetchingAllschoolmalehostel,
    allschoolmalehostel,
    isFetchingAllschoolmalehostelFailed,
  } = useSelector((state) => state.Allschoolmalehostel);

  const {
    isFetchingAllschoolfemalehostel,
    allschoolfemalehostel,
    isFetchingAllschoolfemalehostelFailed,
  } = useSelector((state) => state.Allschoolfemalehostel);

  const {
    isFetchingAllprivatemalehostel,
    allprivatemalehostel,
    isFetchingAllprivatemalehostelFailed,
  } = useSelector((state) => state.Allprivatemalehostel);

  const {
    isFetchingAllprivatefemalehostel,
    allprivatefemalehostel,
    isFetchingAllprivatefemalehostelFailed,
  } = useSelector((state) => state.Allprivatefemalehostel);

  const {
    isFetchingAllmixedhostel,
    allmixedhostel,
    isFetchingAllmixedhostelFailed,
  } = useSelector((state) => state.Allmixedhostel);

  const {
    isFetchingAllcoupleshostel,
    allcoupleshostel,
    isFetchingAllcoupleshostelFailed,
  } = useSelector((state) => state.Allcoupleshostel);

  useEffect(() => {
    axios
      .get(
        "https://fuoye-room-backend.onrender.com/user/verifyuserondashbord",
        {
          headers: {
            Authorization: `Bearer ${userdata.token}`,
            "Content-Type": `application/json`,
            Accept: `application/json`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        if (err) {
          navigate("/login");
        }
      });
    // dispatch(fetchUpdatedUserData(userdata.ifusermatricnumber.email))

    dispatch(fetchUpdatedAllschoolmalehosteldata());
    dispatch(fetchUpdatedAllschoolfemalehosteldata());
    dispatch(fetchUpdatedAllprivatemalehosteldata());
    dispatch(fetchUpdatedAllprivatefemalehosteldata());
    dispatch(fetchUpdatedAllmixedhosteldata());
    dispatch(fetchUpdatedAllcoupleshosteldata());
  }, []);

  return (
    <>
      {/* loading  */}

      {isFetchinguser ||
        isFetchingAllschoolmalehostel ||
        isFetchingAllschoolfemalehostel ||
        isFetchingAllprivatemalehostel ||
        isFetchingAllprivatefemalehostel ||
        isFetchingAllmixedhostel ||
        isFetchingAllcoupleshostel && (
          <div className="looder_body">
            <span className="loader"></span>
          </div>
        )}

      <Topnav />
      <div className=" d-flex">
        <div className=" sidenavholder d-none d-xl-block col-lg-2">
          <Sidenav />
        </div>
        <div className=" outletdivholder px-4 py-3 col-12 col-xl-10">
          <div className=" outletholdernew">
            <Outlet />
          </div>

          <footer className=" w-100 d-flex flex-column footernew mt-5 pt-5 pb-5">
            <div className=" col-8 d-flex justify-content-evenly align-items-center m-auto flex-wrap">
              <a
                className=" fs-6 text-light mx-2 fw-semibold text-decoration-none "
                href="#"
              >
                About Us
              </a>
              <a
                className=" fs-6 text-light mx-2 fw-semibold text-decoration-none "
                href="#"
              >
                Contact
              </a>
              <a
                className=" fs-6 text-light mx-2 fw-semibold text-decoration-none "
                href="#"
              >
                Terms of Service
              </a>
              <a
                className=" fs-6 text-light mx-2 fw-semibold text-decoration-none "
                href="#"
              >
                Privacy Policy
              </a>
            </div>
            <p className=" d-flex justify-content-evenly align-items-center text-light mt-3  ">
              @2025 FUOYE ROOM. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
