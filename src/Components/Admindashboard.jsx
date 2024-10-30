import React, { useEffect } from "react";

import { Outlet } from "react-router-dom";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import Admintopnav from "./Admintopnav";
import Adminsidenav from "./Adminsidenav";

import admindata, {
  featchingadmin,
  featchingadminSuccessful,
  featchingadminfailed,
  fetchUpdatedadminData,
} from "./Redux/admindata";

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
  fetchUpdatedalluserdata,
  fetchingalluser,
  fetchingalluserFailed,
  fetchingalluserSuccessful,
} from "./Redux/alluserdata";

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

const Admindashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetchingadmin, admindata, isFeatchingadminfailed } = useSelector(
    (state) => state.admindata
  );

  const { isFetchingalluser, alluser, isFetchingalluserFailed } = useSelector(
    (state) => state.alluserdata
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

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/verifyadminondashbord", {
        headers: {
          Authorization: `Bearer ${admindata.token}`,
          "Content-Type": `application/json`,
          Accept: `application/json`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        if (err) {
          navigate("/management_login");
        }
      });

    dispatch(fetchUpdatedalluserdata());
    dispatch(fetchUpdatedAllschoolmalehosteldata());
    dispatch(fetchUpdatedAllschoolfemalehosteldata());
    dispatch(fetchUpdatedAllprivatemalehosteldata());
    dispatch(fetchUpdatedAllprivatefemalehosteldata());
  }, []);

  // useEffect(() => {

  //   console.log("is it working");

  //   dispatch(fetchUpdatedUserData(userdata.ifusermatricnumber.email));

  //   setTimeout(() => {

  //   console.log(isFetchinguser);
  //   console.log(userdata);
  //   console.log(isFeatchinguserfailed);
  //   }, 5000);

  // }, [dispatch])

  return (
    <>
      <Admintopnav />
      <div className=" d-flex">
        <div className=" sidenavholder d-none d-xl-block col-lg-2">
          <Adminsidenav />
        </div>
        <div className=" outletdivholder px-4 py-3 col-12 col-xl-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admindashboard;
