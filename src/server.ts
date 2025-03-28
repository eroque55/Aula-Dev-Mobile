import express from "express";
import { router } from "./routes";
import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.listen(8000, () => {
   console.log("Start at 8000");
});
