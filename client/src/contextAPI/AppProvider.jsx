import { configureStore } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const clinicsArray = [
  {
    id: 1,
    name: "Clinic Center 1",
    address: "1 Address St",
    city: "Toronto",
    province: "Ontario",
    username: "abc",
    password: "abc",
    postalCode: "111 111",
    vaccineType: "Johnson & Johnson",
    available: false,
    date: "2023-04-15",
    time: "10:00 AM",
    limit: 10,
    listOfPatient: [],
  },
  {
    id: 2,
    name: "Clinic Center 2",
    address: "2 Address St",
    city: "Ajax",
    province: "Ontario",
    username: "abc",
    password: "abc",
    postalCode: "222 222",
    vaccineType: "Moderna",
    available: true,
    date: "2023-04-15",
    time: "10:00 AM",
    limit: 10,
    listOfPatient: [],
  },
  {
    id: 3,
    name: "Clinic Center 3",
    address: "3 Address St",
    city: "Pickering",
    username: "abc",
    password: "abc",
    province: "Ontario",
    postalCode: "333 333",
    vaccineType: "Pfizer",
    available: true,
    date: "2023-04-15",
    time: "10:00 AM",
    limit: 10,
    listOfPatient: [],
  },
  {
    id: 4,
    name: "Clinic Center 3",
    address: "3 Address St",
    city: "Pickering",
    username: "abc",
    password: "abc",
    province: "Ontario",
    postalCode: "333 333",
    vaccineType: "Moderna",
    available: false,
    date: "2023-04-15",
    time: "11:00 AM",
    limit: 10,
    listOfPatient: [],
  },
];



function clinics(state = clinicsArray, action) {
  switch (action.type) {

    case "ADDL": {
      const temp = [...state];
      temp.push({ ...action.payload, id: state.length + 1 });
      console.log("temp", temp);
      return temp;
    }
    case "AVA": {
      const temp = [...state];
      temp.forEach((cl) => {
        if (cl.id == action.payload.id) cl.available = action.payload.available;
      });
      return temp;
    }
    case "LIM": {
      const temp = [...state];
      temp.forEach((cl) => {
        if (cl.id == action.payload.id) cl.limit = action.payload.limit;
      });
      return temp;
    }
    case "ADDP": {
      const temp = JSON.parse(JSON.stringify(state));
      temp.forEach((cl) => {
        if (cl.id == action.payload.id && cl.available) {
          {
            cl.listOfPatient.push(action.payload.patient);
          }
          if (cl.listOfPatient.length >= cl.limit) cl.available = false;
        }
      });

      console.log(temp);
      return temp;
    }
    default:
      return state;
  }
}

export const store = configureStore({ reducer: clinics });
