import React from "react";

import notfound from "../assets/pagenotfound.jpg";
import Landingnav from "./Landingnav";
const Pagenotfound = () => {
  return (
    <>
      <section className=" pagenotfoundsection">
  

<p className=" fs-1 fw-bold text-capitalize text-center mb-0 my-5 fst-italic">
  Page not found
</p>
<div className="  pagenotfoundimgholder mx-auto my-5">
  <img className=" pagenotfoundimgholderimg  w-100 m-auto" src={notfound} alt="" />
</div>
      </section>
    </>
  );
};

export default Pagenotfound;
