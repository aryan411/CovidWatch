import { useSelector } from "react-redux";
import "../styles/AdminControl.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdminControl() {
  const locations = useSelector((state) => {
    return state;
  });

  const [allPatients,setAllPatient] = useState([]);
  useEffect(()=>{
    getAllPatients(locations)
  },[locations])
  function getAllPatients(clinics) {
    const patients = [];
    clinics.forEach((clinic) => {
      clinic.listOfPatient.forEach((patient) => {
        patients.push(patient);
      });
      setAllPatient(patients)
    });
  }
  const navigate = useNavigate();
  return (
    <>
      <h1>Hospital Stock Availability</h1>
      <table>
        <thead>
          <tr>
            <th>Vaccine Type</th>
            <th>Number of Vaccines</th>
            <th>Hospital Name</th>
            <th>Location</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {locations?.map((location) => (
            <tr>
              <td>{location?.vaccineType}</td>
              <td>{location?.limit}</td>
              <td>{location?.name}</td>
              <td>{location?.province}</td>
              <td>
                <button
                  class="edit-btn"
                  onClick={() => {
                    navigate(`/admin/add-location/${location.id}`);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div class="App">
        <nav class="navbar">
          <h1>List of People Booked for Vaccine</h1>
        </nav>

        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Vaccine Type</th>
            <th>Dose</th>
          </tr>
          {allPatients?.map((patient)=>
              <tr>
                <td>{patient.name}</td>
                <td>{patient.email}</td>
                <td>{patient.phone}</td>
                <td>{patient.vaccineType}</td>
                <td>{patient.dose}</td>
              </tr>
            )}
        </table>
      </div>
    </>
  );
}
