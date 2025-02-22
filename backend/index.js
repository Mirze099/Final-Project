import express from "express";
import cors from "cors";
const app = express();
import "./config/Config.js";
import { route } from "./router/Router.js";

app.use(cors());
app.use(express.json());
app.use("/product", route);

app.listen(3000, () => {
  console.log("3000 portunda dinlenilir");
});
