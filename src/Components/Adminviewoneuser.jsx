import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import profiimg from "../assets/proimg.png";

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
      {isFetchingalluser ? (
        // Display loader while fetching
        <div className="col 12">
          <span className=" fs-6 fst-italic fw-bold text-capitalize text-center text-danger">
            {" "}
            loading.....{" "}
          </span>
        </div>
      ) : (
        <section>
          <div className=" col-12 col-lg-10 col-xl-8 mx-auto d-md-flex  align-items-center adminshowingoneuser rounded-3 overflow-hidden mb-3">
            <div className=" col-12 col-md-4">
              <img
                className=" img-fluid w-100"
                src={
                  alluser[id].profileImage !== ""
                    ? alluser[id].profileImage
                    : profiimg
                }
                alt="..."
              />
            </div>
            <div className=" ms-3 pt-3">
              <p className=" text-capitalize fs-6 fw-semibold ">
                <span className=" fw-bold fs-5">matric number:</span>{" "}
                {alluser[id].matric_number}
              </p>
              <p className=" text-capitalize fs-6 fw-semibold ">
                <span className=" fw-bold fs-5">email address:</span>{" "}
                {alluser[id].email}
              </p>
              <p className=" text-capitalize fs-6 fw-semibold ">
                <span className=" fw-bold fs-5">gender:</span>{" "}
                {alluser[id].gender}
              </p>
              <p className=" text-capitalize fs-6 fw-semibold ">
                <span className=" fw-bold fs-5">room type: </span>
                {alluser[id].roomDetails && alluser[id].roomDetails.length > 0
                  ? alluser[id].roomDetails[0].hostel_type
                  : "user does not have a room currently"}
              </p>
              <small class="  text-light text-capitalize">
                last update: {alluser[id].updatedAt}{" "}
              </small>
            </div>
          </div>

          <div
            className={
              alluser[id].roomDetails && alluser[id].roomDetails.length > 0
                ? "d-none"
                : "col-12 col-lg-10 col-xl-8 mx-auto  adminshowingoneuserroomdetails rounded-3 overflow-hidden p-3"
            }
          >
            <p className=" text-capitalize fs-6 fw-semibold ">
              <p className=" fw-bold fs-5">room type: </p>

              <p className=" text-capitalize text-center fst-italic">
                user does not have a room currently
              </p>
            </p>
          </div>

          <div
            className={
              alluser[id].roomDetails && alluser[id].roomDetails.length > 0
                ? "col-12 col-lg-10 col-xl-8 mx-auto  adminshowingoneuserroomdetails rounded-3 overflow-hidden p-3"
                : "d-none"
            }
          >
            <p className=" text-capitalize ">
              <p className=" fw-bold fs-5">room details:</p>
              {/* school hostel details */}
              <div
                className={
                  alluser[id].roomDetails &&
                  alluser[id].roomDetails.length > 0 &&
                  ["male school hostel", "female school hostel"].includes(
                    alluser[id].roomDetails[0].hostel_type
                  )
                    ? "d-block"
                    : "d-none"
                }
              >
                <p className=" fs-5 text-capitalize text-center fw-bold text-text-uppercase text-decoration-underline">
                  {alluser[id].roomDetails && alluser[id].roomDetails.length > 0
                    ? alluser[id].roomDetails[0].hostel_type
                    : "user does not have a room currently"}
                </p>
                <p className=" fs-6 fw-semibold text-capitalize">
                  <span>hostel id: </span>
                  {alluser[id].roomDetails && alluser[id].roomDetails.length > 0
                    ? alluser[id].roomDetails[0].hostel_id
                    : "user does not have a room currently"}
                </p>
                <p className=" fs-6 fw-semibold text-capitalize">
                  <span> bunker id: </span>
                  {alluser[id].roomDetails && alluser[id].roomDetails.length > 0
                    ? alluser[id].roomDetails[0].bunker_id
                    : "user does not have a room currently"}
                </p>
                <p className=" fs-6 fw-semibold text-capitalize">
                  <span> room Number: </span>
                  {alluser[id].roomDetails && alluser[id].roomDetails.length > 0
                    ? alluser[id].roomDetails[0].roomNumber
                    : "user does not have a room currently"}
                </p>
              </div>
              {/* private hostel details */}

              <div
                className={
                  alluser[id].roomDetails &&
                  alluser[id].roomDetails.length > 0 &&
                  [
                    "private male hostel",
                    "private female hostel",
                    "private mixed hostel",
                    "private couples hostel",
                  ].includes(alluser[id].roomDetails[0].hostel_type)
                    ? "d-block"
                    : "d-none"
                }
              >
                <p className=" fs-5 text-capitalize text-center fw-bold text-text-uppercase text-decoration-underline">
                  {alluser[id].roomDetails && alluser[id].roomDetails.length > 0
                    ? alluser[id].roomDetails[0].hostel_type
                    : "user does not have a room currently"}
                </p>
                <p className=" fs-6 fw-semibold text-capitalize">
                  <span>hostel id: </span>
                  {alluser[id].roomDetails && alluser[id].roomDetails.length > 0
                    ? alluser[id].roomDetails[0].hostel_id
                    : "user does not have a room currently"}
                </p>
                <p className=" fs-6 fw-semibold text-capitalize">
                  <span> hostel name: </span>
                  {alluser[id].roomDetails && alluser[id].roomDetails.length > 0
                    ? alluser[id].roomDetails[0].hostel_name
                    : "user does not have a room currently"}
                </p>
                <p className=" fs-6 fw-semibold text-capitalize">
                  <span> room Number: </span>
                  {alluser[id].roomDetails && alluser[id].roomDetails.length > 0
                    ? alluser[id].roomDetails[0].roomNumber
                    : "user does not have a room currently"}
                </p>
              </div>
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Adminviewoneuser;
