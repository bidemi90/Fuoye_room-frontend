import React, { useEffect } from "react";

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
  

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/verifyuserondashbord", {
        headers: {
          Authorization: `Bearer ${userdata.token}`,
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
          navigate("/login");
        }
      });

      dispatch(fetchUpdatedAllschoolmalehosteldata())
      dispatch(fetchUpdatedAllschoolfemalehosteldata())
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
      <Topnav />
      <div className=" d-flex">
        <div className=" sidenavholder d-none d-xl-block col-lg-2">
          <Sidenav />
        </div>
        <div className=" outletdivholder px-4 py-3 col-12 col-xl-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
