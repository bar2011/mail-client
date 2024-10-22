import type { CapacitorConfig } from "@capacitor/cli";
import * as dotenv from "dotenv";
dotenv.config();

const config: CapacitorConfig = {
  appId: "me.bareinav.mailclient",
  appName: "mail-client",
  webDir: "out",
  server: {
    url: process.env.NEXT_PUBLIC_CLIENT_URL,
    cleartext: true,
  },
  ios: {
    allowsLinkPreview: false,
    scrollEnabled: true,
    backgroundColor: "#ffffff",
  },
};

export default config;
