import { Request, Response } from "express"
import * as services from "../services/playersService"
import { StatisticsModel } from "../models/statisticsModel";


export const getPlayer = async (req: Request, res: Response) => {

    const HttpResponse = await services.getPlayerService();


    res.status(HttpResponse.statusCode).json(HttpResponse.body)
};

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const HttpResponse = await services.getPlayerByIdService(id);
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const HttpResponse = await services.createPlayerSerivice(bodyValue)

    if (HttpResponse) {

        res.status(HttpResponse.statusCode).json(HttpResponse.body)
    }
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const HttpResponse = await services.deletePlayerService(id);

    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const bodyValue: StatisticsModel = req.body;
    const HttpResponse = await services.updatePlayerService(id, bodyValue);

    res.status(HttpResponse.statusCode).json(HttpResponse.body)
};

