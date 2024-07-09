import logger from "./logger";
import { getServerSideConfig } from "./serverConfig";

export async function getEmployeeData() {
  const { apiHost, apiPort } = getServerSideConfig();
  const API_URL = `http://${apiHost}:${apiPort}`;
  logger.info(`getEmployeeData: ${API_URL}`);
  const res = await fetch(`${API_URL}/employees`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
