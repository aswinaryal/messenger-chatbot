require("dotenv").config();
import express from "express";

import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

configViewEngine(app);

initWebRoutes(app);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("app running on port", port);
});
