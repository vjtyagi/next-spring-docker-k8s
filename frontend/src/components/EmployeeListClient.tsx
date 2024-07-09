"use client";
import { useEmployeesData } from "@/utils/config";

interface Employee {
  id: number;
  name: string;
  position: string;
}
export default function EmployeeListClient() {
  const employees = useEmployeesData();
  return (
    <ul>
      {employees.map((employee: Employee) => {
        return (
          <li key={employee.id}>
            <span>Name: {employee.name}</span>
            <span>Position: {employee.position}</span>
          </li>
        );
      })}
    </ul>
  );
}
