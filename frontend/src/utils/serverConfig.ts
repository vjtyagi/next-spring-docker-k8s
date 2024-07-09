import logger from "./logger";

export function getServerSideConfig() {
  logger.info("API_HOST:" + process.env.API_HOST);
  logger.info("NEXT_PUBLIC_API_HOST:" + process.env.NEXT_PUBLIC_API_HOST);
  logger.info("API_PORT:" + process.env.API_PORT);
  logger.info("NEXT_PUBLIC_API_PORT:" + process.env.NEXT_PUBLIC_API_PORT);

  return {
    apiHost: process.env.API_HOST || process.env.NEXT_PUBLIC_API_HOST,
    apiPort: process.env.API_PORT || process.env.NEXT_PUBLIC_API_PORT,
  };
}
