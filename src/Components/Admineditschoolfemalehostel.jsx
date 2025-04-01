import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import applogo from "../assets/sochool management system logog.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchUpdatedAllschoolfemalehosteldata,
  fetchingAllschoolfemalehostel,
  fetchingAllschoolfemalehostelFailed,
  fetchingAllschoolfemalehostelSuccessful,
} from "./Redux/Allschoolfemalehostel";

const Admineditschoolfemalehostel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const [loading, setloading] = useState(false);

  const {
    isFetchingAllschoolfemalehostel,
    allschoolfemalehostel,
    isFetchingAllschoolfemalehostelFailed,
  } = useSelector((state) => state.Allschoolfemalehostel);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    console.log(allschoolfemalehostel);
    console.log(allschoolfemalehostel[id]);
  }, []);

  // Find the hostel data by ID
  const hostelData = allschoolfemalehostel[id] || {};
  console.log(hostelData);

  const formik = useFormik({
    initialValues: {
      roomNumber: hostelData.roomNumber || "",
      bunkerSpace: hostelData.bunkerSpace || "",
      rent: hostelData.rent || "",
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
      setloading(true);

      console.log(values);

      try {
        // dispatch(fetchingAllschoolfemalehostel);
        axios
          .put(
            `https://fuoye-room-backend.onrender.com/user/edit-school-female-hostel/${hostelData._id}`,
            {
              roomNumber: values.roomNumber,
              bunkerSpace: values.bunkerSpace,
              rent: values.rent,
            }
          )
          .then((res) => {
            console.log(res.data);
            toast.success(res.data.message);

          // dispatch(featchingadminSuccessful(res.data));
            dispatch(fetchUpdatedAllschoolfemalehosteldata());
            setloading(false);

            setTimeout(() => {
              navigate("/management_page/school_female_hostel");
            }, 5000);

          })
          .catch((err) => {
            console.log(err);
            toast.error(err.response?.data?.message || "Error updating room");
            setloading(false);

            // dispatch(
            //   fetchingAllschoolfemalehostelFailed(
            //     err.response?.data?.message || "Error updating room"
            //   )
            // );
          })
          .finally(() => {});
      } catch (error) {
        console.log(error);
        toast.error(error);
        setloading(false);

        // dispatch(fetchingAllschoolfemalehostelFailed(error));
      }
    },
  });

  console.log(formik.errors);
  console.log(formik.touched);

  return (
    <>


{/* loading  */}

{loading && (
        <div className="looder_body">
          <span className="loader"></span>
        </div>
      )}



      <section>
        <form
          onSubmit={formik.handleSubmit}
          className=" col-11 col-md-8 col-xl-6 mx-auto addingformholder p-4 rounded-2"
        >
          <p className=" text-capitalize text-center fw-bold fs-4">
            edit room details
          </p>
          <p className=" text-capitalize fs-6">
            <span className=" fw-bold">note:</span> this will clear the
            occupants details
          </p>
          <div className="">
            <div class="mb-3">
              <label for="" class="form-label fs-5 fw-semibold text-capitalize">
                Room number:
              </label>
              <input
                value={formik.values.roomNumber}
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
                value={formik.values.bunkerSpace}
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
                value={formik.values.rent}
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

export default Admineditschoolfemalehostel;
