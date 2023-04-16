import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Routes
} from "react-router-dom";
import { faSyringe, faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//
// This app requires react-bootstrap and bootstrap installed: 
//    npm install react-bootstrap bootstrap
//
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './App.css';
//
import Home from './components/Home';
import LocationList from './components/LocationList';
import PreferredVaccineList from './components/PreferredVaccineList';
import Confirmation from './components/Confirmation';
import BookingForm from './components/BookingForm';
import AddLocation from './components/AddLocation'
import { AdminSignin } from './components/AdminSignin';
import AdminSignup from './components/AdminSignup';
import AdminControl from './components/AdminControl';
function App() {

  return (
    <div>
      <Router>
        <Navbar className='navbar' variant="light" expand="lg">
          <Container>
            <Navbar.Brand href="home">CovidWatch</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="ml-auto">
                {/* <Nav.Link className='ms-auto' as={Link} to="/home" >Home</Nav.Link> */}
                <Nav.Link className='ms-auto' as={Link} to="/location-list" ><FontAwesomeIcon icon={faHouseChimneyMedical} /> Location List</Nav.Link>
                <Nav.Link className='ms-auto' as={Link} to="/preferred-vaccine-list" ><FontAwesomeIcon icon={faSyringe} /> Preferred List</Nav.Link>
                {/* <Nav.Link className='ms-auto' as={Link} to="/admin/add-location" >Add Location</Nav.Link> */}
                <Nav.Link className='ms-auto' as={Link} to="/admin/signup" >signup</Nav.Link>
                <Nav.Link className='ms-auto' as={Link} to="/admin/signin" >signin</Nav.Link>
                <Nav.Link className='ms-auto' as={Link} to="/admin/control" >control</Nav.Link>
                
                <Nav.Link className='ms-auto' as={Link} to="/admin/signin" >sign out</Nav.Link>

                {/* <Nav.Link className='ms-auto' as={Link} to="/booking-form" >Booking Form</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div>
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="location-list" element={<LocationList />} />
            <Route path="preferred-vaccine-list" element={<PreferredVaccineList />} />
            <Route path="booking-form/:id" element={<BookingForm />} />
            <Route path="confirmation" element={<Confirmation />} />
            <Route path="admin/signup" element={<AddLocation/>}/>
            <Route path="admin/signup/:id" element={<AddLocation/>}/>
            <Route path="admin/signin" element={<AdminSignin/>}/>
            {/* <Route path="admin/signup" element={<AdminSignup/>}/> */}
            <Route path="admin/control" element={<AdminControl/>}/>
          </Routes>
        </div>

      </Router>

      <div className="footer App">
        &copy;{new Date().getFullYear()} CovidWatch
      </div>
    </div>

  );
}
//
export default App;
