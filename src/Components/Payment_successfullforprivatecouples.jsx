import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";



  
  import {
    fetchUpdatedAllcoupleshosteldata,
    fetchingAllcoupleshostel,
    fetchingAllcoupleshostelFailed,
    fetchingAllcoupleshostelSuccessful,
  } from "./Redux/Allcoupleshostel";

import {
  featchinguser,
  featchinguserfailed,
  featchinguserSuccessful,
  fetchUpdatedUserData,
} from "./Redux/userdata";


const Payment_successfullforprivatecouples = () => {

   const navigate = useNavigate();
    const dispatch = useDispatch();
  const [loading, setloading] = useState(false)
  const [message, setmessage] = useState(false)


  const [searchParams] = useSearchParams();
  const reference = searchParams.get("reference");

  useEffect(() => {
    const verifyPayment = async () => {
      setloading(true)
      try {
        console.log(reference);
        const response = await axios.get(
          `http://localhost:5000/user/api/verifyprivatecouplespayment/${reference}`
        );
        console.log("response");
        console.log(response);


        if (response.data.success == true) {
          console.log("Payment successful", response.data);
          // Redirect or update application status
          console.log(response.data.user_details);
          setmessage( response.data.message)
        }
        setloading(false)

        setTimeout(() => {
              dispatch(featchinguserSuccessful(response.data.user_details))
              dispatch(fetchUpdatedAllcoupleshosteldata())
            
            
        }, 2000);
      } catch (error) {
        console.error("Error verifying payment", error);
        setmessage( response.data.message)
        setloading(false)
      }
    };

    if (reference) {
      verifyPayment();
    }
  }, [reference]);

  const { isFetchinguser, userdata, isFeatchinguserfailed } = useSelector(
    (state) => state.userdata
  );

  const {
    isFetchingAllschoolmalehostel,
    allschoolmalehostel,
    isFetchingAllschoolmalehostelFailed,
  } = useSelector((state) => state.Allschoolmalehostel);

  const {
    isFetchingAllschoolfemalehostel,
    allschoolfemalehostel,
    isFetchingAllschoolfemalehostelFailed,
  } = useSelector((state) => state.Allschoolfemalehostel);
  

  const {
    isFetchingAllmixedhostel,
    allmixedhostel,
    isFetchingAllmixedhostelFailed,
  } = useSelector((state) => state.Allmixedhostel);

  const {
    isFetchingAllcoupleshostel,
    allcoupleshostel,
    isFetchingAllcoupleshostelFailed,
  } = useSelector((state) => state.Allcoupleshostel);

  return (
    <div>
      <h2>Payment Successful</h2>
      <p>{loading ? "Loading..." : message}</p>


    </div>
  );
};

export default Payment_successfullforprivatecouples;
