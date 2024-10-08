import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import applogo from "../assets/sochool management system logog.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import {
  featchinguser,
  featchinguserfailed,
  featchinguserSuccessful,
  fetchUpdatedUserData,
} from "./Redux/userdata";

import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
    (state) => state.userdata
  );

  const formik = useFormik({
    initialValues: {
      matric_number: "",
      password: "",
    },
    validationSchema: yup.object({
      matric_number: yup.string().required("matric number is required"),
      password: yup
        .string()
        .min(8, "Password must be at least 8 characters long")
        .max(20, "Password must not exceed 20 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one digit")
        .matches(
          /[@$!%*?&#]/,
          "Password must contain at least one special character"
        )
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);

      try {
        dispatch(featchinguser);
        axios
          .post("http://localhost:5000/user/login", {
            matric_number: values.matric_number,
            password: values.password,
          })
          .then((res) => {
            console.log(res.data);
            console.log(res.data.message);
            toast.success(res.data.message);

            dispatch(featchinguserSuccessful(res.data));

            setTimeout(() => {
              navigate("/dashboard");
            }, 5000);
          })
          .catch((err) => {
            console.log(err);

            toast.error(err.message);
            toast.error(err.response.data.message);

            dispatch(featchinguserfailed(err.response.data.message));
          })
          .finally(() => {});
      } catch (error) {
        console.log(error);
        toast.error(error);
        dispatch(featchinguserfailed(error));
      }
    },
  });

  console.log(formik.errors);
  console.log(formik.touched);
  return (
    <>
      <section className="loginsection1 d-flex justify-content-center align-items-center">
        <div className="logformholder p-5 col-10 col-md-8 col-lg-6 mx-auto  rounded-5">
          <form onSubmit={formik.handleSubmit} action="">
            <div className=" col-12 d-flex justify-content-center align-items-center">
              <img src={applogo} className="loglogoimg mx-auto " alt="" />
            </div>
            <p className=" fs-4 text-center mt-3 text-capitalize fw-bold">
              login form
            </p>
            <div className="mb-3">
              <label
                htmlFor="matric_number"
                className="form-label fs-6 fw-bold text-capitalize"
              >
                matric number
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                className=" loginput"
                name="matric_number"
                id="matric_number"
                aria-describedby="helpId"
                placeholder="matric number"
              />
              <small id="helpId" className=" text-danger">
                {formik.touched.matric_number
                  ? formik.errors.matric_number
                  : ""}
              </small>
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label fs-6 fw-bold text-capitalize"
              >
                password
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                className=" loginput"
                name="password"
                id="password"
                aria-describedby="helpId"
                placeholder="password"
              />
              <small id="helpId" className=" text-danger">
                {formik.touched.password ? formik.errors.password : ""}
              </small>
            </div>
            <div>
              <button
                type="submit"
                className="buttonforlog p-1 fs-6 fw-semibold text-capitalize text-center px-4 py-2 rounded-3 my-3"
              >
                submit
                <ToastContainer />
              </button>
            </div>
            <div>
              <hr className=" mb-2" />
              <p className=" m-0 text-capitalize fw-semibold fst-italic text-center">
                {" "}
                to create a new account, <Link to="/signup">sign up</Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
