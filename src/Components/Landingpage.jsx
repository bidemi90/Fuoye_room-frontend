import React from "react";
import Adminnav from "./Adminnav";
import section1img from "../assets/section1img.jpg";

import { FaRestroom } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";

import { FcElectricity } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";

import section4img1 from "../assets/healthy-hygiene.svg";
import section4img2 from "../assets/electricity-bill-svgrepo-com.svg";
import section4img3 from "../assets/personal-privacy-svgrepo-com.svg";
import section4img4 from "../assets/water-tap-svgrepo-com.svg";
import Landingnav from "./Landingnav";

const Landingpage = () => {
  return (
    <>
      <Landingnav />
      <section className=" section1 p-5 my-4  justify-content-evenly align-items-center">
        <div className=" w-25">
          <h1 className="  text-capitalize fw-bold findyourroom">
            Find your room now
          </h1>
          <p className=" fs-5 fw-semibold fst-italic">
            Book your stay for this section !
          </p>
        </div>

        <img className="section1img" src={section1img} alt="" />
      </section>
      <section className=" section1second mx-auto my-5">
        <h1 className="  text-capitalize fw-bold findyourroomsecond">
          Find your room now
        </h1>
        <p className=" fs-5 fw-semibold fst-italic">
          Book your stay for this section !
        </p>
      </section>

      <section className=" section2 py-5 col-11 mx-auto rounded-5">
        <p className=" mt-0 text-capitalize text-center fw-bold fs-2 mb-0 text-light">
          dorm type
        </p>
        <section className=" col-10 m-auto d-flex flex-wrap ">
          <div className="roomtypediv rounded-3  p-3 m-5 d-flex flex-column justify-content-evenly align-items-center">
            <FaMale />
            <p className=" fs-6 text-capitalize text-center fw-bold">
              school male Dorms
            </p>
          </div>
          <div className="roomtypediv rounded-3  p-3 m-5 d-flex flex-column justify-content-evenly align-items-center">
            <FaFemale />
            <p className=" fs-6 text-capitalize text-center fw-bold">
              school Female Dorms
            </p>
          </div>
          <div className="roomtypediv rounded-3  p-3 m-5 d-flex flex-column justify-content-evenly align-items-center">
            <FaMale />
            <p className=" fs-6 text-capitalize text-center fw-bold">
              {" "}
              private male Dorms
            </p>
          </div>
          <div className="roomtypediv rounded-3  p-3 m-5 d-flex flex-column justify-content-evenly align-items-center">
            <FaFemale />
            <p className=" fs-6 text-capitalize text-center fw-bold">
              {" "}
              private Female Dorms
            </p>
          </div>
          <div className="roomtypediv rounded-3  p-3 m-5 d-flex flex-column justify-content-evenly align-items-center">
            <FaRestroom />
            <p className=" fs-6 text-capitalize text-center fw-bold">
              private Mixed Dorms
            </p>
          </div>
          <div className="roomtypediv rounded-3  p-3 m-5 d-flex flex-column justify-content-evenly align-items-center">
            <IoIosBed />
            <p className=" fs-6 text-capitalize text-center fw-bold">
              private couples Rooms
            </p>
          </div>
        </section>
      </section>

      <section className=" d-flex justify-content-evenly flex-column flex-lg-row align-items-center col-12 mt-3 py-5 section3">
        <div className=" fs-4 col-7 col-lg-3">
          <h1 className=" fw-bold text-capitalize section3text">
            easy access to school amenities.
          </h1>
          <p className=" fw-semibold fst-italic fs-6">
            Experience the convenience of living near all essential services,
            from study spaces to recreation and dining options.
          </p>
        </div>
        <div className="section3imgholder d-flex flex-wrap justify-content-evenly col-10 col-lg-8">
          <div className=" section3img col-10 col-md-5 rounded-3 theimg11"></div>
          <div className=" section3img col-10 col-md-5 rounded-3 theimg12"></div>
          <div className=" section3img col-10 col-md-5 rounded-3 theimg13"></div>
          <div className=" section3img col-10 col-md-5 rounded-3 theimg14"></div>
        </div>
      </section>

      <section className="section4 py-5   d-flex justify-content-evenly align-items-center flex-wrap ">
      
          <div className=" d-flex flex-column col-8 col-md-4 m-2 col-xl-2  p-3 rounded-3 justify-content-evenly align-items-center section4imgholder ">
            <img src={section4img1} className="section4img" alt="" />
            <p className=" text-center fw-bold fs-6 ">Sanitation Facilities </p>
          </div>
          <div className=" d-flex flex-column col-8 col-md-4 m-2 col-xl-2  p-3 rounded-3 justify-content-evenly align-items-center section4imgholder ">
            <img src={section4img2} className="section4img" alt="" />
            <p className=" text-center fw-bold fs-6 ">Reliable Electricity </p>
          </div>
          <div className=" d-flex flex-column col-8 col-md-4 m-2 col-xl-2  p-3 rounded-3 justify-content-evenly align-items-center section4imgholder ">
            <img src={section4img3} className="section4img" alt="" />
            <p className=" text-center fw-bold fs-6 ">Privacy and Security </p>
          </div>
          <div className=" d-flex flex-column col-8 col-md-4 m-2 col-xl-2  p-3 rounded-3 justify-content-evenly align-items-center section4imgholder ">
            <img src={section4img4} className="section4img" alt="" />
            <p className=" text-center fw-bold fs-6 ">Running Water </p>
          </div>
      </section>
    </>
  );
};

export default Landingpage;
