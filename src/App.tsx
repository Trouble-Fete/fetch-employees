import { useState } from "react";
import "./App.css";
import EmployeeCard from "./componants/EmployeeCard";

const sampleEmployee = {
  name: {
    first: "Maurice",
    last: "Castillo",
  },
  email: "maurice.castillo@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/31.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    fetch("http://localhost:3310/api/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.results[0]);
      });
  };

  return (
    <div className="App">
      <EmployeeCard employee={employee} fetchEmployee={getEmployee} />
    </div>
  );
}

export default App;
