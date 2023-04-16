import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  faSearch,
  faSyringe,
  faCalendarDays,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
import { useSelector } from "react-redux";

function LocationList(props) {
  const locations = useSelector((state) => {
    return state;
  });
  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();
  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };
//   useEffect(() => {
//     debugger;
//     console.log(locations);
//   }, [locations]);
  const filteredLocations = locations?.filter((location) => {
    return (
      location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.province.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.postalCode.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleBookAppointment = (id) => {
    console.log(`Book appointment for location with ID ${id}`);
    navigate("/booking-form/" + id);
  };

  return (
    <div className="container mt-3">
      <h1>Vaccine Locations</h1>
      <Form className="my-3 d-flex align-items-end">
        <Form.Control
          type="text"
          placeholder="Search by city, province, or postal code"
          className="mr-sm-2"
          onChange={onChange}
        />
        <Button variant="outline-dark">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </Form>
      <div className="row" id="rowResult">
        {filteredLocations?.map((location) => (
          <div className="card" id="cardResult" key={location.id}>
            <div className="card-body">
              <h4 className="card-title">{location.name}</h4>
              <p className="card-text" id="pResult">
                {location.address}, {location.city}, {location.province},{" "}
                {location.postalCode}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <FontAwesomeIcon icon={faSyringe} /> {location.vaccineType}
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faCalendarDays} /> {location.date} -{" "}
                {location.time}
              </li>
              <li className="list-group-item">
                {location.available ? (
                  <div>
                    <FontAwesomeIcon id="unbooked" icon={faCircleCheck} />
                    <span className="ms-2">Available</span>
                  </div>
                ) : (
                  <div>
                    <FontAwesomeIcon id="booked" icon={faCircleXmark} />
                    <span className="ms-2">Not available</span>
                  </div>
                )}
              </li>
            </ul>
            <div className="card-body">
              <Button
                variant="dark"
                disabled={!location.available}
                onClick={() => handleBookAppointment(location.id)}
              >
                Book
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocationList;
