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
    fetchUpdatedAllprivatefemalehosteldata,
    fetchingAllprivatefemalehostel,
    fetchingAllprivatefemalehostelFailed,
    fetchingAllprivatefemalehostelSuccessful,
  } from "./Redux/Allprivatefemalehostel";
  

const Privatefemalehostel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
    (state) => state.userdata
  );



  const {
    isFetchingAllprivatefemalehostel,
    allprivatefemalehostel,
    isFetchingAllprivatefemalehostelFailed,
  } = useSelector((state) => state.Allprivatefemalehostel);

  useEffect(() => {
    console.log(allprivatefemalehostel);
  }, []);

  return (
    <>
      <section>
        <p className=" onelinetext  text-capitalize text-center fw-bold fs-4">
          private female only hostel
        </p>

        <div className=" mb-2  p-1  ">
            <p className=" m-0  smalltextnote fst-italic fw-bold font">
            <span className="  text-uppercase fs-6">note</span>: <span className=" text-capitalize fs-6 fw-bold">
                        numbers of active room:
                      </span> is the number of the room available in a buliding <br />
             
            </p>
          </div>

        <div className=" d-flex flex-wrap justify-content-center">
          {allprivatefemalehostel.map((item, index) => (
            <div className=" col-12 col-md-6 ">
              <div className=" oneprivateroomholder p-2 rounded-2 col-11">
                <div className=" d-flex ">
                  <div className=" col-4 d-flex justify-content-center align-items-center ">
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
                  to={`/dashboard/check_one_privatefemale_hostel/${index}`}
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

export default Privatefemalehostel;
