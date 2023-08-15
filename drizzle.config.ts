import type { Config } from "drizzle-kit";

export default {
  schema: './src/schema.ts',
  // schema: [
  //   "./libs/shared/data-access/src/schemas/schema.ts",
  //   "./libs/shared/data-access/src/schemas/ovmp/schemas.ts",
  // ],
  out: './drizzle',
  // connectionString: process.env.DB_URL,
  user: 'root',
  password: '',
  host: '127.0.0.1',
  port: 3306,
  database: 'tmp',
  breakpoints: true,
} satisfies Config;
