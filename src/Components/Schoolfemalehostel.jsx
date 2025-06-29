import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import schoolHostelImage from "../assets/image0_large.jpg";

import {
  featchinguser,
  featchinguserfailed,
  featchinguserSuccessful,
  fetchUpdatedUserData,
} from "./Redux/userdata";

import {
  fetchUpdatedAllschoolfemalehosteldata,
  fetchingAllschoolfemalehostelFailed,
  fetchingAllschoolfemalehostelSuccessful,
  fetchingAllschoolfemalehostel,
} from "./Redux/Allschoolfemalehostel";

const Schoolfemalehostel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
    (state) => state.userdata
  );

  const {
    isFetchingAllschoolfemalehostel,
    allschoolfemalehostel,
    isFetchingAllschoolfemalehostelFailed,
  } = useSelector((state) => state.Allschoolfemalehostel);

  useEffect(() => {
    console.log(allschoolfemalehostel);
  }, []);

  return (
   <>
        <section>
          <p className=" m-0 fs-3 fw-bold text-capitalize text-center">
            school female hostel list
          </p>
          <div>
            <div className=" mb-2  p-1  ">
              <p className=" m-0  smalltextnote fst-italic fw-bold font">
                <span className=" text-capitalize fs-6">note</span>: Top bunkers:
                Beds A, C, E, G and, I represent the top bunk positions. <br />
                <span className=" text-capitalize fs-6">Checkbox behavior</span>:
                If a checkbox is checked, it means that the corresponding bunk
                (either top or bottom) is occupied. If it's unchecked, the bunk is
                unoccupied.
              </p>
            </div>
            <section className=" d-flex flex-wrap justify-content-between">
              {allschoolfemalehostel.map((item, index) => (
                <div
                  className="oneschoolfemaleroom m-auto mx-md-0 col-6  col-md-5  col-lg-4 mt-3 mb-3"
                  key={index}
                >
                  <div className=" m-auto rounded-3 contentofoneschoolroom  overflow-hidden col-11 ">
                    <img
                      className="card-img-top"
                      src={schoolHostelImage}
                      alt="Title"
                    />
  
                    <div className=" col-11  rounded-3 p-2 d-block d-md-flex justify-content-evenly">
                      <div className=" textinoneschoolroom  col-12 col-md-3   pe-1 me-1 ">
                        <p className=" m-0 fs-5 fw-semibold text-capitalize">
                          room no: {item.roomNumber}
                        </p>
                        <p className=" m-0 fw-semibold text-capitalize smalltextbunkernumber">
                          no of bunkers: {item.bunkerSpace}
                        </p>
                      </div>
                      <div className="  d-flex flex-wrap align-items-start">
                        {item.bunkerDetails.map((item, index) => (
                          <div
                            className=" d-flex justify-content-evenly align-items-center"
                            key={index}
                          >
                            <p className=" m-0 text-uppercase fw-bold">
                              {item.id}
                            </p>
                            <input
                              className="m-2"
                              type="checkbox"
                              name=""
                              id=""
                              checked={item.occupant !== null} // Checked if occupant is not null
                              readOnly // Prevent users from directly toggling it unless it's allowed
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className=" m-auto col-11 mt-4">
                    <Link
                      className=" buttonforlog  px-3 py-2 rounded-2"
                      to={`/dashboard/Viewoneschoolfemalehostel/${index}`}
                    >
                      View
                    </Link>
                  </div>{" "}
                </div>
              ))}
            </section>
          </div>
        </section>
      </>
  );
};

export default Schoolfemalehostel;
