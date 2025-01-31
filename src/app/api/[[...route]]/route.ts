/* eslint-disable @typescript-eslint/no-unused-vars */
import { Hono } from "hono";
import { handle } from "hono/vercel";
const app = new Hono().basePath("/api");

import auth from "@/features/auth/server/route";
import workspaces from "@/features/workspaces/server/route";
const routes = app.route("/auth", auth)
.route("/workspaces",workspaces);
;

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
