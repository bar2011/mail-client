import path from "path";
import dotenv from "dotenv";
import fs, { type PathOrFileDescriptor } from "fs";
import log from "electron-log";

export default function getEnvConfig() {
  let envPath: PathOrFileDescriptor;
  if (process.env.NODE_ENV === "development") {
    // In development, use the path you've been using
    log.info("dev")
    envPath = path.join(__dirname, "..", "..", "..", ".env");
  } else {
    // In production, the .env file should be in the app's root
    log.info("prod")
    envPath = path.join(process.resourcesPath, ".env");
  }
  log.error("test error")

  try {
    const envConfig = dotenv.parse(fs.readFileSync(envPath));
    return envConfig;
  } catch (error) {
    log.error("Failed to load .env file:", error);
    return {};
  }
}
