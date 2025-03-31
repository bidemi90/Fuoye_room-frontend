import React, { useEffect, useState } from "react";

import { Navigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import {
  fetchUpdatedAllschoolmalehosteldata,
  fetchingAllschoolmalehostelFailed,
  fetchingAllschoolmalehostelSuccessful,
  fetchingAllschoolmalehostel,
} from "./Redux/Allschoolmalehostel";

import {
  fetchUpdatedalluserdata,
  fetchingalluser,
  fetchingalluserFailed,
  fetchingalluserSuccessful,
} from "./Redux/alluserdata";
import * as Yup from "yup";
import { useFormik } from "formik";

const Adminviewoneschoolmaleroom = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [occupantcurrentid, setoccupantcurrentid] = useState("");

  const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
    (state) => state.userdata
  );

  const {
    isFetchingAllschoolmalehostel,
    allschoolmalehostel,
    isFetchingAllschoolmalehostelFailed,
  } = useSelector((state) => state.Allschoolmalehostel);

  useEffect(() => {
    console.log(allschoolmalehostel);
    console.log(allschoolmalehostel[id]);
  }, []);

  const editingoccupant = (param) => {
    console.log("Clicked with parameter:", param);
    setoccupantcurrentid(param);
    console.log(occupantcurrentid);
  };

  // Define validation schema using Yup to edit current occupant
  const validationSchema = Yup.object({
    occupant: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      occupant: occupantcurrentid.occupant || "",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      console.log({
        occupant: values.occupant,
        old_occupant: occupantcurrentid.occupant,
        malehostel_id: allschoolmalehostel[id]._id,
        bunkerdetails_id: occupantcurrentid.id,
      });

      axios
        .post("https://fuoye-room-backend.onrender.com/user/updatemale-bunker-occupant", {
          occupant: values.occupant,
          old_occupant: occupantcurrentid.occupant,
          malehostel_id: allschoolmalehostel[id]._id,
          bunkerdetails_id: occupantcurrentid.id,
        })
        .then((res) => {
          console.log(res.data);
          toast.success(res.data.message);

          setTimeout(() => {
            resetForm(); // Reset form fields after submission

            // // 🔄 Redirect to the page
            navigate(`/management_page/school_male_hostel`);
            dispatch(fetchUpdatedAllschoolmalehosteldata());
            dispatch(fetchUpdatedalluserdata());
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response?.data?.message || "An error occurred");
        });
    },
  });

  return (
    <>
      {isFetchingAllschoolmalehostel ? (
        // Display loader while fetching
        <div className="col 12">
          <span className=" fs-6 fst-italic fw-bold text-capitalize text-center text-danger">
            {" "}
            loading.....{" "}
          </span>
        </div>
      ) : (
        <section>
          <h3 className=" text-capitalize text-center fw-bold ">
            school male hostel
          </h3>
          <hr />{" "}
          <p className=" fs-6 fw-semibold fst-italic">
            Note: You can update the details, add occupants, adjust the price,
            and change the availability status.
          </p>
          <div className=" col-11 mx-auto rounded-2 todisplayoneroominadmin">
            <p className=" text-capitalize fs-4 p-3 fw-bold mb-0 oneroomdetailsheader d-flex justify-content-between align-items-center">
              <span> room number : {allschoolmalehostel[id].roomNumber}</span>
              <span className=" fs-6">
                Availability :{" "}
                {allschoolmalehostel[id].availability
                  ? "Available"
                  : "Not Available"}
              </span>
            </p>
            <div className=" bodydetailsoneroom text-capitalize fs-6 p-3 fw-bold mb-0 ">
              <p className=" mb-0 fs-6">
                bunker Space :{allschoolmalehostel[id].bunkerSpace}
              </p>
              <p className=" mb-0 fs-6">
                rent : ₦{allschoolmalehostel[id].rent}
              </p>

              <p className=" mb-0 fs-5 mt-2 mb-2">bunkerDetails</p>
              <p className=" text-capitalize fs-6 fst-italic  fw-normal">
                <span className="  fs-6 fw-bold text-capitalize"> note:</span>{" "}
                click on each bunker to edit occupant
              </p>
              <div className=" d-flex flex-wrap">
                {allschoolmalehostel[id].bunkerDetails.map((item, index) => (
                  //  {/* <!-- Button trigger modal --> */}

                  <div
                    onClick={() => editingoccupant(item)}
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    key={index}
                    className=" col-12 col-md-6 col-lg-4 my-1 "
                  >
                    <div className=" col-11 mx-auto rounded-2 showingoneuserforroom p-2">
                      <p>bunker : {item.id}</p>
                      <p>occupant: {item.occupant} </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" text-center mt-4">
            <Link
              to={`/management_page/editschoolmaleroom/${id}`}
              className="Linkforsidenav px-4 py-2  text-capitalize fw-bold"
            >
              edit hostel details
            </Link>
          </div>
        </section>
      )}
      {/* <!-- Modal --> */}

      {isFetchingAllschoolmalehostel ? (
        // Display loader while fetching
        <div className="col 12">
          <span className=" fs-6 fst-italic fw-bold text-capitalize text-center text-danger">
            {" "}
            loading.....{" "}
          </span>
        </div>
      ) : (
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <form
          onSubmit={formik.handleSubmit}
          class="modal-dialog modal-dialog-centered"
        >
          <div class="modal-content">
            <div class="modal-header modalbgcolorchange">
              <h5 class="modal-title   " id="staticBackdropLabel">
                Edit occupant of bunker{" "}
                <span className=" fw-bold"> {occupantcurrentid.id}</span>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p className=" fs-6 text-capitalize">
                <span className=" fw-bold">note</span>: leaving input empty will
                remove current occupant and leave it as empty
              </p>

              <div class="mb-3">
                <label for="" class="form-label">
                  {" "}
                  occupant{" "}
                </label>
                <input
                  value={formik.values.occupant}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  class="form-control"
                  name="occupant"
                  id="occupant"
                  aria-describedby="helpId"
                  placeholder=""
                />
                <small id="helpId" className=" text-danger">
                  {formik.touched.occupant ? formik.errors.occupant : ""}
                </small>{" "}
              </div>
            </div>
            <div class="modal-footer modalbgcolorchange">
              <button
                type="submit"
                class="btn btn-primary text-capitalize fw-bold"
                data-bs-dismiss="modal"
              >
                Save
              </button>

              <button
                type="button"
                class="Linkforsidenav px-4 py-2  text-capitalize fw-bold "
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Adminviewoneschoolmaleroom;
