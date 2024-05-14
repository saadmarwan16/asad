import { type Config } from "drizzle-kit";

import { env } from "@asad/env";

export default {
  schema: "./src/server/db/schema",
  driver: "turso",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  },
  tablesFilter: ["asad_*"],
  out: "./drizzle",
} satisfies Config;
