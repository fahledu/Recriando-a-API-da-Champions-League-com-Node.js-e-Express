import * as HttpResponse from "../utils/httpHelper";
import * as repository from "../repositories/clubsRepository"

export const getClubService = async () => {
    const data = await repository.findAllClubs();

    const response = HttpResponse.ok(data);

    return response;

}