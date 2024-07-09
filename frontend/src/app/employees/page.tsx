import EmployeeList from "@/components/EmployeeList";

export default function EmployeeHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EmployeeList />
    </main>
  );
}
