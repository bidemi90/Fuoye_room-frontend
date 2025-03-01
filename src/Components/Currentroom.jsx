import React, { useState ,useEffect} from 'react'

import {
  featchinguser,
  featchinguserfailed,
  featchinguserSuccessful,
  fetchUpdatedUserData,
} from "./Redux/userdata";


import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const Currentroom = () => {
// const [email, setemail] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
    (state) => state.userdata
  );

     

      console.log(userdata.ifusermatricnumber.email);
      const email = userdata?.ifusermatricnumber.email; // Prevents error if userdata is undefined

      // console.log(email);
      // useEffect(() => {
      //   dispatch(fetchUpdatedUserData(email));

      // }, [])
      
      
  return (
    <>
    <section>

    <h1>Currentroom</h1>

    {isFetchinguser === "true" ? "loading..." : "done"}


    </section>
    </>
  )
}

export default Currentroom