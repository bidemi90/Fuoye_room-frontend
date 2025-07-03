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
  fetchUpdatedAllprivatemalehosteldata,
  fetchingAllprivatemalehostel,
  fetchingAllprivatemalehostelFailed,
  fetchingAllprivatemalehostelSuccessful,
} from "./Redux/Allprivatemalehostel";

import imageUrl2 from "../assets/image1_large.jpg";

const Viewonemaleprivatemalehostel = () => {
  const [loading, setloading] = useState(false);

  const { id } = useParams();
  console.log(id);

  const [selectedroom, setSelectedroom] = useState(null);

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

  const handleBunkerClick = (roomdetails) => {
    setSelectedroom(roomdetails);
    console.log(roomdetails);
  };

  const handleApply = async () => {
    console.log(userdata);

    if (!selectedroom || !userdata?.ifusermatricnumber) return;

    // Check if the user is male
    if (userdata.ifusermatricnumber.gender !== "male") {
      alert("Only male students can apply for this hostel.");
      return;
    }
    // Check if the user already has a room
    if (userdata.ifusermatricnumber.roomDetails.length !== 0) {
      alert("You already have a room. You cannot apply for another.");
      return;
    }

    try {
      // Proceed with application and payment
      setloading(true);

      const applicationData = {
        matric_number: userdata.ifusermatricnumber.matric_number,
        hostel_type: "private male hostel",
        rent_amount: allprivatemalehostel[id].rent,
        room_id: selectedroom.room_id,
        privatemalehostel_id: allprivatemalehostel[id]._id,
        email: userdata.ifusermatricnumber.email, // Required for Paystack
        subaccount: allprivatemalehostel[id].subaccount, // Subaccount for payment split
      };

      console.log(applicationData);

      const response = await axios.post(
        "https://fuoye-room-backend.onrender.com/user/api/payformaleprivatehostel",
        {
          email: applicationData.email,
          amount: applicationData.rent_amount,
          privatemalehostel_id: applicationData.privatemalehostel_id,
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
      setloading(false);
    }
  };
  const imageUrl = imageUrl2;

  return (
    <>
      {/* loading  */}

      {loading && (
        <div className="looder_body">
          <span className="loader"></span>
        </div>
      )}

      {isFetchingAllprivatemalehostel ? (
        // Display loader while fetching
        <div className="col 12">
          <span className=" fs-6 fst-italic fw-bold text-capitalize text-center text-danger">
            {" "}
            loading.....{" "}
          </span>
        </div>
      ) : (
        <section>
          {/*  */}
          <div
            className="bg-cover col-11 m-auto bg-center flex flex-col mb-5 justify-end overflow-hidden bg-white testingnewcompo2"
            style={{
              backgroundImage: `
        linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%),
        url(${
          allprivatemalehostel[id].img_array !== ""
            ? allprivatemalehostel[id].img_array
            : imageUrl
        })
    `,
            }}
          >
            <div className="flex p-4 testingnewcompodiv">
              <p className=" text-light fw-bold fs-4 m-0">
                <span className=" text-capitalize">
                  NAME: {allprivatemalehostel[id].building_name}
                </span>
              </p>
            </div>
          </div>
          {/*  */}

          <div className="oneprivatehouseholder">
           <div className=" p-2">
             <p className=" fs-4 fw-bold text-capitalize"> building details</p>
            <div className=" mb-2  p-1  ">
              <p className=" m-0  smalltextnote fst-italic fw-bold font">
                <span className=" text-capitalize">Checkbox behavior </span>: If
                a checkbox is checked, it means that the corresponding room is
                occupied. If it's unchecked, the room is unoccupied.
              </p>
            </div>
           </div>
            <div className=" d-flex oneprivatehouseholderbox flex-wrap  ">
              <div className="  oneprivatehouseholderbox1 p-2 col-12 col-md-4 ">
                <p className=" onelinetext text-capitalize fw-semibold ">
                  <span className=" text-uppercase fw-bold">
                    building name:
                  </span>{" "}
                  {allprivatemalehostel[id].building_name}
                </p>
                <p className=" onelinetext text-capitalize fw-semibold ">
                  <span className=" text-uppercase fw-bold">
                    building address:
                  </span>{" "}
                  {allprivatemalehostel[id].building_address}
                </p>
                <p className=" onelinetext text-capitalize fw-semibold ">
                  <span className=" text-uppercase fw-bold">
                    numbers of active room:
                  </span>{" "}
                  {allprivatemalehostel[id].room_count}
                </p>
                <p className=" onelinetext text-capitalize fw-semibold ">
                  <span className=" text-uppercase fw-bold">
                    {" "}
                    rent per room :
                  </span>
                  ₦ {allprivatemalehostel[id].rent}
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
                  <span className=" text-uppercase fw-bold">
                    {" "}
                    hostel rules :
                  </span>{" "}
                  {allprivatemalehostel[id].rules}
                </p>
              </div>

              <div className=" col-12 col-md-8 p-2">
                <div className=" d-flex flex-wrap ">
                  {allprivatemalehostel[id].rooms.map((item, index) => (
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
              </div>
            </div>
          </div>
        </section>
      )}

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

export default Viewonemaleprivatemalehostel;
