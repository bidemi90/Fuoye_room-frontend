import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import profiimg from "../assets/proimg.png"

import {
  fetchUpdatedalluserdata,
  fetchingalluser,
  fetchingalluserFailed,
  fetchingalluserSuccessful,
} from "./Redux/alluserdata";

const Adminviewoneuser = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetchingalluser, alluser, isFetchingalluserFailed } = useSelector(
    (state) => state.alluserdata
  );

  useEffect(() => {
    console.log(alluser[id]);
  }, []);

  return (
    <>
      <section>
        <div className=" col-12 col-lg-10 col-xl-8 mx-auto d-md-flex  align-items-center adminshowingoneuser rounded-3 overflow-hidden mb-3">
          <div className=" col-12 col-md-4">
            <img
              className=" img-fluid w-100"
              src={profiimg}
              alt="..."
            />
          </div>
          <div className=" ms-3 pt-3">
            <p className=" text-capitalize ">
              <span className=" fw-semibold">matric number:</span>{" "}
              {alluser[id].matric_number}
            </p>
            <p className=" text-capitalize ">
              <span className=" fw-semibold">email address:</span>{" "}
              {alluser[id].email}
            </p>
            <p className=" text-capitalize ">
              <span className=" fw-semibold">gender:</span> {alluser[id].gender}
            </p>
            <p className=" text-capitalize ">
              <span className=" fw-semibold">room type:</span> {alluser[id].currentRoomType}
            </p>
          </div>
        </div>
        <div className=" col-12 col-lg-10 col-xl-8 mx-auto  adminshowingoneuserroomdetails rounded-3 overflow-hidden p-3">
          <p className=" text-capitalize ">
            <span className=" fw-bold fs-5">room details:</span>{" "}
            {alluser[id].roomDetails}
          </p>
        </div>
       
      </section>
    </>
  );
};

export default Adminviewoneuser;
