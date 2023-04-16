import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";

function AddLocation(props) {
  const dispatch = useDispatch();
  const [location, setLocation] = useState({
    name: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    vaccineType: "",
    available: "",
    date: "",
    time: "",
    limit: 10,
    username: "",
    password: "",
    listOfPatient: [],
  });
  const locations = useSelector((state) => {
    return state;
  });

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
     setLocation(locations.find((l) => l.id == id));
    }
  }, [id]);

  //   const apiURL = "http://localhost:3000/api/location";

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADDL", payload: location });
    navigate("/location-list");
  };

  return (
    <div className="container">
      <h1>{id? "Edit Profile":"Hospital/Clinic Signup"}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={location.name}
            onChange={(e) =>
              setLocation((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={location.username}
            onChange={(e) =>
              setLocation((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={location.password}
            onChange={(e) =>
              setLocation((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={location.address}
            onChange={(e) =>
              setLocation((prev) => ({ ...prev, address: e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={location.city}
            onChange={(e) =>
              setLocation((prev) => ({ ...prev, city: e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Province</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter province"
            value={location.province}
            onChange={(e) =>
              setLocation((prev) => ({ ...prev, province: e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postal code"
            value={location.postalCode}
            onChange={(e) =>
              setLocation((prev) => ({ ...prev, postalCode: e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Vaccine Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter vaccine type"
            value={location.vaccineType}
            onChange={(e) =>
              setLocation((prev) => ({ ...prev, vaccineType: e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Available</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter available"
            value={location.available}
            onChange={(e) =>
              setLocation((prev) => ({ ...prev, available: e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter date"
            value={location.date}
            onChange={(e) =>
              setLocation((prev) => ({ ...prev, date: e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter time"
            value={location.time}
            onChange={(e) =>
              setLocation((prev) => ({ ...prev, time: e.target.value }))
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddLocation;
