import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { prisma } from "@oi-auth/db";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "sqlite", "mysql", ...etc
  }),
});
