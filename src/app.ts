<<<<<<< HEAD
import express from "express";
import router from "./routes";

const app = express();

function createApp() {

    app.use(express.json())

   app.use("/api", router)
=======
import express, { json } from "express";
import cors from "cors"

import router from "./routs";


function createApp() {

    const app = express();
    app.use(json())

    app.use("/api", router)

    app.use(cors())
>>>>>>> 21cae64 (Primeiro commit - adicionando projeto)

    return app;
}

<<<<<<< HEAD

=======
>>>>>>> 21cae64 (Primeiro commit - adicionando projeto)
export default createApp;