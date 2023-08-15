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
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Admin/Admin/Primary Page/navbar';

function App() {
  // function componentDidMount() {
  //   // Initialize Bootstrap dropdowns
  //   const dropdownToggle = document.getElementById('dropdownMenuButton');
  //   const dropdown = new bootstrap.Dropdown(dropdownToggle);
  // }
  // componentDidMount()
  return (
    <div className="App">

          <Router>
            {/* <Navbar /> */}
          {/* <LandingPage /> */}
            <Routes>

              <Route path="/admin" element={< LandingPage/>} />
              <Route path="/login" element={<SuperAdmin />} />
              <Route path="/superAdmin" element={<PrimaryPageSuper />} />
              <Route path="/admin/admin" element={<PrimaryPage />} />
              <Route path="/employees" element={<ViewEmployeeCard />} />
                {/* <Route path="/customers" element={<Customers />} /> */}
                <Route path="/rooms" element={<ViewRooms />} />
                <Route path="/addEmployee" element={<AddEmployee />} />
                <Route path="/superAdmin/addAdmin" element={<AddAdmin />} />
                <Route path="/superAdmin/admin" element={<ViewAdmin />} />

            </Routes>
        
              {/* <SuperAdmin /> */}
              {/* <PrimaryPage /> */}
              {/* <PrimaryPageSuper />   */}
        

              {/* <AddEmployee /> */}
              {/* <ViewRooms /> */}
              {/* <AddAdmin /> */}

          
              

  
      </Router>
          
        </div>
  );
}

export default App;
