import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import '../App.css';

function BookingForm(props) {
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
    const { id } = useParams();
    const location = locations.find(location => location.id === parseInt(id));
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [doses, setDoses] = useState('');
    let navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        console.log(`Submit form for location with ID ${location.id}: name=${name}, email=${email}, phone=${phone}`);
        navigate('/confirmation');
    };

    return (
        <div className="container mt-3">
            <h1>Book Appointment</h1>
            <div class="row" id="rowResult">
                <div class="card" id='bookingCard'>
                    <div class="card-body d-flex align-items-start">
                        <div>
                            <h4 class="card-title">{location.name}</h4>
                            <p class="card-text" id="pResult">{location.address}, {location.city}, {location.province}, {location.postalCode}</p>
                        </div>
                        <ul class="list-group list-group-flush d-flex align-items-end">
                            <h5><li class="list-group-item">{location.vaccineType}</li></h5>
                            <li class="list-group-item">{location.date}</li>
                            <li class="list-group-item">{location.time}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={event => setName(event.target.value)} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={event => setEmail(event.target.value)} />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" value={phone} onChange={event => setPhone(event.target.value)} />
                </Form.Group>

                <Form.Group controlId="formDoses">
                    <Form.Label>Doses</Form.Label>
                    <Form.Control type="number" value={doses} onChange={event => setDoses(event.target.value)} />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Book Appointment
                </Button>
            </Form>
        </div>
    );
};

export default BookingForm;
