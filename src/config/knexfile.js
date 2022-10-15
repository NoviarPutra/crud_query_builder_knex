import dotenv from "dotenv";
import path from "path";
import url from "url";
dotenv.config();
dotenv.config({ path: "./../../.env" });
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const development = {
  client: "mysql2",
  connection: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
  },
  migrations: {
    directory: __dirname + "../../tables/migrations",
  },
  seeds: {
    directory: __dirname + "../../tables/seeds",
  },
};
