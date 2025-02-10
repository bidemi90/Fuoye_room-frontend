import React, { useEffect } from "react";

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
  fetchUpdatedAllmixedhosteldata,
  fetchingAllmixedhostel,
  fetchingAllmixedhostelFailed,
  fetchingAllmixedhostelSuccessful,
} from "./Redux/Allmixedhostel";

const Mixedhostel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
    (state) => state.userdata
  );
  const {
    isFetchingAllmixedhostel,
    allmixedhostel,
    isFetchingAllmixedhostelFailed,
  } = useSelector((state) => state.Allmixedhostel);

  useEffect(() => {
    console.log(allmixedhostel);
  }, []);

  return (
    <>
      <section>
        <p className=" onelinetext  text-capitalize text-center fw-bold fs-4">
          mixed gender hostel
        </p>
        <div className=" d-flex flex-wrap justify-content-center">
          {allmixedhostel.map((item, index) => (
            <div className=" col-12 col-md-6 ">
              <div className=" oneprivateroomholder p-2 rounded-2 col-11">
                <div className=" d-flex ">
                  <div className=" col-4 d-flex justify-content-center align-items-center">
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
                  to={`/dashboard/check_one_mixedgender_hostel/${index}`}
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
    
    </>
  );
};

export default Mixedhostel;
