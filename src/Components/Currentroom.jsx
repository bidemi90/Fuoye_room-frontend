import React, { useState, useEffect } from "react";

import {
  featchinguser,
  featchinguserfailed,
  featchinguserSuccessful,
  fetchUpdatedUserData,
} from "./Redux/userdata";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import {
  fetchUpdatedAllschoolmalehosteldata,
  fetchingAllschoolmalehostelFailed,
  fetchingAllschoolmalehostelSuccessful,
  fetchingAllschoolmalehostel,
} from "./Redux/Allschoolmalehostel";

import {
  fetchUpdatedAllschoolfemalehosteldata,
  fetchingAllschoolfemalehostelFailed,
  fetchingAllschoolfemalehostelSuccessful,
  fetchingAllschoolfemalehostel,
} from "./Redux/Allschoolfemalehostel";

import {
  fetchUpdatedAllprivatemalehosteldata,
  fetchingAllprivatemalehostel,
  fetchingAllprivatemalehostelFailed,
  fetchingAllprivatemalehostelSuccessful,
} from "./Redux/Allprivatemalehostel";

import {
  fetchUpdatedAllprivatefemalehosteldata,
  fetchingAllprivatefemalehostel,
  fetchingAllprivatefemalehostelFailed,
  fetchingAllprivatefemalehostelSuccessful,
} from "./Redux/Allprivatefemalehostel";

import {
  fetchUpdatedAllmixedhosteldata,
  fetchingAllmixedhostel,
  fetchingAllmixedhostelFailed,
  fetchingAllmixedhostelSuccessful,
} from "./Redux/Allmixedhostel";

import {
  fetchUpdatedAllcoupleshosteldata,
  fetchingAllcoupleshostel,
  fetchingAllcoupleshostelFailed,
  fetchingAllcoupleshostelSuccessful,
} from "./Redux/Allcoupleshostel";

const Currentroom = () => {
  // const [email, setemail] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentuserroomdetails, setcurrentuserroomdetails] = useState(null);

  const { userdata } = useSelector((state) => state.userdata);
  const { allschoolmalehostel } = useSelector(
    (state) => state.Allschoolmalehostel
  );
  const { allschoolfemalehostel } = useSelector(
    (state) => state.Allschoolfemalehostel
  );
  const { allprivatemalehostel } = useSelector(
    (state) => state.Allprivatemalehostel
  );
  const { allprivatefemalehostel } = useSelector(
    (state) => state.Allprivatefemalehostel
  );
  const { allmixedhostel } = useSelector((state) => state.Allmixedhostel);
  const { allcoupleshostel } = useSelector((state) => state.Allcoupleshostel);

  const roomDetails = userdata?.ifusermatricnumber?.roomDetails || [];

  useEffect(() => {
    if (roomDetails.length > 0) {
      const hostelMap = {
        "male school hostel": allschoolmalehostel,
        "female school hostel": allschoolfemalehostel,
        "private male hostel": allprivatemalehostel,
        "private female hostel": allprivatefemalehostel,
        "private mixed hostel": allmixedhostel,
        "private couples hostel": allcoupleshostel,
      };

      const hostelType = roomDetails[0].hostel_type;
      if (hostelMap[hostelType]) {
        const foundRoom = hostelMap[hostelType].find(
          (element) => element._id === roomDetails[0].hostel_id
        );
        if (foundRoom) setcurrentuserroomdetails(foundRoom);
        console.log(currentuserroomdetails);
      }
    }
  }, [
    roomDetails,
    allschoolmalehostel,
    allschoolfemalehostel,
    allprivatemalehostel,
    allprivatefemalehostel,
    allmixedhostel,
    allcoupleshostel,
  ]);

  return (
    <>
      <section className=" currentroomstyl text-break">
        <h1 className=" text-capitalize text-center fw-bold fs-3 mb-4 ">
          current room details{" "}
        </h1>
        <hr />
        {/* Show message if user has no room */}
        {roomDetails.length === 0 ? (
          <div className="col-11 mx-auto rounded-2 ">
            <p className=" text-break text-wrap text-capitalize text-center fw-semibold fst-italic fs-5  text-danger m-0">
              you do not have any room
            </p>
            <p className=" text-break text-wrap text-capitalize text-center fw-semibold fst-italic fs-6  ">
              apply for any room to change your room status
            </p>
          </div>
        ) : (
          <>
            {/* school hostel display */}
            {["male school hostel", "female school hostel"].includes(
              roomDetails[0]?.hostel_type
            ) &&
              (currentuserroomdetails ? (
                <div className=" text-break col-11 mx-auto rounded-2 todisplayoneroominadmin">
                  <p className=" text-break text-wraptext-capitalize fs-4 p-3 fw-bold mb-0 oneroomdetailsheader d-flex justify-content-between align-items-center">
                    <span>
                      {" "}
                      room Number: {currentuserroomdetails.roomNumber}{" "}
                    </span>
                    <span className="fs-6">
                      Availability:{" "}
                      {currentuserroomdetails.availability
                        ? "Available"
                        : "Not Available"}
                    </span>
                  </p>

                  <div className="bodydetailsoneroom text-capitalize fs-6 p-3 fw-bold mb-0">
                    <p className=" text-break text-wrapmb-0 fs-6">
                      Bunker Space: {currentuserroomdetails.bunkerSpace}
                    </p>
                    <p className=" text-break text-wrapmb-0 fs-6">
                      Rent: ₦{currentuserroomdetails.rent}
                    </p>
                    <p className=" text-break text-wrapmb-0 fs-5 mt-2 mb-2">Bunker Details</p>
                    <div className="d-flex flex-wrap">
                      {currentuserroomdetails.bunkerDetails.map(
                        (item, index) => (
                          <div
                            key={index}
                            className="col-12 col-md-6 col-lg-4 my-1"
                          >
                            <div className="col-11 mx-auto rounded-2 showingoneuserforroom p-2">
                              <p>
                                Bunker:
                                {item.id}
                              </p>
                              <p>Occupant: {item.occupant || "Vacant"}</p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <p className=" text-break text-wraptext-danger text-center">
                  No room details available
                </p>
              ))}

            {/* private hostel display */}
            {[
              "private male hostel",
              "private female hostel",
              "private mixed hostel",
              "private couples hostel",
            ].includes(roomDetails[0]?.hostel_type) &&
              (currentuserroomdetails ? (
                <div className=" text-break col-11 mx-auto ">
                  <div className=" d-flex justify-content-evenly oneprivatehouseholder flex-wrap ">
                    <div className=" col-12 col-lg-4 d-flex justify-content-center align-items-center">
                      <img
                        className="  oneprivatehouseholderimg"
                        src={currentuserroomdetails.img_array}
                        alt=""
                      />
                    </div>
                    <div className=" ms-3 col-12 col-lg-6  pt-3 ">
                      <p className=" text-break text-wrap onelinetext text-capitalize fw-semibold ">
                        <span className=" text-uppercase fw-bold">
                          building name:
                        </span>{" "}
                        {currentuserroomdetails.building_name}
                      </p>
                      <p className=" text-break text-wrap onelinetext text-capitalize fw-semibold ">
                        <span className=" text-uppercase fw-bold">
                          building address:
                        </span>{" "}
                        {currentuserroomdetails.building_address}
                      </p>
                      <p className=" text-break text-wrap onelinetext text-capitalize fw-semibold ">
                        <span className=" text-uppercase fw-bold">
                          numbers of active room:
                        </span>{" "}
                        {currentuserroomdetails.room_count}
                      </p>
                      <p className=" text-break text-wrap onelinetext text-capitalize fw-semibold ">
                        <span className=" text-uppercase fw-bold">
                          {" "}
                          rent per room :
                        </span>
                        ₦{currentuserroomdetails.rent}
                      </p>
                      <p className=" text-break text-wrap onelinetext text-capitalize fw-semibold ">
                        <span className=" text-uppercase fw-bold">
                          {" "}
                          one room capacity:
                        </span>{" "}
                        {currentuserroomdetails.one_room_capacity} per room
                      </p>
                      <p className=" text-break text-wrap onelinetext text-capitalize fw-semibold ">
                        <span className=" text-uppercase fw-bold">
                          {" "}
                          room description :
                        </span>{" "}
                        {currentuserroomdetails.room_description}
                      </p>
                      <p className=" text-break text-wrap onelinetext text-capitalize fw-semibold ">
                        <span className=" text-uppercase fw-bold">
                          {" "}
                          hostel rules :
                        </span>{" "}
                        {currentuserroomdetails.rules}
                      </p>
                    </div>
                  </div>
                  <br />
                  <hr />

                  <div className=" mb-2  p-1  ">
                    <p className=" text-break text-wrap m-0  smalltextnote fst-italic fw-bold font">
                      <span className=" text-capitalize fs-6">
                        Checkbox behavior
                      </span>
                      : If a checkbox is checked, it means that the
                      corresponding room is occupied. If it's unchecked, the
                      room is unoccupied.
                    </p>
                  </div>

                  <div className=" d-flex flex-wrap ">
                    {currentuserroomdetails.rooms?.map((item, index) => (
                      <div className="col-6 col-md-4 col-lg-3 my-2" key={index}>
                        <div className="oneprivatehouseholderroom d-flex p-2 col-11 rounded justify-content-evenly align-items-center">
                          <p className=" text-break text-wrapm-0 text-capitalize fs-5 fw-bold">
                            Room: {item.room_id}
                          </p>
                          <input
                            type="checkbox"
                            checked={item.availability}
                            readOnly
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className=" text-break text-wraptext-danger text-center">
                  No room details available
                </p>
              ))}
          </>
        )}
      </section>
    </>
  );
};

export default Currentroom;
