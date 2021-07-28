import { config } from "@keystone-next/keystone/schema";
import { statelessSessions } from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";

import { lists } from "./schema";

require("dotenv").config({ path: ".env" });

let sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "The SESSION_SECRET environment variable must be set in production"
    );
  } else {
    sessionSecret = "-- DEV COOKIE SECRET; CHANGE ME --";
  }
}

let sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  sessionData: "name",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

const session = statelessSessions({
  secret: sessionSecret,
  maxAge: sessionMaxAge,
});

export default withAuth(
  config({
    lists,
    db: {
      adapter: "prisma_postgresql",
      url: process.env.DATABASE_URL,
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    server: {
      cors: {
        origin: /jatwing\.com$/,
	credentials: true,
      },
      port: process.env.PORT,
    },
    session,
    images: {
      upload: "local",
      local: {
        storagePath: "public/images",
        baseUrl: "/images",
      },
    },
  })
);
