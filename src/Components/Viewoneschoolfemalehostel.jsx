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

      const response = await axios.post("https://fuoye-room-backend.onrender.com/user/api/payforfemaleschoolhostel", {
        email: applicationData.email,
        amount: applicationData.rent_amount,
        hostel_id: applicationData.hostel_id,
        bunker_id: applicationData.bunker_id,
        matric_number: applicationData.matric_number,
      });

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

        <div className="col-11 mx-auto rounded-2 todisplayoneroominadmin">
          <p className="text-capitalize fs-4 p-3 fw-bold mb-0 oneroomdetailsheader d-flex justify-content-between align-items-center">
            <span>Room Number: {allschoolfemalehostel[id].roomNumber}</span>
            <span className="fs-6">
              Availability:{" "}
              {allschoolfemalehostel[id].availability
                ? "Available"
                : "Not Available"}
            </span>
          </p>

          <div className="bodydetailsoneroom text-capitalize fs-6 p-3 fw-bold mb-0">
            <p className="mb-0 fs-6">
              Bunker Space: {allschoolfemalehostel[id].bunkerSpace}
            </p>
            <p className="mb-0 fs-6">Rent: ₦{allschoolfemalehostel[id].rent}</p>
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


