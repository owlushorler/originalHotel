// import logo from './logo.svg';
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
import Nav2 from './components/User/home/nav2/nav2';
import Nav3 from './components/User/home/nav3/nav3';
import Topnav from './components/User/home/nav/nav';
import Footer from './components/User/footer/footer';
import Rooms from './components/User/rooms/room/room';
import BookingForm from './components/User/rooms/bookingForm/BookingForm';
import About from './components/User/about/about';
import Fac from './components/User/facil/fac';
function App() {
  return (
    <div >
     
      <div>
    
          <Router>
          <Topnav/>
          <Nav2/>
         
          
          {/* <LandingPage /> */}
            <Routes>
            <Route path="/" element={ <Nav3/>} />
            <Route path="/room" element={ <Rooms/>} />
            <Route path='/booking' element={<BookingForm/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/fac' element={<Fac/>}/>
            
        
            {/* <Route
          path="/"
          element={
            <TransitionGroup>
              <CSSTransition
                classNames="page-slide"
                timeout={{ enter: 300, exit: 300 }}
              >
                < LandingPage/>
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route
          path="/login"
          element={
            <TransitionGroup>
              <CSSTransition
                classNames="page-slide"
                timeout={{ enter: 300, exit: 300 }}
              >
                <SuperAdmin />
              </CSSTransition>
            </TransitionGroup>
          }
        /> */}
              <Route path="/admin" element={< LandingPage/>} />
              <Route path="/login" element={<SuperAdmin />} />
              <Route path="/superAdmin" element={<PrimaryPageSuper />} />
              <Route path="/admin" element={<PrimaryPage />} />
              <Route path="/employees" element={<ViewEmployeeCard />} />
                {/* <Route path="/customers" element={<Customers />} /> */}
                <Route path="/rooms" element={<ViewRooms />} />
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
