import React, { useEffect } from "react";
import { ImSearch } from "react-icons/im";
import profiimg from "../assets/proimg.png"
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  fetchUpdatedalluserdata,
  fetchingalluser,
  fetchingalluserFailed,
  fetchingalluserSuccessful,
} from "./Redux/alluserdata";

const Adminalluser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetchingalluser, alluser, isFetchingalluserFailed } = useSelector(
    (state) => state.alluserdata
  );

  useEffect(() => {
    console.log(isFetchingalluser);
    console.log(alluser);
    console.log(isFetchingalluserFailed);
  }, []);

  return (
    <>
      <section>
        <div className=" position-sticky top-0 searchbarholder">
          <div class=" p-2 rounded-2 d-flex justify-content-between searchbar">
            <input
              type="text"
              name=""
              className=" rounded-2 p-2 searchinputindiv"
              id=""
              placeholder=" Search with matric number "
              aria-describedby="helpId"
            />
            <button className=" searchbuttonindiv p-1 rounded-2  fw-bold Linkfornav fs-5 px-3">
              <ImSearch />
            </button>
          </div>
        </div>

        <div className=" w-100 d-flex flex-wrap justify-content-between align-items-center">
          {alluser.map((item, index) => (
            <div key={index} className=" col-12 col-md-6 my-2 col-xl-4">
              <div className="col-11 m-auto rounded-2 mt-2 p-3 oneuserholder">
                <div className=" col-12 d-flex justify-content-between align-items-start">
                  <div className=" col-4 d-flex  ">
                    <img
                      className=" img-fluid  col-11"
                      src={profiimg}
                      alt="..."
                    />
                  </div>
                  <div className=" col-8">
                    <p class="card-title m-0  text-capitalize onelinetext fs-6">
                      {" "}
                      <span className=" fw-bold">mat No</span> :{" "}
                      {item.matric_number}
                    </p>

                    <p class="m-0 card-text text-capitalize onelinetext fs-6">
                      <span className=" fw-bold">email</span> :{item.email}
                    </p>
                    <p class="m-0 card-text text-capitalize fs-6">
                      <span className=" fw-bold">gender</span> : {item.gender}
                    </p>
                  </div>
                </div>
                <div className=" d-flex justify-content-end">
                  <Link
                    to={`/management_page/manage_one_user/${index}`}
                    className=" d-flex justify-content-evenly align-items-center Linkfornav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 rounded-3 fw-bold mt-2 mx-2"
                  >
                    view profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Adminalluser;
