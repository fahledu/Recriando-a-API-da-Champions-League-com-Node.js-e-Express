import express from "express";
import router from "./routes";

const app = express();

function createApp() {

    app.use(express.json())

   app.use("/api", router)

    return app;
}


export default createApp;