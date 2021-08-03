import { config } from "@keystone-next/keystone/schema";
import { statelessSessions } from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";
import { lists } from "./schema";
require("dotenv").config({ path: ".env" });

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  sessionData: "name",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

const db = {
  adapter: "prisma_postgresql",
  url: process.env.DB_URL,
};

const ui = {
  isAccessAllowed: (context) => !!context.session?.data,
};

const server = {
  cors: {
    origin: "*",
  //  credentials: true,
  },
  port:
    process.env.NODE_ENV === "production"
      ? process.env.PORT_PRODUCTION
      : process.env.PORT_DEVELOPMENT,
};

const session = statelessSessions({
  secret: process.env.SESSION_SECRET,
  maxAge: /** 30 days */ 60 * 60 * 24 * 30,
});

const images = {
  upload: "local",
  local: {
    storagePath: "public/images",
    baseUrl: "/images",
  },
};

export default withAuth(
  config({
    lists,
    db,
    ui,
    server,
    session,
    images,
  })
);
