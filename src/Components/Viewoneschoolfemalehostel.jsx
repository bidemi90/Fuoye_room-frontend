
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

const Viewoneschoolfemalehostel = () => {
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
      <section><h3 className=" text-capitalize text-center fw-bold ">
      school female hostel
        </h3>
        <hr />{" "}
        <p className="fs-6 fw-semibold fst-italic">
  <span className="fw-bold">Note:</span> Select your preferred 
  <span className="fw-bold"> bunker</span> and complete the 
  <span className="fw-bold"> required payment</span> to apply.
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
              rent :₦{allschoolfemalehostel[id].rent}
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
       
      </section>
    </>
  );
};

export default Viewoneschoolfemalehostel;
