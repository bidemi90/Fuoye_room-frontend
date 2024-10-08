import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
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
                  path="manageoneschoolmaleroom/:id"
                  element={<Adminviewoneschoolmaleroom />}
                />
                <Route
                  path="manageoneschoolfemaleroom/:id"
                  element={<Adminviewoneschoolfemaleroom />}
                />
                <Route
                  path="addschoolmaleroom"
                  element={<Adminaddschoolmaleroom />}
                />
                <Route
                  path="addschoolfemaleroom"
                  element={<Adminaddschoolfemaleroom />}
                />

                <Route path="*" element={<Pagenotfound />} />
              </Route>

              {/* this is a nested routes for user dashboard */}
              <Route path="dashboard" element={<Dashboard />}>
                <Route path="" element={<Dashboardhome />} />
                <Route path="schoolmalehostel" element={<Schoolmalehostel />} />
                <Route path="currentroom" element={<Currentroom />} />
                <Route
                  path="schoolfemalehostel"
                  element={<Schoolfemalehostel />}
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
