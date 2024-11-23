import { response } from "express";
import { PalyerModel as PlayerModel } from "../models/playerModel";
import * as playersRepository from "../repositories/playersRepository";
import * as HttpResponse from "../utils/httpHelper";
import { StatisticsModel } from "../models/statisticsModel";

export const getPlayerService = async () => {

    const data = await playersRepository.findAllPlayers()
    let response = null

    if (data) {

        response = await HttpResponse.ok(data);

    } else {
        response = await HttpResponse.noContent()
    }

    return response
}

export const getPlayerByIdService = async (id: number) => {
    const data = await playersRepository.findPlayerById(id);
    let response = null;

    if (data) {
        response = HttpResponse.ok(data);
    } else {
        response = HttpResponse.noContent()
    }

    return response
};

export const createPlayerSerivice = async (player: PlayerModel) => {
    let response = null;
    if (Object.keys(player).length !== 0) {
        await playersRepository.insertPlayer(player)
        response = await HttpResponse.created();
    } else {
        response = await HttpResponse.badRequest();
    }
    return response;
};

export const deletePlayerService = async (id: number) => {
    let response = null;
    const isDeleted = await playersRepository.deleteOnePlayer(id)

    if (isDeleted) {
        response = await HttpResponse.ok({ message: "deleted" })
    } else {
        response = await HttpResponse.badRequest()
    }


    return response;
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    const data = await playersRepository.findAndModifyPlayer(id, statistics)
    let response = null;
    if (Object.keys(data).length === 0) {
        response = await HttpResponse.badRequest();
    } else {
        response = await HttpResponse.ok(data);
    }

    return response;
}