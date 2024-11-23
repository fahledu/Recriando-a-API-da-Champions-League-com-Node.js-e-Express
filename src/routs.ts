import { Router } from "express";
import * as PlayerController from "./controllers/playersController";
import { getClubs } from "./controllers/clubsController";

const router = Router()

router.get("/players", PlayerController.getPlayer);
router.get("/players/:id", PlayerController.getPlayerById);

router.delete("/players/:id", PlayerController.deletePlayer)

router.post("/players", PlayerController.postPlayer);

router.patch("/players/:id", PlayerController.updatePlayer)

router.get("/clubs", getClubs);

export default router