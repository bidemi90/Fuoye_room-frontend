import React from "react";
import { FaUsers } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { BsFillHouseGearFill } from "react-icons/bs";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { RiSecurePaymentFill } from "react-icons/ri";
const Admindashboardhome = () => {
  return (
    <>
      <section>
        <div className=" d-flex flex-wrap">
          <div className=" my-2 col-12  col-md-6 d-flex justify-content-center align-items-center">
            <Link to="alluser" className="  text-decoration-none col-11 rounded-3 d-flex justify-content-center align-items-center flex-column buttononadmindash">
              <FaUsers className=" iconinbuttononadmindash" />
              <p className=" textinbuttononadmindash text-capitalize text-center">
                all user
              </p>
            </Link>
          </div>
          <div className=" my-2 col-12  col-md-6 d-flex justify-content-center align-items-center">
            <Link  to="room_management" className="  text-decoration-none col-11 rounded-3 d-flex justify-content-center align-items-center flex-column buttononadmindash">
              <BsFillHouseGearFill className=" iconinbuttononadmindash" />
              <p className=" textinbuttononadmindash text-capitalize text-center">
                Rooms
              </p>
            </Link>
          </div>
          <div className=" my-2 col-12  col-md-6 d-flex justify-content-center align-items-center">
            <Link className="  text-decoration-none col-11 rounded-3 d-flex justify-content-center align-items-center flex-column buttononadmindash">
              <VscGitPullRequestGoToChanges className=" iconinbuttononadmindash" />
              <p className=" textinbuttononadmindash text-capitalize text-center">
                Request
              </p>
            </Link>
          </div>
          <div className=" my-2 col-12  col-md-6 d-flex justify-content-center align-items-center">
            <Link className="  text-decoration-none col-11 rounded-3 d-flex justify-content-center align-items-center flex-column buttononadmindash">
              <RiSecurePaymentFill className=" iconinbuttononadmindash" />
              <p className=" textinbuttononadmindash text-capitalize text-center">
                payment
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admindashboardhome;