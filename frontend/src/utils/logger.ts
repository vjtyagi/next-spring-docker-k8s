import { createLogger, format, transports } from "winston";

const logFilePath = "/app/logs/app.log";

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: "next-api" },
  transports: [
    new transports.File({
      filename: logFilePath,
      silent: process.env.SILENCE_LOG === "true",
    }),
  ],
});

// If we're not in production, also log to the console
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
}

export default logger;
