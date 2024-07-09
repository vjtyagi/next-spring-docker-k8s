import { useState, useEffect } from "react";

export function useEmployeesData() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);
  return employees;
}
