import React from "react";
import logo from "../assets/react.svg";
import applogo from "../assets/APPLOGO.png";

import { TfiMenuAlt } from "react-icons/tfi";

import { LuArrowRightSquare } from "react-icons/lu";
import { LuArrowDownSquare } from "react-icons/lu";
import { Link } from "react-router-dom";

const Landingnav = () => {

  return (
    <>
      <nav className=" d-none d-lg-flex justify-content-between align-items-center ">
        <div className=" mx-3 my-2">
          <img className="applogo" src={applogo} alt="" />
        </div>
        <div className=" mx-3 buttonholderinlandingnav d-flex justify-content-between align-items-center my-2">
          <Link
            to="/"
            className=" d-flex justify-content-evenly align-items-center Linkfornav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 rounded-3 mx-2"
          >
            home
          </Link>
          <Link className=" d-flex justify-content-evenly align-items-center Linkfornav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 rounded-3 mx-2">
            FAQ
          </Link>
          <Link className=" d-flex justify-content-evenly align-items-center Linkfornav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 rounded-3 mx-2">
            contact us
          </Link>
          <Link
            to="login"
            className=" d-flex justify-content-evenly align-items-center Linkfornav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 rounded-3 mx-2"
          >
            login <LuArrowRightSquare className=" mx-1" />
          </Link>
          <Link
            to="/signup"
            className=" d-flex justify-content-evenly align-items-center Linkfornav p-1 fs-6 fw-semibold text-capitalize text-center px-3 py-2 rounded-3 mx-2"
          >
            sign up <LuArrowDownSquare className=" mx-1" />
          </Link>
        </div>
      </nav>

      <nav className=" d-flex d-lg-none justify-content-between align-items-center ">
        <div className=" mx-3 my-2">
          <img className="applogo" src={applogo} alt="" />
        </div>
        <div className="btn-group me-3 ">
          <button
            type="Link"
            className="Linkfornav rounded-2 p-2 px- fs-5 dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            <TfiMenuAlt />
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <Link
                to="/"
                className=" dropdown-item d-flex justify-content-evenly align-items-center Linkfornav p-1 fs-6 fw-semibold text-capitalize text-center px-4 py-2 "
              >
                home
              </Link>
            </li>
            <li>
              <Link className=" dropdown-item d-flex justify-content-evenly align-items-center Linkfornav p-1 fs-6 fw-semibold text-capitalize text-center px-4 py-2 ">
                FAQ
              </Link>
            </li>
            <li>
              <Link className=" dropdown-item d-flex justify-content-evenly align-items-center Linkfornav p-1 fs-6 fw-semibold text-capitalize text-center px-4 py-2 ">
                contact us
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className=" dropdown-item d-flex justify-content-evenly align-items-center Linkfornav p-1 fs-6 fw-semibold text-capitalize text-center px-4 py-2 "
              >
                login <LuArrowRightSquare className=" mx-1" />
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className=" dropdown-item d-flex justify-content-evenly align-items-center Linkfornav p-1 fs-6 fw-semibold text-capitalize text-center px-4 py-2 "
              >
                sign up <LuArrowDownSquare className=" mx-1" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Landingnav;
