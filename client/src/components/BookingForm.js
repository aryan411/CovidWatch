import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";

function BookingForm(props) {
  const locations = useSelector((state) => state);

  const { id } = useParams();
  const location = locations.find((location) => location.id === parseInt(id));
  const [patient, setPatient] = useState({
    name: "",
    email: "",
    phone: "",
    vaccineType:location?.vaccineType,
    dose: "",
  });
  let navigate = useNavigate();
  const dispatch = useDispatch()
//   useEffect(()=>{
//      navigate("/confirmation")
//   },[dispatch])
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADDP",
      payload: { id: id, available: location?.available, patient: patient },
    });
    // const confirmation = window.confirm("Your slot is booked successfully")
    alert("Your slot is booked successfully")
   
  };

  return (
    <div className="container mt-3">
      <h1>Book Appointment</h1>
      <div className="row" id="rowResult">
        <div className="card" id="bookingCard">
          <div className="card-body d-flex align-items-start">
            <div>
              <h4 className="card-title">{location.name}</h4>
              <p className="card-text" id="pResult">
                {location.address}, {location.city}, {location.province},{" "}
                {location.postalCode}
              </p>
            </div>
            <ul className="list-group list-group-flush d-flex align-items-end">
              <h5>
                <li className="list-group-item">{location.vaccineType}</li>
              </h5>
              <li className="list-group-item">{location.date}</li>
              <li className="list-group-item">{location.time}</li>
            </ul>
          </div>
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={patient.name}
            onChange={(event) =>
              setPatient((pre) => ({ ...pre, name: event.target.value }))
            }
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={patient.email}
            onChange={(event) =>
              setPatient((pre) => ({ ...pre, email: event.target.value }))
            }
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            value={patient.phone}
            onChange={(event) =>
              setPatient((pre) => ({ ...pre, phone: event.target.value }))
            }
          />
        </Form.Group>

        <Form.Group controlId="formDoses">
          <Form.Label>Doses</Form.Label>
          <Form.Control
            type="number"
            value={patient.doses}
            onChange={(event) =>
              setPatient((pre) => ({ ...pre, dose: event.target.value }))
            }
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Book Appointment
        </Button>
      </Form>
    </div>
  );
}

export default BookingForm;
