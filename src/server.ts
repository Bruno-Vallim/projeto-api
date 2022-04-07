import "reflect-metadata"
import  express, { Router }  from "express";
import "./database";
import { routes } from "./routes";
import { env } from "process";

const app = express();

app.use(express.json())

app.use(routes)

app.listen(process.env.PORT || 3000, () => console.log("server is running port 3000"))