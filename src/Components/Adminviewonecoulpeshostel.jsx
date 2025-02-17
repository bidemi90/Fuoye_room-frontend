import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";


import {
  fetchUpdatedAllcoupleshosteldata,
  fetchingAllcoupleshostel,
  fetchingAllcoupleshostelFailed,
  fetchingAllcoupleshostelSuccessful,
} from "./Redux/Allcoupleshostel";

import {
  fetchUpdatedalluserdata,
  fetchingalluser,
  fetchingalluserFailed,
  fetchingalluserSuccessful,
} from "./Redux/alluserdata";
import * as Yup from "yup";
import { useFormik } from "formik";

const Adminviewonecoulpeshostel = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [occupantcurrentid, setoccupantcurrentid] = useState("");

  
  const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
    (state) => state.userdata
  );
 

  const {
    isFetchingAllcoupleshostel,
    allcoupleshostel,
    isFetchingAllcoupleshostelFailed,
  } = useSelector((state) => state.Allcoupleshostel);

  useEffect(() => {
    console.log(allcoupleshostel);
    console.log(allcoupleshostel[id]);
  }, []);

  const editingoccupant = (param) => {
    console.log("Clicked with parameter:", param);
    setoccupantcurrentid(param);
    console.log(occupantcurrentid);
  };

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
        privatecoupleshostel_id: allcoupleshostel[id]._id,
        room_id: occupantcurrentid.room_id,
      });

      axios
        .post("http://localhost:5000/user/updatePrivateCouplesHostelOccupant", {
          occupant: values.occupant,
        old_occupant: occupantcurrentid.occupant,
        privatecoupleshostel_id: allcoupleshostel[id]._id,
        room_id: occupantcurrentid.room_id,
        })
        .then((res) => {
          console.log(res.data);
          toast.success(res.data.message);

          setTimeout(() => {
            resetForm(); // Reset form fields after submission

          
            // // 🔄 Redirect to the page
            navigate(`/management_page/couples_hostel`);
            dispatch(fetchUpdatedAllcoupleshosteldata());
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
      <section>
        <h3 className=" text-capitalize text-center fw-bold ">
           couples hostel
        </h3>
        <hr />{" "}
        <p className=" fs-6 fw-semibold fst-italic">
          Note: You can update the details, add occupants, adjust the price, and
          change the availability status.
        </p>
        <div className=" d-flex justify-content-evenly oneprivatehouseholder flex-wrap ">
          <div className=" col-12 col-lg-4 d-flex justify-content-center align-items-center">
            <img
              className="  oneprivatehouseholderimg"
              src={allcoupleshostel[id].img_array}
              alt=""
            />
          </div>
          <div className=" ms-3 col-12 col-lg-6  pt-3 ">
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">building name:</span>{" "}
              {allcoupleshostel[id].building_name}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">building address:</span>{" "}
              {allcoupleshostel[id].building_address}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">
                numbers of active room:
              </span>{" "}
              {allcoupleshostel[id].room_count}
            </p>
            <p className="onelinetext text-capitalize fw-semibold">
              <span className="text-uppercase fw-bold">Furnished:</span>{" "}
              {allcoupleshostel[id].is_furnished ? "✔️" : "❌"}
            </p>

            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold"> rent per room :</span>{" "}
              ₦ {allcoupleshostel[id].rent}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">
                {" "}
                one room capacity:
              </span>{" "}
              {allcoupleshostel[id].one_room_capacity} per room
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold">
                {" "}
                room description :
              </span>{" "}
              {allcoupleshostel[id].room_description}
            </p>
            <p className=" onelinetext text-capitalize fw-semibold ">
              <span className=" text-uppercase fw-bold"> hostel rules :</span>{" "}
              {allcoupleshostel[id].rules}
            </p>
          </div>
        </div>
        <br />
        <hr />
        <p className=" m-0 text-capitalize fw-bold ">
          Note : checked rooms are occupied
        </p>
        <div className=" d-flex flex-wrap ">
          {allcoupleshostel[id].rooms.map((item, index) => (
            //  {/* <!-- Button trigger modal --> */}

            <div
            onClick={() => editingoccupant(item)}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              className="col-6 col-md-4 col-lg-3 my-2 "
              key={index}
            >
              <div className="oneprivatehouseholderroom d-flex p-2 col-11 rounded justify-content-evenly align-items-center">
                <p className="m-0 text-capitalize fs-5 fw-bold">
                  Room: {item.room_id}
                </p>
                <input
                  type="checkbox"
                  checked={item.availability} // Checked if room is available
                  name=""
                  id=""
                  readOnly // Ensure it's not modified if it's meant to be display-only
                />
              </div>
            </div>
          ))}
        </div>
        <div className=" d-flex justify-content-center align-items-center">
          <Link
            to={`/management_page/editonecoupleshostel/${id}`}
            className="Linkforsidenav px-4 py-2  text-capitalize fw-bold"
          >
            edit hostel details
          </Link>
        </div>
      </section>

          {/* <!-- Modal --> */}
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
                     building name :{allcoupleshostel[id].building_name}
                   </h5>
                   
                   <button
                     type="button"
                     class="btn-close"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                   ></button>
                 </div>
                 <div class="modal-body">
                 <h5 class="modal-title   " id="staticBackdropLabel">
                     Edit occupant of room {" "}
                     <span className=" fw-bold"> {occupantcurrentid.room_id}</span>
                   </h5>
                   <hr />
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
                     class="btn btn-primary  text-capitalize fw-bold "
                     data-bs-dismiss="modal"
                   >
                     save
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
            <ToastContainer />
    </>
  );
};

export default Adminviewonecoulpeshostel;

