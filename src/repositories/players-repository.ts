import { PLayerModel } from "../models/player-model";


const database: PLayerModel[] = [
    { id: 1, name: "Messi" },
    { id: 2, name: 'Ronaldo' }
];

export const findAllPlayers = async (): Promise<PLayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PLayerModel | undefined> => {
    return database.find(player => player.id === id)
}