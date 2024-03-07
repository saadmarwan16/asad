import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { env } from "@asad/env";
import { activities } from "./schema/activities";
import { executives } from "./schema/executives";
import { presidents } from "./schema/presidents";
import { timeline } from "./schema/timeline";

const client = createClient({
  url: env.DATABASE_URL,
  authToken: env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, {
  schema: {
    activities,
    executives,
    presidents,
    timeline,
  },
});
