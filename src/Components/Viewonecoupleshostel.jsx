import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  featchinguser,
  featchinguserfailed,
  featchinguserSuccessful,
  fetchUpdatedUserData,
} from "./Redux/userdata";

import {
  fetchUpdatedAllcoupleshosteldata,
  fetchingAllcoupleshostel,
  fetchingAllcoupleshostelFailed,
  fetchingAllcoupleshostelSuccessful,
} from "./Redux/Allcoupleshostel";

const Viewonecoupleshostel = () => {
  const { id } = useParams();
  console.log(id);

  const [selectedroom, setSelectedroom] = useState(null);

    const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
      (state) => state.userdata
    );

  const {
    isFetchingAllcoupleshostel,
    allcoupleshostel,
    isFetchingAllcoupleshostelFailed,
  } = useSelector((state) => state.Allcoupleshostel);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(allcoupleshostel);
    console.log(allcoupleshostel[id]);
  }, []);

  const handleBunkerClick = (roomdetails) => {
    setSelectedroom(roomdetails);
    console.log(roomdetails);
  };

  const handleApply = async () => {
    console.log(userdata);

    if (!selectedroom || !userdata?.ifusermatricnumber) return;

    // Check if the user already has a room
    if (userdata.ifusermatricnumber.roomDetails.length !== 0) {
      alert("You already have a room. You cannot apply for another.");
      return;
    }

    try {
      // Proceed with application and payment
      const applicationData = {
        matric_number: userdata.ifusermatricnumber.matric_number,
        hostel_type: "private couples hostel",
        rent_amount: allcoupleshostel[id].rent,
        room_id: selectedroom.room_id,
        privatecoupleshostel_id: allcoupleshostel[id]._id,
        email: userdata.ifusermatricnumber.email, // Required for Paystack
        subaccount: allcoupleshostel[id].subaccount, // Subaccount for payment split
      };

      console.log(applicationData);

      const response = await axios.post(
        "http://localhost:5000/user/api/payforcouplesprivatehostel",
        {
          email: applicationData.email,
          amount: applicationData.rent_amount,
          privatecoupleshostel_id: applicationData.privatecoupleshostel_id,
          room_id: applicationData.room_id,
          matric_number: applicationData.matric_number,
          subaccount: applicationData.subaccount,
        }
      );

      if (response.data && response.data.data.authorization_url) {
        window.location.href = response.data.data.authorization_url; // Redirect to Paystack
      }
    } catch (error) {
      console.error("Error applying for room", error);
    }
  };

  return (
    <>
      <section>
        <h3 className=" text-capitalize text-center fw-bold ">
          couples hostel
        </h3>
        <hr />{" "}
        <div className=" d-flex justify-content-evenly oneprivatehouseholder flex-wrap ">
          <div className=" col-12 col-lg-4 d-flex justify-content-center align-items-center">
            <img
              className="  oneprivatehouseholderimg"
              src={allcoupleshostel[id].img_array}
              alt=""
            />
          </div>
          <div className=" ms-3 col-12 col-lg-6  pt-3 ">
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">building name:</span>{" "}
              {allcoupleshostel[id].building_name}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">building address:</span>{" "}
              {allcoupleshostel[id].building_address}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">
                numbers of active room:
              </span>{" "}
              {allcoupleshostel[id].room_count}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold"> rent per room :</span>₦{" "}
              {allcoupleshostel[id].rent}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">
                {" "}
                one room capacity:
              </span>{" "}
              {allcoupleshostel[id].one_room_capacity} per room
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">
                {" "}
                room description :
              </span>{" "}
              {allcoupleshostel[id].room_description}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold"> hostel rules :</span>{" "}
              {allcoupleshostel[id].rules}
            </p>
          </div>
        </div>
        <br />
        <hr />
        <div className=" mb-2  p-1  ">
          <p className=" m-0  smalltextnote fst-italic fw-bold font">
            <span className=" text-capitalize fs-6">Checkbox behavior</span>: If
            a checkbox is checked, it means that the corresponding room is
            occupied. If it's unchecked, the room is unoccupied.
          </p>
        </div>
        <div className=" d-flex flex-wrap ">
          {allcoupleshostel[id].rooms.map((item, index) => (
            <div className="col-6 col-md-4 col-lg-3 my-2" key={index}>
              <div
                data-bs-toggle="modal"
                data-bs-target={
                  item.occupant ? "#notVacantModal" : "#applyModal"
                }
                onClick={() => handleBunkerClick(item)}
                className="oneprivatehouseholderroom d-flex p-2 col-11 rounded justify-content-evenly align-items-center"
              >
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

      {/* Modal for Applying */}
      <div className="modal fade" id="applyModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header modalbgcolorchange">
              <h5 className="modal-title">Apply for room</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Do you want to apply for this room?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleApply}
                data-bs-dismiss="modal"
              >
                Yes, Apply
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Not Vacant */}
      <div
        className="modal fade"
        id="notVacantModal"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header modalbgcolorchange">
              <h5 className="modal-title">Room Not Vacant</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Sorry, this room is already occupied.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewonecoupleshostel;
