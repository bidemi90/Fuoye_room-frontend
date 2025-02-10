import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


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

const Viewonemaleprivatemalehostel = () => {
  const { id } = useParams();
  console.log(id);

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
    console.log(allprivatemalehostel[id]);
  }, []);
  return (
    <>
      <section>
      <div className=" mb-2  p-1  ">
            <p className=" m-0  smalltextnote fst-italic fw-bold font">
              <span className=" text-capitalize fs-6">Checkbox behavior</span>:
              If a checkbox is checked, it means that the corresponding room
              (either top or bottom) is occupied. If it's unchecked, the room is
              unoccupied.
            </p>
          </div>

        <div className=" d-flex justify-content-evenly oneprivatehouseholder flex-wrap ">
          <div className=" col-12 col-lg-4 d-flex justify-content-center align-items-center">
            <img
              className="  oneprivatehouseholderimg"
              src={allprivatemalehostel[id].img_array}
              alt=""
            />
          </div>
          <div className=" ms-3 col-12 col-lg-6  pt-3 ">
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">building name:</span>{" "}
              {allprivatemalehostel[id].building_name}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">building address:</span>{" "}
              {allprivatemalehostel[id].building_address}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">
                numbers of active room:
              </span>{" "}
              {allprivatemalehostel[id].room_count}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold"> rent per room :</span>₦{" "}
              {allprivatemalehostel[id].rent}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">
                {" "}
                one room capacity:
              </span>{" "}
              {allprivatemalehostel[id].one_room_capacity} per room
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">
                {" "}
                room description :
              </span>{" "}
              {allprivatemalehostel[id].room_description}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold"> hostel rules :</span>{" "}
              {allprivatemalehostel[id].rules}
            </p>
          </div>
        </div>
        <br />
        <hr />
       
        <div className=" d-flex flex-wrap ">
          {allprivatemalehostel[id].rooms.map((item, index) => (
            <div className="col-6 col-md-4 col-lg-3 my-2" key={index}>
              <div className="oneprivatehouseholderroom d-flex p-2 col-11 rounded justify-content-evenly align-items-center">
                <p className="m-0 text-capitalize fs-5 fw-bold">
                  Room: {item.room_id}
                </p>
                <input
                  type="checkbox"
                  checked={item.availability} // Checked if room is available
                  name=""
                  id=""
                  readOnly // Ensure it's not modified if it's meant to be display-only
                />
              </div>
            </div>
          ))}
        </div>

      
      </section>
    </>
  );
};

export default Viewonemaleprivatemalehostel;
