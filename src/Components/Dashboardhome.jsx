import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import { IoIosBed } from "react-icons/io";



const Dashboardhome = () => {



  return (
    <>
      <section>
        <p className=" fs-4 fw-bold text-uppercase ">room category</p>
        <div className=" onecategoryholder mt-4 p-4 rounded-4 ">
          <p className=" fs-5 text-capitalize fw-semibold">school hostel</p>
          <div className=" d-flex justify-content-between align-items-center">
          <div className=" col-6">
          <Link to="/dashboard/schoolmalehostel" className=" categorytypediv col-11 m-auto p-2 border-0 rounded-3 d-flex flex-column justify-content-center align-items-center py-5">
              <FaMale className=" categorytypeicon" />
              <p className="  categorytypeicontext fw-bold text-capitalize mt-3 text-center">
                male hostel
              </p>
            </Link>
          </div>
          <div className=" col-6">
          <Link to="/dashboard/schoolfemalehostel" className=" categorytypediv col-11 m-auto p-2 border-0 rounded-3 d-flex flex-column justify-content-center align-items-center py-5">
              <FaFemale className=" categorytypeicon" />
              <p className="  categorytypeicontext fw-bold text-capitalize mt-3 text-center">
                female hostel
              </p>
            </Link>
          </div>
          </div>
        </div>

        <div className=" onecategoryholder mt-4 p-4 rounded-4 ">
          <p className=" fs-5 text-capitalize fw-semibold">private hostel</p>

          <div className=" d-flex justify-content-between align-items-center flex-wrap">
            <div className=" col-6  col-md-3 ">
              <Link className=" categorytypediv m-auto col-11 mb-3  p-2 border-0 rounded-3 d-flex flex-column justify-content-center align-items-center py-5">
                <FaMale className=" categorytypeicon" />
                <p className="  categorytypeicontext fw-bold text-capitalize mt-3 text-center">
                  male only hostel
                </p>
              </Link>
            </div>
            <div className=" col-6  col-md-3 ">
              <Link className=" categorytypediv m-auto col-11 mb-3  p-2 border-0 rounded-3 d-flex flex-column justify-content-center align-items-center py-5">
                <FaFemale className=" categorytypeicon" />
                <p className="  categorytypeicontext fw-bold text-capitalize mt-3 text-center">
                  female only hostel
                </p>
              </Link>
            </div>
            <div className=" col-6  col-md-3 ">
              <Link className=" categorytypediv m-auto col-11 mb-3  p-2 border-0 rounded-3 d-flex flex-column justify-content-center align-items-center py-5">
                <BiMaleFemale className=" categorytypeicon" />
                <p className="  categorytypeicontext fw-bold text-capitalize mt-3 text-center">
                  mixed gender hostel
                </p>
              </Link>
            </div>
            <div className=" col-6  col-md-3 ">
              <Link className=" categorytypediv m-auto col-11 mb-3  p-2 border-0 rounded-3 d-flex flex-column justify-content-center align-items-center py-5">
                <IoIosBed className=" categorytypeicon" />
                <p className="  categorytypeicontext fw-bold text-capitalize mt-3 text-center">
                  couples hostel
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboardhome;
