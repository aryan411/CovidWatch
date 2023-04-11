import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { faSearch, faSyringe, faCalendarDays, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

function LocationList(props) {
    const [locations, setLocations] = useState([
        {
            id: 1,
            name: 'Clinic Center 1',
            address: '1 Address St',
            city: 'Toronto',
            province: 'Ontario',
            postalCode: '111 111',
            vaccineType: 'Johnson & Johnson',
            available: true,
            date: '2023-04-15',
            time: '10:00 AM',
        },
        {
            id: 2,
            name: 'Clinic Center 2',
            address: '2 Address St',
            city: 'Ajax',
            province: 'Ontario',
            postalCode: '222 222',
            vaccineType: 'Moderna',
            available: true,
            date: '2023-04-15',
            time: '10:00 AM',
        },
        {
            id: 3,
            name: 'Clinic Center 3',
            address: '3 Address St',
            city: 'Pickering',
            province: 'Ontario',
            postalCode: '333 333',
            vaccineType: 'Pfizer',
            available: true,
            date: '2023-04-15',
            time: '10:00 AM',
        },
        {
            id: 4,
            name: 'Clinic Center 3',
            address: '3 Address St',
            city: 'Pickering',
            province: 'Ontario',
            postalCode: '333 333',
            vaccineType: 'Moderna',
            available: false,
            date: '2023-04-15',
            time: '11:00 AM',
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    let navigate = useNavigate();
    const onChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredLocations = locations.filter((location) => {
        return (
            location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
            location.province.toLowerCase().includes(searchTerm.toLowerCase()) ||
            location.postalCode.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const handleBookAppointment = (id) => {
        console.log(`Book appointment for location with ID ${id}`);
        navigate('/booking-form/' + id);
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
                <Button variant="outline-dark"><FontAwesomeIcon icon={faSearch} /></Button>
            </Form>
            <div class="row" id="rowResult">
                {filteredLocations.map((location) => (
                    <div class="card" id="cardResult" key={location.id}>
                        <div class="card-body">
                            <h4 class="card-title">{location.name}</h4>
                            <p class="card-text" id="pResult">{location.address}, {location.city}, {location.province}, {location.postalCode}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><FontAwesomeIcon icon={faSyringe} /> {location.vaccineType}</li>
                            <li class="list-group-item"><FontAwesomeIcon icon={faCalendarDays} /> {location.date} - {location.time}</li>
                            <li class="list-group-item">{location.available ? (
                                <div>
                                    <FontAwesomeIcon id='unbooked' icon={faCircleCheck} />
                                    <span className="ms-2">Available</span>
                                </div>
                            ) : (
                                <div>
                                    <FontAwesomeIcon id='booked' icon={faCircleXmark} />
                                    <span className="ms-2">Not available</span>
                                </div>
                            )}</li>
                        </ul>
                        <div class="card-body">
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
};

export default LocationList;