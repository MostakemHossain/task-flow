import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { loginSchema, registerSchema } from "../schema";

const app = new Hono()
  .post("/login", zValidator("json", loginSchema), async (c) => {
    const { email, password } = c.req.valid("json");
    return c.json({ email, password });
  })
  .post(
    "/register",
    zValidator("json", registerSchema),

    async (c) => {
      const { name, email, password } = c.req.valid("json");
      console.log(name);
      console.log(email);
      console.log(password);
      return c.json({ name, email, password });
    }
  );
export default app;
