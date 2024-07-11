import EmployeeList from "@/components/EmployeeList";
export const dynamic = "force-dynamic";
export default function EmployeeHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EmployeeList />
    </main>
  );
}
