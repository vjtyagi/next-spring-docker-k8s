export const dynamic = "force-dynamic";
import { getEmployeeData } from "@/utils/api";
import logger from "@/utils/logger";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  const employees = await getEmployeeData();
  logger.info("GET /api/employees");
  return NextResponse.json(employees, { status: 200 });
}
