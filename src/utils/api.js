import axios from "axios";

const studentsData = [
  {
    firstName: "Utkarsh",
    lastName: "Tyagi",
    age: 20,
    gender: "male",
  },
  {
    firstName: "Manish",
    lastName: "Hundekar",
    age: 22,
    gender: "male",
  },
  {
    firstName: "Less",
    lastName: "Creative",
    age: -1,
    gender: "who knows",
  },
];

const getStudentsData = () => {
  return axios.get(
    "https://reduxcart-339a9-default-rtdb.firebaseio.com/students.json"
  );
};

function saveStudentsData() {
  return axios.post(
    "https://reduxcart-339a9-default-rtdb.firebaseio.com/students.json",
    studentsData
  );
}

export { getStudentsData, saveStudentsData };
