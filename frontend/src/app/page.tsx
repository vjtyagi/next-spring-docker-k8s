import EmployeeList from "@/components/EmployeeList";
import EmployeeListClient from "@/components/EmployeeListClient";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <Link href={"/employees"}>Employees</Link>
    </main>
  );
}
