import { getEmployeeData } from "@/utils/api";

interface Employee {
  id: number;
  name: string;
  position: string;
}
export default async function EmployeeList() {
  const employees: Employee[] = await getEmployeeData();
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
