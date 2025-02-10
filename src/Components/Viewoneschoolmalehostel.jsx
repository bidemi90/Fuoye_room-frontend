import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  fetchUpdatedAllschoolmalehosteldata,
  fetchingAllschoolmalehostelFailed,
  fetchingAllschoolmalehostelSuccessful,
  fetchingAllschoolmalehostel,
} from "./Redux/Allschoolmalehostel";

const Viewoneschoolmalehostel = () => {
  const { id } = useParams();
  console.log(id);

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

  useEffect(() => {
    console.log(allschoolmalehostel);
    console.log(allschoolmalehostel[id]);
  }, []);

  return (
    <>
      <section>
        <h3 className=" text-capitalize text-center fw-bold ">
          school male hostel
        </h3>
        <hr /> <p className=" fs-6 fw-semibold fst-italic">Note:</p>
        <div className=" col-11 mx-auto rounded-2 todisplayoneroominadmin">
          <p className=" text-capitalize fs-4 p-3 fw-bold mb-0 oneroomdetailsheader d-flex justify-content-between align-items-center">
            <span> room number : {allschoolmalehostel[id].roomNumber}</span>
            <span className=" fs-6">
              Availability :{" "}
              {allschoolmalehostel[id].availability
                ? "Available"
                : "Not Available"}
            </span>
          </p>
          <div className=" bodydetailsoneroom text-capitalize fs-6 p-3 fw-bold mb-0 ">
            <p className=" mb-0 fs-6">
              bunker Space :{allschoolmalehostel[id].bunkerSpace}
            </p>
            <p className=" mb-0 fs-6">rent : ₦{allschoolmalehostel[id].rent}</p>

            <p className=" mb-0 fs-5 mt-2 mb-2">bunkerDetails</p>

            <div className=" d-flex flex-wrap">
              {allschoolmalehostel[id].bunkerDetails.map((item, index) => (
                <div key={index} className=" col-12 col-md-6 col-lg-4 my-1">
                  <div className=" col-11 mx-auto rounded-2 showingoneuserforroom p-2">
                    <p>bunker : {item.id}</p>
                    <p>occupant: {item.occupant} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
       
      </section>
    </>
  );
};

export default Viewoneschoolmalehostel;
