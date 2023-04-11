import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import '../App.css';

function AddLocation(props) {
    const [locations, setLocations] = useState({
        name: '',
        address: '',
        city: '',
        province: '',
        postalCode: '',
        vaccineType: '',
        available: '',
        date: '',
        time: '',
    });
    
    const navigate = useNavigate();

    const apiURL = 'http://localhost:3000/api/locations';

    const handleSubmit = (e) => {
        e.preventDefault();
        const location = {
            name: locations.name,
            address: locations.address,
            city: locations.city,
            province: locations.province,
            postalCode: locations.postalCode,
            vaccineType: locations.vaccineType,
            available: locations.available,
            date: locations.date,
            time: locations.time,
        };
        axios.post(apiURL, location)
            .then((res) => {
                console.log(res.data);
                navigate.push('/location-list');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container">
            <h1>Add Location</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Province</Form.Label>
                    <Form.Control type="text" placeholder="Enter province" value={province} onChange={(e) => setProvince(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter postal code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Vaccine Type</Form.Label>
                    <Form.Control type="text" placeholder="Enter vaccine type" value={vaccineType} onChange={(e) => setVaccineType(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Available</Form.Label>
                    <Form.Control type="text" placeholder="Enter available" value={available} onChange={(e) => setAvailable(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="text" placeholder="Enter date" value={date} onChange={(e) => setDate(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="text" placeholder="Enter time" value={time} onChange={(e) => setTime(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddLocation;