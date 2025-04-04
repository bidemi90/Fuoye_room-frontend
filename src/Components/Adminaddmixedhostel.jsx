import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { VscDiffAdded } from "react-icons/vsc";

import {
  fetchUpdatedAllmixedhosteldata,
  fetchingAllmixedhostel,
  fetchingAllmixedhostelFailed,
  fetchingAllmixedhostelSuccessful,
} from "./Redux/Allmixedhostel";

const Adminaddmixedhostel = () => {
  const [img, setimg] = useState("");
    const [loading, setloading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    isFetchingAllmixedhostel,
    allmixedhostel,
    isFetchingAllmixedhostelFailed,
  } = useSelector((state) => state.Allmixedhostel);

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    img_array: Yup.string().required("image can not be empty"),
    building_name: Yup.string().required("Building name is required"),
    room_description: Yup.string().required("Room description is required"),
    address: Yup.string().required("Address is required"),
    rent: Yup.number()
      .required("Rent is required")
      .positive("Rent must be positive"),
    room_capacity: Yup.number()
      .required("Room capacity is required")
      .positive()
      .integer(),
    numbers_of_room: Yup.number()
      .required("Number of rooms is required")
      .positive()
      .integer(),
    building_amenities: Yup.string(),
    building_rules: Yup.string(),
    is_furnished: Yup.boolean(),
    subaccount: Yup.string().required(" subaccount is required"), // New field
    whatsappcontact: Yup.string()
      .required("whatsapp contact is required")
      .matches(/^\d+$/, "whatsapp contact must be a number"), // New field
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      building_name: "",
      room_description: "",
      address: "",
      rent: "",
      room_capacity: "",
      numbers_of_room: "",
      building_amenities: "",
      building_rules: "",
      is_furnished: false,
      img_array: "", // for handling image uploads
      subaccount: "", // New field
      whatsappcontact: "", // New field
    },
    validationSchema,
    onSubmit: (values) => {
      setloading(true);

      console.log(values);
      // Submit the form

      try {
        // dispatch(featchingadmin);
        axios
          .post("https://fuoye-room-backend.onrender.com/user/addingmixedhostel", {
            building_name: values.building_name,
            room_description: values.room_description,
            address: values.address,
            rent: values.rent,
            room_capacity: values.room_capacity,
            numbers_of_room: values.numbers_of_room,
            building_amenities: values.building_amenities,
            building_rules: values.building_rules,
            is_furnished: values.is_furnished,
            img_array: values.img_array, // for handling image uploads
            subaccount: values.subaccount, // New field
            whatsappcontact: values.whatsappcontact, // New field
          })
          .then((res) => {
            console.log(res.data);
            console.log(res.data.message);
            toast.success(res.data.message);

            dispatch(fetchUpdatedAllmixedhosteldata());

            setTimeout(() => {
              navigate("/management_page/mixed_hostel");
            }, 5000);
          })
          .catch((err) => {
            console.log(err);
            setloading(false);
            toast.error(err.message);
            toast.error(err.response.data.message);

            // dispatch(featchingadminfailed(err.response.data.message));
            setloading(false);

          })
          .finally(() => {});
      } catch (error) {
        console.log(error);
        toast.error(error);
        // dispatch(featchingadminfailed(error));
        setloading(false);

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
        <p className=" text-capitalize text-center fs-4 fw-bold">
          fill form to add to mixed gender hostel
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className=" addingform p-3 rounded-3 col-8 m-auto">
            <div className="mb-3">
              <div className=" d-flex justify-content-center align-items-center bg-white  py-2">
                <img
                  className=" img-fluid col-10 col-lg-6"
                  src={img}
                  alt="preview selected image"
                />
              </div>
              <label
                className="text-capitalize fw-bold fs-6"
                htmlFor="img_array"
              >
                Choose file
              </label>
              <input
                type="file"
                className="form-control"
                name="img_array"
                id="img_array"
                onChange={(e) => {
                  let file = e.target.files[0];
                  let reader = new FileReader();
                  reader.onload = (e) => {
                    console.log(e.target.result);
                    formik.setFieldValue("img_array", e.target.result);
                    setimg(e.target.result);
                  };
                  reader.readAsDataURL(file);
                }}
              />
              <div className="form-text text-capitalize fw-semibold text-danger">
                {formik.errors.img_array ? formik.errors.img_array : ""}
              </div>
            </div>

            {/* Building Name */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="building_name"
                id="building_name"
                value={formik.values.building_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=""
              />
              <label
                htmlFor="building_name"
                className="text-capitalize fw-bold fs-6"
              >
                Building name
              </label>
              <div className="form-text text-capitalize fw-semibold text-danger">
                {formik.touched.building_name && formik.errors.building_name
                  ? formik.errors.building_name
                  : ""}
              </div>
            </div>

            {/* Address */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="address"
                id="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=""
              />
              <label htmlFor="address" className="text-capitalize fw-bold fs-6">
                Address
              </label>
              <div className="form-text text-capitalize fw-semibold text-danger">
                {formik.touched.address && formik.errors.address
                  ? formik.errors.address
                  : ""}
              </div>
            </div>

            {/* Room Description */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="room_description"
                id="room_description"
                value={formik.values.room_description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=""
              />
              <label
                htmlFor="room_description"
                className="text-capitalize fw-bold fs-6"
              >
                Room description
              </label>
              <div className="form-text text-capitalize fw-semibold text-danger">
                {formik.touched.room_description &&
                formik.errors.room_description
                  ? formik.errors.room_description
                  : ""}
              </div>
            </div>

            {/* Rent */}
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                name="rent"
                id="rent"
                value={formik.values.rent}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=""
              />
              <label htmlFor="rent" className="text-capitalize fw-bold fs-6">
                Rent in ₦
              </label>
              <div className="form-text text-capitalize fw-semibold text-danger">
                {formik.touched.rent && formik.errors.rent
                  ? formik.errors.rent
                  : ""}
              </div>
            </div>

            {/* Room Capacity */}
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                name="room_capacity"
                id="room_capacity"
                value={formik.values.room_capacity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=""
              />
              <label
                htmlFor="room_capacity"
                className="text-capitalize fw-bold fs-6"
              >
                Room capacity
              </label>
              <div className="form-text text-capitalize fw-semibold text-danger">
                {formik.touched.room_capacity && formik.errors.room_capacity
                  ? formik.errors.room_capacity
                  : ""}
              </div>
            </div>

            {/* Numbers of Room */}
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                name="numbers_of_room"
                id="numbers_of_room"
                value={formik.values.numbers_of_room}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=""
              />
              <label
                htmlFor="numbers_of_room"
                className="text-capitalize fw-bold fs-6"
              >
                Numbers of room
              </label>
              <div className="form-text text-capitalize fw-semibold text-danger">
                {formik.touched.numbers_of_room && formik.errors.numbers_of_room
                  ? formik.errors.numbers_of_room
                  : ""}
              </div>
            </div>

            {/* Building Amenities */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="building_amenities"
                id="building_amenities"
                value={formik.values.building_amenities}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=""
              />
              <label
                htmlFor="building_amenities"
                className="text-capitalize fw-bold fs-6"
              >
                Building amenities
              </label>
              <div className="form-text text-capitalize fw-semibold text-danger">
                {formik.touched.building_amenities &&
                formik.errors.building_amenities
                  ? formik.errors.building_amenities
                  : ""}
              </div>
            </div>

            {/* Building Rules */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="building_rules"
                id="building_rules"
                value={formik.values.building_rules}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=""
              />
              <label
                htmlFor="building_rules"
                className="text-capitalize fw-bold fs-6"
              >
                Building rules
              </label>
              <div className="form-text text-capitalize fw-semibold text-danger">
                {formik.touched.building_rules && formik.errors.building_rules
                  ? formik.errors.building_rules
                  : ""}
              </div>
            </div>

            {/* Furnished */}
            <div className="form-control mb-3">
              <label
                htmlFor="is_furnished"
                className="text-capitalize fw-bold fs-6"
              >
                Furnished
              </label>
              <input
                type="checkbox"
                name="is_furnished"
                id="is_furnished"
                checked={formik.values.is_furnished}
                onChange={formik.handleChange}
                placeholder=""
              />
            </div>
            <p className=" text-white fw-semibold fst-italic small text-capitalize ">
              Create a subaccount using the recipient's account details for
              receiving the rent.
            </p>
            {/* subaccount  */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="subaccount"
                id="subaccount"
                value={formik.values.subaccount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=""
              />
              <label
                htmlFor="subaccount"
                className="text-capitalize fw-bold fs-6"
              >
                sub account code
              </label>
              <div className="form-text text-capitalize fw-semibold text-danger">
                {formik.touched.subaccount && formik.errors.subaccount
                  ? formik.errors.subaccount
                  : ""}
              </div>
            </div>

        

            {/* whatsappcontact */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="whatsappcontact"
                id="whatsappcontact"
                value={formik.values.whatsappcontact}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=""
              />
              <label
                htmlFor="whatsappcontact"
                className="text-capitalize fw-bold fs-6"
              >
               whats app contact
              </label>
              <div className="form-text text-capitalize fw-semibold text-danger">
                {formik.touched.whatsappcontact && formik.errors.whatsappcontact
                  ? formik.errors.whatsappcontact
                  : ""}
              </div>
            </div>
            
            <button
              type="submit"
              className=" buttonfornav fs-5 fw-bold py-2 rounded-2 px-3 "
            >
              Submit
              <ToastContainer />
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Adminaddmixedhostel;
