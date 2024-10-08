import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import applogo from "../assets/sochool management system logog.png";

const Adminsignup = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: yup.object({
        username: yup.string().required(" username is required"),
      email: yup
        .string()
        .email("email must be valid")
        .required("email can not be empty"),
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
      confirm_password: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      console.log({
        adminusername: values.username,
        email: values.email,
        password: values.password,
      });

      try {
        axios
          .post("http://localhost:5000/user/adminsignup", {
            adminusername: values.username,
            email: values.email,
            password: values.password,
          })
          .then((res) => {
            console.log(res.data);
            console.log(res.data.message);
            toast.success(res.data.message);
      
            setTimeout(() => {
              navigate("/management_login");
            }, 5000);
          })
          .catch((err) => {
            console.log(err);
            
            toast.error(err.message);
            toast.error(err.response.data.message);
          })
          .finally(() => {});
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    },
  });

  console.log(formik.errors);
  console.log(formik.touched);
  return (
    <>
      <section className="loginsection1 d-flex justify-content-center align-items-center">
        <div className="logformholder p-5 col-10 col-md-8 col-lg-6 mx-auto  rounded-5">
          <form action="" onSubmit={formik.handleSubmit}>
            <div className=" col-12 d-flex justify-content-center align-items-center">
              <img src={applogo} className="loglogoimg mx-auto " alt="" />
            </div>
            <p className=" fs-4 text-center mt-3 text-capitalize fw-bold">
            Admin  sign up form
            </p>
            <div className="mb-3">
              <label
                htmlFor="username"
                className="form-label fs-6 fw-bold text-capitalize"
              >
                username
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                className=" loginput"
                name="username"
                id="username"
                aria-describedby="helpId"
                placeholder="username"
              />
              <small id="helpId" className=" text-danger">
                {formik.touched.username
                  ? formik.errors.username
                  : ""}
              </small>
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label fs-6 fw-bold text-capitalize"
              >
                email
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                className=" loginput"
                name="email"
                id="email"
                aria-describedby="helpId"
                placeholder="email"
              />
              <small id="helpId" className=" text-danger">
                {formik.touched.email ? formik.errors.email : ""}
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
            <div className="mb-3">
              <label
                htmlFor="confirm_password"
                className="form-label fs-6 fw-bold text-capitalize"
              >
                confirm password
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                className=" loginput"
                name="confirm_password"
                id="confirm_password"
                aria-describedby="helpId"
                placeholder="confirm password"
              />
              <small id="helpId" className=" text-danger">
                {formik.touched.confirm_password
                  ? formik.errors.confirm_password
                  : ""}
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
                already have an account? <Link to="/management_login">log in</Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Adminsignup;