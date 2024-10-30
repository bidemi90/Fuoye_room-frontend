import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { VscDiffAdded } from "react-icons/vsc";

const Adminmixedhostel = () => {
  return (
<>
<section>
<p className=" onelinetext  text-capitalize text-center fw-bold fs-4">
          mixed gender hostel
        </p>
    
        <Link to="/management_page/addprivatefemaleroom">
      <button className=' flotbuttonspecial text-capitalize fs-3'>
       <VscDiffAdded/>
     </button>
      </Link>
</section>
</>
)
}

export default Adminmixedhostel