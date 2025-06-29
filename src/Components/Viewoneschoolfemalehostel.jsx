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
  fetchUpdatedAllschoolfemalehosteldata,
  fetchingAllschoolfemalehostelFailed,
  fetchingAllschoolfemalehostelSuccessful,
  fetchingAllschoolfemalehostel,
} from "./Redux/Allschoolfemalehostel";

const Viewoneschoolfemalehostel = () => {
  const [loading, setloading] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedBunker, setSelectedBunker] = useState(null);

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
    console.log(allschoolfemalehostel[id]);
  }, []);

  const handleBunkerClick = (bunker) => {
    setSelectedBunker(bunker);
  };

  const handleApply = async () => {
    console.log(userdata);

    if (!selectedBunker || !userdata?.ifusermatricnumber) return;

    // Check if the user is female
    if (userdata.ifusermatricnumber.gender !== "female") {
      alert("Only female students can apply for this hostel.");
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
        hostel_type: "school female hostel",
        rent_amount: allschoolfemalehostel[id].rent,
        bunker_id: selectedBunker.id,
        hostel_id: allschoolfemalehostel[id]._id,
        email: userdata.ifusermatricnumber.email, // Required for Paystack
      };

      console.log(applicationData);

      const response = await axios.post(
        "https://fuoye-room-backend.onrender.com/user/api/payforfemaleschoolhostel",
        {
          email: applicationData.email,
          amount: applicationData.rent_amount,
          hostel_id: applicationData.hostel_id,
          bunker_id: applicationData.bunker_id,
          matric_number: applicationData.matric_number,
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
  return (
    <>
      {/* loading  */}

      {loading && (
        <div className="looder_body">
          <span className="loader"></span>
        </div>
      )}

      {isFetchingAllschoolfemalehostel ? (
        // Display loader while fetching
        <div className="col 12">
          <span className=" fs-6 fst-italic fw-bold text-capitalize text-center text-danger">
            {" "}
            loading.....{" "}
          </span>
        </div>
      ) : (
        <section>
          <h3 className="text-capitalize text-center fw-bold">
            school female hostel
          </h3>
          <hr />
          <p className="fs-6 fw-semibold fst-italic">
            <span className="fw-bold">Note:</span> Select your preferred
            <span className="fw-bold"> bunker</span> and complete the
            <span className="fw-bold"> required payment</span> to apply.
          </p>

          {/*  */}
          <div
            className="bg-cover col-11 m-auto bg-center flex flex-col mb-5 justify-end overflow-hidden bg-white  testingnewcompo "
            style={{}}
          >
            <div className="flex p-4 testingnewcompodiv">
              <p className=" text-light fw-bold fs-4 m-0">
                <span>Room Number: {allschoolfemalehostel[id].roomNumber}</span>
              </p>
            </div>
          </div>

          {/*  */}

          <div className="col-11 mx-auto rounded-2 todisplayoneroominadmin">
            <p className="text-capitalize fs-4 p-3 fw-bold mb-0 oneroomdetailsheader d-flex justify-content-between align-items-center">
              <span>Room details </span>
              {/* <span className="fs-6">
                Availability:{" "}
                {allschoolfemalehostel[id].availability
                  ? "Available"
                  : "Not Available"}
              </span> */}
            </p>

            <div className="bodydetailsoneroom text-capitalize fs-6 p-3 fw-bold mb-0">
              <p className="mb-0 fs-6">
                Bunker Space: {allschoolfemalehostel[id].bunkerSpace}
              </p>
              <p className="mb-0 fs-6">
                Rent: ₦{allschoolfemalehostel[id].rent}
              </p>
              <p className="mb-0 fs-5 mt-2 mb-2">Bunker Details</p>

              <div className="d-flex flex-wrap">
                {allschoolfemalehostel[id].bunkerDetails.map((item, index) => (
                  <div
                    key={index}
                    className="col-12 col-md-6 col-lg-4 my-1"
                    data-bs-toggle="modal"
                    data-bs-target={
                      item.occupant ? "#notVacantModal" : "#applyModal"
                    }
                    onClick={() => handleBunkerClick(item)}
                  >
                    <div className="col-11 mx-auto rounded-2 showingoneuserforroom p-2">
                      <p>Bunker: {item.id}</p>
                      <p>Occupant: {item.occupant || "Vacant"}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2 className=" fw-bold  m-auto mb-3 fs-5 mt-5">Amenities</h2>
          <div className=" d-flex justify-content-evenly  align-items-center flex-wrap">
            <div className="  col-11 col-md-4 my-3">
              <div className=" d-flex p-3 rounded-3 amenitiesholdernew col-11 m-auto text-light fw-medium fs-6">
                <div
                  className="text-[#111518]"
                  data-icon="WifiHigh"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M140,204a12,12,0,1,1-12-12A12,12,0,0,1,140,204ZM237.08,87A172,172,0,0,0,18.92,87,8,8,0,0,0,29.08,99.37a156,156,0,0,1,197.84,0A8,8,0,0,0,237.08,87ZM205,122.77a124,124,0,0,0-153.94,0A8,8,0,0,0,61,135.31a108,108,0,0,1,134.06,0,8,8,0,0,0,11.24-1.3A8,8,0,0,0,205,122.77Zm-32.26,35.76a76.05,76.05,0,0,0-89.42,0,8,8,0,0,0,9.42,12.94,60,60,0,0,1,70.58,0,8,8,0,1,0,9.42-12.94Z"></path>
                  </svg>
                </div>
                <p className="  m-0 ms-3">Free Wi-Fi</p>
              </div>
            </div>
            <div className="  col-11 col-md-4 my-3">
              <div className=" d-flex p-3 rounded-3 amenitiesholdernew col-11 m-auto text-light fw-medium fs-6">
                <div
                  className="text-[#111518]"
                  data-icon="Wind"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M184,184a32,32,0,0,1-32,32c-13.7,0-26.95-8.93-31.5-21.22a8,8,0,0,1,15-5.56C137.74,195.27,145,200,152,200a16,16,0,0,0,0-32H40a8,8,0,0,1,0-16H152A32,32,0,0,1,184,184Zm-64-80a32,32,0,0,0,0-64c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C105.74,60.73,113,56,120,56a16,16,0,0,1,0,32H24a8,8,0,0,0,0,16Zm88-32c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C193.74,92.73,201,88,208,88a16,16,0,0,1,0,32H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z"></path>
                  </svg>
                </div>
                <p className="  m-0 ms-3">Air Conditioning</p>
              </div>
            </div>
            <div className="  col-11 col-md-4 my-3">
              <div className=" d-flex p-3 rounded-3 amenitiesholdernew col-11 m-auto text-light fw-medium fs-6">
                <div
                  className="text-[#111518]"
                  data-icon="Lock"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path>
                  </svg>
                </div>
                <p className="  m-0 ms-3">Lockers</p>
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
              <h5 className="modal-title">Apply for Bunker</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Do you want to apply for this bunker?</p>
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
              <p>Sorry, this bunker is already occupied.</p>
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

export default Viewoneschoolfemalehostel;
