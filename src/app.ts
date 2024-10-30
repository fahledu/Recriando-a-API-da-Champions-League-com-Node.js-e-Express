import express, {Request, Response, json} from "express";
import { getPlayer } from "./controllers/players-controller";

const app = express();

function createApp() {

    app.use(json())

    app.get('/', getPlayer)

    return app;
}


export default createApp;