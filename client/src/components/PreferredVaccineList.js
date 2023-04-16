import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { faSearch, faSyringe, faCalendarDays, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';
import { useSelector } from 'react-redux';

function PreferredVaccineList(props) {
    const locations = useSelector((state)=> state)
    const [selectedType, setSelectedType] = useState(null);
    let navigate = useNavigate();

    const filteredLocations = selectedType
        ? locations.filter(location => location.vaccineType === selectedType)
        : locations;

    const handleTypeSelect = type => setSelectedType(type);

    const handleBookAppointment = (id) => {
        console.log(`Book appointment for location with ID ${id}`);
        navigate('/booking-form/' + id);
    };

    const VaccineTypeFilter = ({ types, selectedType, onSelect }) => {
        return (
            <div className="mb-3 App">
                {types.map(type => (
                    <Button
                        key={type}
                        variant={selectedType === type ? 'dark' : 'outline-dark'}
                        onClick={() => onSelect(type)}
                        className="me-2"
                    >
                        {type}
                    </Button>
                ))}
            </div>
        );
    };

    return (
        <div className="container mt-3">
            <h1>Vaccine Locations</h1>

            <VaccineTypeFilter
                types={[...new Set(locations.map(location => location.vaccineType))]}
                selectedType={selectedType}
                onSelect={handleTypeSelect}
            />

            <div className="row" id="rowResult">
                {filteredLocations.map((location) => (
                    <div className="card" id="cardResult" key={location.id}>
                        <div className="card-body">
                            <h4 className="card-title">{location.name}</h4>
                            <p className="card-text" id="pResult">{location.address}, {location.city}, {location.province}, {location.postalCode}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><FontAwesomeIcon icon={faSyringe} /> {location.vaccineType}</li>
                            <li className="list-group-item"><FontAwesomeIcon icon={faCalendarDays} /> {location.date} - {location.time}</li>
                            <li className="list-group-item">{location.available ? (
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
};

export default PreferredVaccineList;