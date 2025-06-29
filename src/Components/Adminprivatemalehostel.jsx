import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { VscDiffAdded } from "react-icons/vsc";

import {
  fetchUpdatedAllprivatemalehosteldata,
  fetchingAllprivatemalehostel,
  fetchingAllprivatemalehostelFailed,
  fetchingAllprivatemalehostelSuccessful,
} from "./Redux/Allprivatemalehostel";

const Adminprivatemalehostel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    isFetchingAllprivatemalehostel,
    allprivatemalehostel,
    isFetchingAllprivatemalehostelFailed,
  } = useSelector((state) => state.Allprivatemalehostel);

  useEffect(() => {
    console.log(allprivatemalehostel);
  }, []);

  return (
    <>
      <section>
        <p className=" onelinetext  text-capitalize text-center fw-bold fs-4">
          private male only hostel
        </p>
        <div className=" d-flex flex-wrap justify-content-center">
          {allprivatemalehostel.map((item, index) => (
            <div className=" col-12 col-md-6 ">
              <div className=" oneprivateroomholder p-2 rounded-2 col-11">
                <div className=" d-flex ">
                  <div className=" col-4 d-flex justify-content-center align-items-center ">
                    <img
                      className=" img-fluid my-auto mx-auto"
                      src={item.img_array}
                      alt=""
                    />
                  </div>
                  <div className=" ms-3 col-8">
                    <p className=" onelinetext text-capitalize">
                      <span className=" text-capitalize fs-6 fw-bold">
                        building name:
                      </span>{" "}
                      {item.building_name}
                    </p>
                    <p className=" onelinetext text-capitalize">
                      <span className=" text-capitalize fs-6 fw-bold">
                        building address:
                      </span>{" "}
                      {item.building_address}
                    </p>
                    <p className=" onelinetext text-capitalize">
                      <span className=" text-capitalize fs-6 fw-bold">
                        numbers of active room:
                      </span>{" "}
                      {item.room_count}
                    </p>
                    <p className=" onelinetext text-capitalize">
                      <span className=" text-capitalize fs-6 fw-bold">
                        {" "}
                        rent per room :₦
                      </span>{" "}
                      {item.rent}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" py-3">
                <Link
                  to={`/management_page/manageoneprivatemaleroom/${index}`}
                  className=" Linkforsidenav p-2 px-3 rounded-1 fw-bold my-2"
                >
                  {" "}
                  view buliding
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Link to="/management_page/addprivatemaleroom">
        <button className=" flotbuttonspecial text-capitalize fs-3">
          <VscDiffAdded />
        </button>
      </Link>
    </>
  );
};

export default Adminprivatemalehostel;
