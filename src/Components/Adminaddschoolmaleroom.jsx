import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import applogo from "../assets/sochool management system logog.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchUpdatedAllschoolmalehosteldata,
  fetchingAllschoolmalehostel,
  fetchingAllschoolmalehostelFailed,
  fetchingAllschoolmalehostelSuccessful,
} from "./Redux/Allschoolmalehostel";

const Adminaddschoolmaleroom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    isFetchingAllschoolmalehostel,
    allschoolmalehostel,
    isFetchingAllschoolmalehostelFailed,
  } = useSelector((state) => state.Allschoolmalehostel);

  const formik = useFormik({
    initialValues: {
      roomNumber: "",
      bunkerSpace: "",
      rent: "",
    },
    validationSchema: yup.object({
      roomNumber: yup
        .number()
        .required(" room number is required")
        .min(1, "room number can not be less than 1"),
      bunkerSpace: yup
        .number()
        .required("Number of bunkers is required")
        .min(1, "Number of bunkers cannot be less than 1 ")
        .max(5, "Number of bunkers cannot be greater than 5"),
      rent: yup.number().required("rent is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);

      try {
        // dispatch(featchingadmin);
        axios
          .post("http://localhost:5000/user/addingschoolmalehostel", {
            roomNumber: values.roomNumber,
            bunkerSpace: values.bunkerSpace,
            rent: values.rent,
          })
          .then((res) => {
            console.log(res.data);
            console.log(res.data.message);
            toast.success(res.data.message);

            // dispatch(featchingadminSuccessful(res.data));
            dispatch(fetchUpdatedAllschoolmalehosteldata());

            setTimeout(() => {
              navigate("/management_page/school_male_hostel");
            }, 5000);
          })
          .catch((err) => {
            console.log(err);

            toast.error(err.message);
            toast.error(err.response.data.message);

            // dispatch(featchingadminfailed(err.response.data.message));
          })
          .finally(() => {});
      } catch (error) {
        console.log(error);
        toast.error(error);
        // dispatch(featchingadminfailed(error));
      }
    },
  });

  console.log(formik.errors);
  console.log(formik.touched);

  return (
    <>
      <section>
        <form
          onSubmit={formik.handleSubmit}
          className=" col-11 col-md-8 col-xl-6 mx-auto addingformholder p-4 rounded-2"
        >
          <p className=" text-capitalize text-center fw-bold fs-4">
            to add male room fill the form below
          </p>

          <div className="">
            <div class="mb-3">
              <label for="" class="form-label fs-5 fw-semibold text-capitalize">
                Room number:
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                class="form-control"
                name="roomNumber"
                id="roomNumber"
                aria-describedby="helpId"
                placeholder="Room number"
              />
              <small id="helpId" className=" text-danger">
                {formik.touched.roomNumber ? formik.errors.roomNumber : ""}
              </small>{" "}
            </div>
            <div class="mb-3">
              <label for="" class="form-label fs-5 fw-semibold text-capitalize">
                bunker Space :
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                class="form-control"
                name="bunkerSpace"
                id="bunkerSpace"
                aria-describedby="helpId"
                placeholder=" Number f bunkers"
              />
              <small id="helpId" className=" text-danger">
                {formik.touched.bunkerSpace ? formik.errors.bunkerSpace : ""}
              </small>{" "}
            </div>
            <div class="mb-3">
              <label for="" class="form-label fs-5 fw-semibold text-capitalize">
                {" "}
                rent:
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                class="form-control"
                name="rent"
                id="rent"
                aria-describedby="helpId"
                placeholder=" Rent should be in ₦"
              />
              <small id="helpId" className=" text-danger">
                {formik.touched.rent ? formik.errors.rent : ""}
              </small>{" "}
            </div>
          </div>
          <div className=" text-center">
            <button className=" buttonfornav px-4 py-1 fw-semibold text-uppercase rounded-1 fs-6">
              submit
              <ToastContainer />
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Adminaddschoolmaleroom;
