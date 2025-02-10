
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
  fetchUpdatedAllmixedhosteldata,
  fetchingAllmixedhostel,
  fetchingAllmixedhostelFailed,
  fetchingAllmixedhostelSuccessful,
} from "./Redux/Allmixedhostel";

const Viewonemixedhostel = () => {
  const { id } = useParams();
  console.log(id);

  const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
    (state) => state.userdata
  );

  const {
    isFetchingAllmixedhostel,
    allmixedhostel,
    isFetchingAllmixedhostelFailed,
  } = useSelector((state) => state.Allmixedhostel);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(allmixedhostel);
    console.log(allmixedhostel[id]);
  }, []);
  return (
    <>
      <section>
        <h3 className=" text-capitalize text-center fw-bold ">
          mixed gender hostel
        </h3>
        <hr />{" "}

        <div className=" d-flex justify-content-evenly oneprivatehouseholder flex-wrap ">
          <div className=" col-12 col-lg-4 d-flex justify-content-center align-items-center">
            <img
              className="  oneprivatehouseholderimg"
              src={allmixedhostel[id].img_array}
              alt=""
            />
          </div>
          <div className=" ms-3 col-12 col-lg-6  pt-3 ">
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">building name:</span>{" "}
              {allmixedhostel[id].building_name}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">building address:</span>{" "}
              {allmixedhostel[id].building_address}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">
                numbers of active room:
              </span>{" "}
              {allmixedhostel[id].room_count}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold"> rent per room :</span>₦{" "}
              ₦ {allmixedhostel[id].rent}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">
                {" "}
                one room capacity:
              </span>{" "}
              {allmixedhostel[id].one_room_capacity} per room
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">
                {" "}
                room description :
              </span>{" "}
              {allmixedhostel[id].room_description}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold"> hostel rules :</span>{" "}
              {allmixedhostel[id].rules}
            </p>
          </div>
        </div>
        <br />
        <hr />
        <p className=" m-0 text-capitalize fw-bold ">
        Checkbox behavior: If a checkbox is checked, it means that the corresponding room is occupied. If it's unchecked, the room is unoccupied.
        </p>
        <div className=" d-flex flex-wrap ">
          {allmixedhostel[id].rooms.map((item, index) => (
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

export default Viewonemixedhostel;
