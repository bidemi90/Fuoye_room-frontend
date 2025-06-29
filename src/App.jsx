import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import Addnewhostel from "./Components/Addnewhostel";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboardhome from "./Components/Dashboardhome";
import Dashboard from "./Components/Dashboard";
import Pagenotfound from "./Components/Pagenotfound";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import { Store } from "./Components/Redux/Store";
import Schoolmalehostel from "./Components/Schoolmalehostel";
import Schoolfemalehostel from "./Components/Schoolfemalehostel";
import Admindashboard from "./Components/Admindashboard";
import Admindashboardhome from "./Components/Admindashboardhome";
import Adminalluser from "./Components/Adminalluser";
import Adminroompage from "./Components/Adminroompage";
import Adminschoolmalehotel from "./Components/Adminschoolmalehotel";
import Adminschoolfemalehostel from "./Components/Adminschoolfemalehostel";
import Currentroom from "./Components/Currentroom";
import Adminviewoneschoolmaleroom from "./Components/Adminviewoneschoolmaleroom";
import Adminviewoneschoolfemaleroom from "./Components/Adminviewoneschoolfemaleroom";
import Adminaddschoolmaleroom from "./Components/Adminaddschoolmaleroom";
import Adminaddschoolfemaleroom from "./Components/Adminaddschoolfemaleroom";
import Adminlogin from "./Components/Adminlogin";
import Adminsignup from "./Components/Adminsignup";
import Adminviewoneuser from "./Components/Adminviewoneuser";
import Adminprivatemalehostel from "./Components/Adminprivatemalehostel";
import Adminprivatefemalehostle from "./Components/Adminprivatefemalehostle";
import Adminaddmaleprivatehostel from "./Components/Adminaddmaleprivatehostel";
import Adminaddfemaleprivatehostel from "./Components/Adminaddfemaleprivatehostel";
import Adminviewonemaleprivatehostel from "./Components/Adminviewonemaleprivatehostel";
import Adminviewonefemaleprivatehostel from "./Components/Adminviewonefemaleprivatehostel";
import Adminmixedhostel from "./Components/Adminmixedhostel";
import Adminaddmixedhostel from "./Components/Adminaddmixedhostel";
import Adminviewonemixedhostel from "./Components/Adminviewonemixedhostel";
import Admincoupleshostel from "./Components/Admincoupleshostel";
import Adminaddcoupleshostel from "./Components/Adminaddcoupleshostel";
import Adminviewonecoulpeshostel from "./Components/Adminviewonecoulpeshostel";
import Privatemalehostel from "./Components/Privatemalehostel";
import Viewonemaleprivatemalehostel from "./Components/Viewonemaleprivatemalehostel";
import Privatefemalehostel from "./Components/Privatefemalehostel";
import Viewoneprivatefemalehostel from "./Components/Viewoneprivatefemalehostel";
import Mixedhostel from "./Components/Mixedhostel";
import Viewonemixedhostel from "./Components/Viewonemixedhostel";
import Coupleshostel from "./Components/Coupleshostel";
import Viewonecoupleshostel from "./Components/Viewonecoupleshostel";
import Viewoneschoolmalehostel from "./Components/Viewoneschoolmalehostel";
import Viewoneschoolfemalehostel from "./Components/Viewoneschoolfemalehostel";
import Admineditmaleprivatehostel from "./Components/Admineditmaleprivatehostel";
import Admineditfemaleprivatehostel from "./Components/Admineditfemaleprivatehostel";
import Admineditmixedhostel from "./Components/Admineditmixedhostel";
import Admineditcoupleshostel from "./Components/Admineditcoupleshostel";
import Admineditschoolmalehostel from "./Components/Admineditschoolmalehostel";
import Admineditschoolfemalehostel from "./Components/Admineditschoolfemalehostel";
import Payment_successfull from "./Components/Payment_successfull";
import Payment_successfullschoolfemale from "./Components/Payment_successfullschoolfemale";
import Payment_successfullforprivatemale from "./Components/Payment_successfullforprivatemale";
import Payment_successfullforprivatefemale from "./Components/Payment_successfullforprivatefemale";
import Payment_successfullforprivatemixed from "./Components/Payment_successfullforprivatemixed";
import Payment_successfullforprivatecouples from "./Components/Payment_successfullforprivatecouples";
import Profile from "./Components/Profile";
import Bookinghistory from "./Components/Bookinghistory";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" body">
        <Provider store={Store}>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<Pagenotfound />} />
              <Route path="" element={<Landingpage />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="management_login" element={<Adminlogin />} />
              <Route path="management_signup" element={<Adminsignup />} />
              <Route path="addnewhostel" element={<Addnewhostel />} />

              {/* admin nested routes */}
              <Route path="management_page" element={<Admindashboard />}>
                <Route path="" element={<Admindashboardhome />} />
                <Route path="alluser" element={<Adminalluser />} />
                <Route
                  path="manage_one_user/:id"
                  element={<Adminviewoneuser />}
                />
                <Route path="room_management" element={<Adminroompage />} />
                <Route
                  path="school_male_hostel"
                  element={<Adminschoolmalehotel />}
                />
                <Route
                  path="school_female_hostel"
                  element={<Adminschoolfemalehostel />}
                />
                <Route
                  path="private_male_hostel"
                  element={<Adminprivatemalehostel />}
                />
                <Route
                  path="private_female_hostel"
                  element={<Adminprivatefemalehostle />}
                />
                <Route
                  path="manageoneschoolmaleroom/:id"
                  element={<Adminviewoneschoolmaleroom />}
                />
                <Route
                  path="manageoneschoolfemaleroom/:id"
                  element={<Adminviewoneschoolfemaleroom />}
                />
                <Route
                  path="manageoneprivatemaleroom/:id"
                  element={<Adminviewonemaleprivatehostel />}
                />
                <Route
                  path="manageoneprivatefemaleroom/:id"
                  element={<Adminviewonefemaleprivatehostel />}
                />
                <Route
                  path="addschoolmaleroom"
                  element={<Adminaddschoolmaleroom />}
                />
                <Route
                  path="addschoolfemaleroom"
                  element={<Adminaddschoolfemaleroom />}
                />
                <Route
                  path="addprivatemaleroom"
                  element={<Adminaddmaleprivatehostel />}
                />
                <Route
                  path="addprivatefemaleroom"
                  element={<Adminaddfemaleprivatehostel />}
                />
                <Route path="mixed_hostel" element={<Adminmixedhostel />} />
                <Route
                  path="adding_mixed_hostel"
                  element={<Adminaddmixedhostel />}
                />
                <Route
                  path="manageonemixedbuliding/:id"
                  element={<Adminviewonemixedhostel />}
                />

                <Route path="couples_hostel" element={<Admincoupleshostel />} />
                <Route
                  path="adding_couples_hostel"
                  element={<Adminaddcoupleshostel />}
                />
                <Route
                  path="manageonecouplesbuliding/:id"
                  element={<Adminviewonecoulpeshostel />}
                />

                <Route
                  path="editonemaleprivatehostel/:id"
                  element={<Admineditmaleprivatehostel />}
                />
                <Route
                  path="editonefemaleprivatehostel/:id"
                  element={<Admineditfemaleprivatehostel />}
                />
                <Route
                  path="editonemixedhostel/:id"
                  element={<Admineditmixedhostel />}
                />
                <Route
                  path="editonecoupleshostel/:id"
                  element={<Admineditcoupleshostel />}
                />
                <Route
                  path="editschoolmaleroom/:id"
                  element={<Admineditschoolmalehostel />}
                />
                <Route
                  path="editschoolfemaleroom/:id"
                  element={<Admineditschoolfemalehostel />}
                />

                <Route path="*" element={<Pagenotfound />} />
              </Route>


              {/* this is a nested routes for user dashboard */}
                <Route path="dashboard" element={<Dashboard />}>
                  <Route path="" element={<Dashboardhome />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="currentroom" element={<Currentroom />} />
                  <Route path="schoolmalehostel" element={<Schoolmalehostel />} />
                  <Route
                    path="Viewoneschoolmalehostel/:id"
                    element={<Viewoneschoolmalehostel />}
                  />
                  <Route
                    path="schoolfemalehostel"
                    element={<Schoolfemalehostel />}
                  />
                  <Route
                    path="Viewoneschoolfemalehostel/:id"
                    element={<Viewoneschoolfemalehostel />}
                  />
                  <Route
                    path="privatemalehostel"
                    element={<Privatemalehostel />}
                  />
                  <Route
                    path="check_one_privatemale_hostel/:id"
                    element={<Viewonemaleprivatemalehostel />}
                  />
                  <Route
                    path="privatefemalehostel"
                    element={<Privatefemalehostel />}
                  />
                  <Route
                    path="check_one_privatefemale_hostel/:id"
                    element={<Viewoneprivatefemalehostel />}
                  />{" "}
                  <Route path="Mixedhostel" element={<Mixedhostel />} />
                  <Route
                    path="check_one_mixedgender_hostel/:id"
                    element={<Viewonemixedhostel />}
                  />
                  <Route path="Coupleshostel" element={<Coupleshostel />} />
                  <Route
                    path="check_one_couples_hostel/:id"
                    element={<Viewonecoupleshostel />}
                  />
                  <Route
                    path="Payment_successfull_formaleschoolhostel"
                    element={<Payment_successfull />}
                  />
                  <Route
                    path="Payment_successfull_forfemaleschoolhostel"
                    element={<Payment_successfullschoolfemale />}
                  />
                  <Route
                    path="Payment_successfullforprivatemalehostel"
                    element={<Payment_successfullforprivatemale />}
                  />
                  <Route
                    path="Payment_successfullforprivatefemalehostel"
                    element={<Payment_successfullforprivatefemale />}
                  />
                  <Route
                    path="Payment_successfullforprivatemixedhostel"
                    element={<Payment_successfullforprivatemixed />}
                  />
                  <Route
                    path="Payment_successfullforprivatcoupleshostel"
                    element={<Payment_successfullforprivatecouples />}
                  />
                  <Route
                    path="booking_history"
                    element={<Bookinghistory />}
                  />




                  <Route path="*" element={<Pagenotfound />} />
                  {/* Add other routes inside this nested structure if needed */}
                </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

export default App;
