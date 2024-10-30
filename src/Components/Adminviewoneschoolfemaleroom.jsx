import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  fetchUpdatedAllschoolfemalehosteldata,
  fetchingAllschoolfemalehostelFailed,
  fetchingAllschoolfemalehostelSuccessful,
  fetchingAllschoolfemalehostel,
} from "./Redux/Allschoolfemalehostel";

const Adminviewoneschoolfemaleroom = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

 

  const {
    isFetchingAllschoolfemalehostel,
    allschoolfemalehostel,
    isFetchingAllschoolfemalehostelFailed,
  } = useSelector((state) => state.Allschoolfemalehostel);

  useEffect(() => {
    console.log(allschoolfemalehostel);
    console.log(allschoolfemalehostel[id]);
  }, []);

  return (
    <>
      <section>
        <p className=" fs-6 fw-semibold fst-italic">
          Note: You can update the details, add occupants, adjust the price, and
          change the availability status.
        </p>

        <div className=" col-11 mx-auto rounded-2 todisplayoneroominadmin">
          <p className=" text-capitalize fs-4 p-3 fw-bold mb-0 oneroomdetailsheader d-flex justify-content-between align-items-center">
            <span> room number : {allschoolfemalehostel[id].roomNumber}</span>
            <span className=" fs-6">
              Availability :{" "}
              {allschoolfemalehostel[id].availability
                ? "Available"
                : "Not Available"}
            </span>
          </p>
          <div className=" bodydetailsoneroom text-capitalize fs-6 p-3 fw-bold mb-0 ">
            <p className=" mb-0 fs-6">
              bunker Space :{allschoolfemalehostel[id].bunkerSpace}
            </p>
            <p className=" mb-0 fs-6">
              rent :{allschoolfemalehostel[id].rent}₦
            </p>

            <p className=" mb-0 fs-5 mt-2 mb-2">bunkerDetails</p>

            <div className=" d-flex flex-wrap">
              {allschoolfemalehostel[id].bunkerDetails.map((item, index) => (
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
        <div className=" text-center mt-4">
          <button className=" buttonforlog  text-capitalize px-4 py-2 rounded-2">
            edit details
          </button>
        </div>
      </section>
    </>
  );
};

export default Adminviewoneschoolfemaleroom;
