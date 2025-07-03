import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { VscDiffAdded } from "react-icons/vsc";

import {
  featchinguser,
  featchinguserfailed,
  featchinguserSuccessful,
  fetchUpdatedUserData,
} from "./Redux/userdata";

import {
  fetchUpdatedAllprivatemalehosteldata,
  fetchingAllprivatemalehostel,
  fetchingAllprivatemalehostelFailed,
  fetchingAllprivatemalehostelSuccessful,
} from "./Redux/Allprivatemalehostel";

const Privatemalehostel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
    (state) => state.userdata
  );

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

        <div className=" mb-2  p-1  ">
          <p className=" m-0  smalltextnote fst-italic fw-bold font">
            <span className="  text-uppercase fs-6">note</span>:{" "}
            <span className=" text-capitalize fs-6 fw-bold">
              numbers of active room:
            </span>{" "}
            is the number of the room available in a buliding <br />
          </p>
        </div>

        <div className=" d-flex flex-wrap justify-content-center">
          {allprivatemalehostel.map((item, index) => (
            <div
              className="oneschoolmaleroom m-auto mx-md-0 col-6  col-md-5  col-lg-4 mt-3 mb-3"
              key={index}
            >
              <div className=" m-auto rounded-3 contentofoneschoolroom  overflow-hidden col-11 ">
                <img
                  className="card-img-top"
                  src={item.img_array}
                  alt="Title"
                />

                <div className=" col-11  rounded-3 p-2 d-block d-md-flex flex-column justify-content-evenly">
                  <div className=" textinonebuilding  col-12    pe-1 me-1 ">
                    <p className=" fs-6 mb-1 onelinetext text-capitalize">
                      building name:{" "}
                      <span className=" text-capitalize fs-6 fw-bold">
                        {item.building_name}
                      </span>{" "}
                    </p>
                    <p className=" fs-6 mb-1 onelinetext text-capitalize">
                      building address:{" "}
                      <span className=" text-capitalize fs-6 fw-bold">
                        {item.building_address}
                      </span>{" "}
                    </p>
                    <p className=" fs-6 mb-1 onelinetext text-capitalize d-none d-md-block">
                      numbers of active room:{" "}
                      <span className=" text-capitalize fs-6 fw-bold">
                        {item.room_count}
                      </span>{" "}
                    </p>
                    <p className=" fs-6 mb-1 onelinetext text-capitalize">
                      rent per room :{" "}
                      <span className=" text-capitalize fs-6 fw-bold">
                        {" "}
                        ₦ {item.rent}
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" m-auto col-11 mt-4">
                <Link
                  to={`/dashboard/check_one_privatemale_hostel/${index}`}
                  className=" Linkforsidenav p-2 px-3 rounded-1 fw-bold my-2"
                >
                  {" "}
                  view buliding
                </Link>
              </div>{" "}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Privatemalehostel;
