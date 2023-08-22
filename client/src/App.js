// import logo from './l/superAdmin/adminogo.svg';
import './App.css';
import AddEmployee from './components/Admin/Admin/Employee/AddEmployee/addEmployee';
import PrimaryPageSuper from './components/Admin/Super Admin/Primary Page/primaryPage';
import PrimaryPage from './components/Admin/Admin/Primary Page/primaryPage2';
import ViewRooms from './components/Admin/Admin/Rooms/viewRooms';
import SuperAdmin from './components/Admin/Admin/Login/SuperAdmin';
import ViewEmployeeCard from './components/Admin/Admin/Employee/EmployeeCard';
// import NavBar from './components/User/Landing Page/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './components/Admin/LandingPage/LandingPage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "./styles.css"
import AddAdmin from './components/Admin/Super Admin/ViewAdmin/AddAdmin/AddAdmin';
import ViewAdmin from './components/Admin/Super Admin/ViewAdmin/viewAdmin';

import Nav3 from './components/User/home/nav3/nav3';
import Rooms from './components/User/rooms/room/room';
// import About from './components/User/about/about';
import BookingForm from './components/User/rooms/bookingForm/BookingForm';
import Fac from './components/User/facil/fac';
import ContactPage from './components/User/contactPage/ContactPage';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Admin/Admin/Primary Page/navbar';
import ChangeUsername from './components/Admin/Admin/Login/ChangePassword';
import ChangePassword from './components/Admin/Admin/Login/ChangeUsername';
import AddRooms from './components/Admin/Admin/Rooms/AddRoom';

import BOOKING from './components/Admin/Admin/Bookings/booking';
import About from './components/User/about/about'
import Cam from './components/User/card/cam';

import Displa from './components/User/card/cartdip';




function App() {
  // function componentDidMount() {
  //   // Initialize Bootstrap dropdowns
  //   const dropdownToggle = document.getElementById('dropdownMenuButton');
  //   const dropdown = new bootstrap.Dropdown(dropdownToggle);
  // }
  // componentDidMount()
  return (
    <div>

    <div className="App">
            {/* <Navbar /> */}
             
            
      
          <Router>
            
    
          {/* <LandingPageddddd /> */}
            <Routes>
    
            {/*USER ROUT */}
            <Route path="/" element={< Nav3/>} />
            <Route path="/room" element={< Rooms/>} />
            {/* <Route path="/about" element={< About/>} /> */}
            <Route path="/booking" element={<BookingForm/>} />
            <Route path="/fac" element={<Fac/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/getbooking" element={ < BOOKING/>} />

            <Route path="/about" element={<About/>} />
            
            


              <Route path="/admin" element={< LandingPage/>} />
              <Route path="/login" element={<SuperAdmin />} />
              <Route path="/superAdmin" element={<PrimaryPageSuper />} />
              <Route path="/admin/admin" element={<PrimaryPage />} />
                <Route path="/addEmployee" element={<AddEmployee />} />
              <Route path="/employees" element={<ViewEmployeeCard />} />
                {/* <Route path="/customers" element={<Customers />} /> */}
                <Route path="/rooms" element={<ViewRooms />} />
                <Route path="/superAdmin/addAdmin" element={<AddAdmin />} />
                <Route path="/superAdmin/admin" element={<ViewAdmin />} />
                <Route path="/changeUsername" element={<ChangeUsername />} />
                <Route path="/changePassword" element={<ChangePassword />} />

                <Route path="/addRoom" element={<AddRooms/>}/>



            </Routes>
        
              {/* <SuperAdmin /> */}
              {/* <PrimaryPage /> */}
              {/* <PrimaryPageSuper />   */}
        
 
              {/* <AddEmployee /> */}
              {/* <ViewRooms /> */}
              {/* <AddAdmin /> */}

          
              

  
      </Router>
          
        </div>

        </div>
  );
}

export default App;
