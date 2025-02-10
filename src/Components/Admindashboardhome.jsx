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
            <Link
              to="alluser"
              className="  text-decoration-none col-11 rounded-3 d-flex justify-content-center align-items-center flex-column buttononadmindash"
            >
              <FaUsers className=" iconinbuttononadmindash" />
              <p className=" textinbuttononadmindash text-capitalize text-center">
                all user
              </p>
            </Link>
          </div>
          <div className=" my-2 col-12  col-md-6 d-flex justify-content-center align-items-center">
            <Link
              to="room_management"
              className="  text-decoration-none col-11 rounded-3 d-flex justify-content-center align-items-center flex-column buttononadmindash"
            >
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
        <br />
        <hr />
        <div>
          <p className=" text-capitalize text-center fw-bold fs-4">
            all request
          </p>
       <div className=" col-12 mx-auto tableholder p-2  rounded-2">
       <table className="  col-12 text-capitalize text-center mx-auto">
            <thead  className="firsttablehead fs-5 text-capitalize fw-bold"> 
              <td className=" border-1 p-2">#</td>
              <td className=" border-1 p-2">request type</td>
              <td className=" border-1 p-2">username</td>
              <td className=" border-1 p-2">status</td>
            </thead>
            <tr className=" secondtablehead">
              <td className=" border-1 p-2">1</td>
              <td className=" border-1 p-2">school male hostel</td>
              <td className=" border-1 p-2">csc/2022/2006</td>
              <td className=" border-1 p-2">
                {" "}
                <button className=" text-capitalize fw-semibold btn btn-secondary">new Request</button>
              </td>
            </tr>
            <tr className="secondtablehead">
              <td className=" border-1 p-2">1</td>
              <td className=" border-1 p-2">school male hostel</td>
              <td className=" border-1 p-2">csc/2022/2006</td>
              <td className=" border-1 p-2">
                {" "}
                <button className=" text-capitalize fw-semibold btn btn-primary">verified Request</button>
              </td>
            </tr>
            <tr className="secondtablehead">
              <td className=" border-1 p-2">1</td>
              <td className=" border-1 p-2">school male hostel</td>
              <td className=" border-1 p-2">csc/2022/2006</td>
              <td className=" border-1 p-2">
                {" "}
                <button className=" text-capitalize fw-semibold btn btn-danger">terminated Request</button>
              </td>
            </tr>
            <tr className="secondtablehead">
              <td className=" border-1 p-2">1</td>
              <td className=" border-1 p-2">school male hostel</td>
              <td className=" border-1 p-2">csc/2022/2006</td>
              <td className=" border-1 p-2">
                {" "}
                <button className=" text-capitalize fw-semibold btn btn-danger">terminated Request</button>
              </td>
            </tr>
            <tr className="secondtablehead">
              <td className=" border-1 p-2">1</td>
              <td className=" border-1 p-2">school male hostel</td>
              <td className=" border-1 p-2">csc/2022/2006</td>
              <td className=" border-1 p-2">
                {" "}
                <button className=" text-capitalize fw-semibold btn btn-danger">terminated Request</button>
              </td>
            </tr>
            <tr className="secondtablehead">
              <td className=" border-1 p-2">1</td>
              <td className=" border-1 p-2">school male hostel</td>
              <td className=" border-1 p-2">csc/2022/2006</td>
              <td className=" border-1 p-2">
                {" "}
                <button className=" text-capitalize fw-semibold btn btn-danger">terminated Request</button>
              </td>
            </tr>
            <tr className="secondtablehead">
              <td className=" border-1 p-2">1</td>
              <td className=" border-1 p-2">school male hostel</td>
              <td className=" border-1 p-2">csc/2022/2006</td>
              <td className=" border-1 p-2">
                {" "}
                <button className=" text-capitalize fw-semibold btn btn-danger">terminated Request</button>
              </td>
            </tr>
            <tr className="secondtablehead">
              <td className=" border-1 p-2">1</td>
              <td className=" border-1 p-2">school male hostel</td>
              <td className=" border-1 p-2">csc/2022/2006</td>
              <td className=" border-1 p-2">
                {" "}
                <button className=" text-capitalize fw-semibold btn btn-danger">terminated Request</button>
              </td>
            </tr>
            <tr className="secondtablehead">
              <td className=" border-1 p-2">1</td>
              <td className=" border-1 p-2">school male hostel</td>
              <td className=" border-1 p-2">csc/2022/2006</td>
              <td className=" border-1 p-2">
                {" "}
                <button className=" text-capitalize fw-semibold btn btn-danger">terminated Request</button>
              </td>
            </tr>
            <tr className="secondtablehead">
              <td className=" border-1 p-2">1</td>
              <td className=" border-1 p-2">school male hostel</td>
              <td className=" border-1 p-2">csc/2022/2006</td>
              <td className=" border-1 p-2">
                {" "}
                <button className=" text-capitalize fw-semibold btn btn-danger">terminated Request</button>
              </td>
            </tr>
            <tr className="secondtablehead">
              <td className=" border-1 p-2">1</td>
              <td className=" border-1 p-2">school male hostel</td>
              <td className=" border-1 p-2">csc/2022/2006</td>
              <td className=" border-1 p-2">
                {" "}
                <button className=" text-capitalize fw-semibold btn btn-danger">terminated Request</button>
              </td>
            </tr>
            <tr className="secondtablehead">
              <td className=" border-1 p-2">1</td>
              <td className=" border-1 p-2">school male hostel</td>
              <td className=" border-1 p-2">csc/2022/2006</td>
              <td className=" border-1 p-2">
                {" "}
                <button className=" text-capitalize fw-semibold btn btn-danger">terminated Request</button>
              </td>
            </tr>
            <tr className="secondtablehead">
              <td className=" border-1 p-2">1</td>
              <td className=" border-1 p-2">school male hostel</td>
              <td className=" border-1 p-2">csc/2022/2006</td>
              <td className=" border-1 p-2">
                {" "}
                <button className=" text-capitalize fw-semibold btn btn-danger">terminated Request</button>
              </td>
            </tr>
            <tr className="secondtablehead">
              <td className=" border-1 p-2">1</td>
              <td className=" border-1 p-2">school male hostel</td>
              <td className=" border-1 p-2">csc/2022/2006</td>
              <td className=" border-1 p-2">
                {" "}
                <button className=" text-capitalize fw-semibold btn btn-danger">terminated Request</button>
              </td>
            </tr>
            <tr className="secondtablehead">
              <td className=" border-1 p-2">1</td>
              <td className=" border-1 p-2">school male hostel</td>
              <td className=" border-1 p-2">csc/2022/2006</td>
              <td className=" border-1 p-2">
                {" "}
                <button className=" text-capitalize fw-semibold btn btn-danger">terminated Request</button>
              </td>
            </tr>
          </table>
       </div>
        </div>
      </section>
    </>
  );
};

export default Admindashboardhome;
