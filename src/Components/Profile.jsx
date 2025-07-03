import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  featchinguser,
  featchinguserfailed,
  featchinguserSuccessful,
  fetchUpdatedUserData,
} from "./Redux/userdata";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [preview, setPreview] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [loading, setloading] = useState(false);

  const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
    (state) => state.userdata
  );

  const formik = useFormik({
    initialValues: {
      image: null,
    },
    validationSchema: Yup.object({
      image: Yup.mixed()
        .required("Image is required")
        .test("fileType", "Only image files are allowed", (value) => {
          return (
            value &&
            ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
          );
        }),
    }),
    onSubmit: async (values) => {
      setloading(true);
      try {
        const file = values.image;
        if (!file) {
          console.error("No image selected");
          return;
        }

        // Convert File to Base64
        const toBase64 = (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
          });

        const base64Image = await toBase64(file);

        // Send the image to the backend
        const response = await axios.post(
          "https://fuoye-room-backend.onrender.com/user/uploadprofileimage",
          {
            img_array: base64Image, // Send Base64 string
            matric_number: userdata.ifusermatricnumber.matric_number,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        console.log("Upload success:", response.data);
        toast.success("Upload success:", response.data);
        dispatch(fetchUpdatedUserData(userdata.ifusermatricnumber.email));
        setloading(false);
        navigate("/dashboard");
      } catch (error) {
        console.error("Upload failed:", error.response?.data || error.message);
        toast.error("Upload failed:", error.response?.data || error.message);
        setloading(false);
      }
    },
  });

  // Function to handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue("image", file);

      // Read the image and set preview
      const fileReader = new FileReader();
      fileReader.onloadend = () => setPreview(fileReader.result);
      fileReader.readAsDataURL(file);
    } else {
      // Reset preview if no file is selected
      setPreview(null);
    }
  };

  const imageUrl =
    userdata.ifusermatricnumber.profileImage !== ""
      ? userdata.ifusermatricnumber.profileImage
      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAMFBMVEXk5ueutLeor7Lf4ePn6eqrsbW5vsHIzM7a3d60ur3BxsjR1NbN0dPX2tzr7O29wsX2DjRMAAADaUlEQVR4nO2bW3LkIAwADYi3be5/25iZZB4bxyDZgqkt+ivZn+0SQgahTNNgMBgMBoPBYDAYDAaDwWCaAGBSG/mn3i53AFQMxt8xdpm6ewE466XU4getpZlVVy9YjHgKPcRE6Ke1KclfRnct2UkLprATpWe05g5W4PzfShmZVHOneGh0D1ZjK5j/yKZ3lpZLCPZ46R7Bcu2sKuN0i1Uzp1gXpxvN8qpeSQjTyMkgAiV0aJFWMGOctnrVpLZXJ/k3DRYQAi5Q2wJGdqkFqZThXj98oHKouK2wGZVhzqra78s/oXK8VobgxF2rHMVpY+WUipSU2goo5/pBoqTUtn6cZ+OV5sScVLTV4y0Kjhgp4fmOVajT3TuMUshTyxPG8kmr5xnGmnBCiu8C8b9JMS7fRyY6vSQwSi0fWDwn9YmfGaBKBUap1dOctGU8JVC3H29LaCGePHnvWKT104lVCgIpUMwXd1JR4KxSGcr+Y917NwhFXTIrTYQ7coNeHjhsVnFnVGZFtTyZL6IPFM7Js/YRfgBcWWduAz2sEN082e55prrPwV+iXii89T3i1NKp8tWhzWsDzqpxnDKlO6AW7J3q38BymFjSdHlvP3pu12LuYHRjdUHuaWlhew5xgApe6Fex7RffLUoPrWmxRkipM1KKNLv+IzjfuBjnuOTv3GcYAawvQN8Rqvy/K7dEG5L5Po4ak4KdF9dpvAtWtdhkvL5l02ue538RPoWoYG0oBpOKQUh9WNJz3pvZqSYRg9VZL3bL017B8iFyxwsmZ2uFniFLC2MpBYh7024VWt4yVQpQ9jiLDr1kYGhaHw+71WiJdHGTaosSMpP2kOnKWwTMlWfyAvq63ic4T+2//ta66L4M9iqju1Y6Xx+Kk5N4q9NTJhDP7bl9rZOZZS/Lple2S8UJJ+IYQhEt6ImF7EShoJasq1P8DeIjBGecMoRYAbeT0Ohsh8Cy797AdmjpT9gItEEtIL4vTULiPoTEx0YsGpHslLlJGr5eqs3iZRCN2tTKSVTPMNGnDwjoVPcgQX1SJ1pVherE7AhJqq6t3Wzr3amq67hHqvPImtMxceiVjimn+koaWT5DTaq3zahMcf2A8ucC5yhXdfqEG51UWrx23+InvphSLb97PxQz3cv2FN++VQeKyzcYDAaDwaA9XxcLKh2A6JUdAAAAAElFTkSuQmCC";

  return (
    <>
      {/* loading  */}

      {loading && (
        <div className="looder_body">
          <span className="loader"></span>
        </div>
      )}

      <section>
        <div className="profilestyle">
          <h1 className=" text-capitalize text-center fw-bold fs-4 mb-0 ">
            User Details
          </h1>
        </div>

        <div className=" newprofile">
          <div className=" newprofileimgholder mt-2 d-flex align-items-center flex-column flex-md-row ">
            <div
              className=" newprofileimgholderer "
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div className=" ms-3 mt-3">
              <p className=" mb-0  text-capitalize fw-bolder">
                {userdata.ifusermatricnumber.matric_number}
              </p>
              <p className=" mb-0  text-capitalize fw-semibold">
                {userdata.ifusermatricnumber.full_name}
              </p>
            </div>
          </div>
          <hr />
          <div className=" contactifo">
            <p className=" fw-medium fs-6 text-capitalize "> e-mail </p>
            <div className=" col-11 col-md-5 mb-3">
              <input
                type="text"
                className=" form-control fw-semibold "
                value={userdata.ifusermatricnumber.email}
                readOnly
              />
            </div>
            <p className=" fw-medium fs-6 text-capitalize "> phone-number </p>
            <div className=" col-11 col-md-5 mb-3">
              <input
                type="text"
                className=" form-control fw-semibold "
                value="***********"
                readOnly
              />
            </div>
            <p className=" fw-medium fs-6 text-capitalize "> gender </p>
            <div className=" col-11 col-md-5 mb-3">
              <input
                type="text"
                className=" form-control fw-semibold "
                value={userdata.ifusermatricnumber.gender}
                readOnly
              />
            </div>
          </div>
        </div>
        {/* Image Upload Section */}
        <div
          className={
            !userdata.ifusermatricnumber.profileImage
              ? "uploadprofile"
              : "d-none"
          }
        >
          <form onSubmit={formik.handleSubmit} className="uploadimgbox">
            {preview && (
              <img
                className="uploadimgboxpreview"
                src={preview}
                alt="Preview"
              />
            )}
            <p className="text-center text-capitalize">Upload Profile Image</p>
            <input
              type="file"
              className="form-control col-2"
              accept="image/*"
              onChange={handleFileChange}
            />
            {formik.errors.image && formik.touched.image && (
              <p className="text-danger">{formik.errors.image}</p>
            )}
            <button
              type="submit"
              className="fs-6 fw-bold text-capitalize profileuploadbutton rounded-5 p-2 px-3"
            >
              Upload
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
