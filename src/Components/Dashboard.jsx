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
      .get("https://fuoye-room-backend.onrender.com/user/verifyuserondashbord", {
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
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
