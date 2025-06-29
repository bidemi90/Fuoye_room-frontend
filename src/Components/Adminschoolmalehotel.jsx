import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { VscDiffAdded } from "react-icons/vsc";

import {
  fetchUpdatedAllschoolmalehosteldata,
  fetchingAllschoolmalehostelFailed,
  fetchingAllschoolmalehostelSuccessful,
  fetchingAllschoolmalehostel,
} from "./Redux/Allschoolmalehostel";

const Adminschoolmalehotel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 
  const {
    isFetchingAllschoolmalehostel,
    allschoolmalehostel,
    isFetchingAllschoolmalehostelFailed,
  } = useSelector((state) => state.Allschoolmalehostel);

  useEffect(() => {
    console.log(allschoolmalehostel);
  }, []);

  return (
    <>
      <section>
        <p className=" m-0 fs-3 fw-bold text-capitalize text-center">
          school male hostel list
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
            {allschoolmalehostel.map((item, index) => (
              <div
                className="oneschoolmaleroom my-2 col-12 col-md-5  col-lg-4"
                key={index}
              >
                <div className=" col-11 contentofoneschoolroom rounded-3 p-2 d-flex justify-content-evenly">
                  <div className=" textinoneschoolroom   pe-1 me-1 ">
                    <p className=" m-0 fs-5 fw-semibold text-capitalize">
                      room no: {item.roomNumber}
                    </p>
                    <p className=" m-0 fw-semibold text-capitalize smalltextbunkernumber">
                      no of bunkers: {item.bunkerSpace}
                    </p>
                  </div>
                  <div className=" w-75 d-flex flex-wrap align-items-start">
                    {item.bunkerDetails.map((item, index) => (
                      <div
                        className=" d-flex justify-content-evenly align-items-center"
                        key={index}
                      >
                        <p className=" m-0 text-uppercase fw-bold">{item.id}</p>
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
                <div className=" mt-4">
                    <Link
                      className=" buttonforlog  px-3 py-2 rounded-2"
                      to={`/management_page/manageoneschoolmaleroom/${index}`}
                    >
                      View
                    </Link>
                  </div>
              </div>
            ))}
          </section>
        </div>
      </section>
      <Link to="/management_page/addschoolmaleroom">
      <button className=' flotbuttonspecial text-capitalize fs-3'>
       <VscDiffAdded/>
     </button>
      </Link>
    </>
  );
};

export default Adminschoolmalehotel;
